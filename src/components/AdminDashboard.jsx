import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminDashboard() {
  const [articles, setArticles] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: '',
    content: '',
    media_url: '',
    media_type: 'image',
    media_file: null
  });

  useEffect(() => {
    axios
      .get('https://ywmn.iphrdafrica.org/api/news', { withCredentials: true })
      .then((res) => setArticles(res.data))
      .catch((err) => {
        console.error(err);
        toast.error('Failed to load articles');
      });
  }, []);

  const handleDelete = (id) => {
    toast.info(
      <div>
        <p className="font-semibold">Are you sure you want to delete this article?</p>
        <div className="flex justify-end gap-2 mt-2">
          <button 
            onClick={() => {
              toast.dismiss();
              executeDelete(id);
            }}
            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
          >
            Confirm Delete
          </button>
          <button 
            onClick={() => toast.dismiss()}
            className="px-3 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 text-sm"
          >
            Cancel
          </button>
        </div>
      </div>,
      {
        autoClose: false,
        closeButton: false,
        closeOnClick: false,
        draggable: false,
      }
    );
  };

  const executeDelete = (id) => {
    const deleteToast = toast.loading('Deleting article...');
    
    axios
      .delete(`https://ywmn.iphrdafrica.org/api/admin/news/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        setArticles((prev) => prev.filter((article) => article.id !== id));
        toast.update(deleteToast, {
          render: 'Article deleted successfully',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
          closeButton: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast.update(deleteToast, {
          render: 'Failed to delete article',
          type: 'error',
          isLoading: false,
          autoClose: 3000,
          closeButton: true,
        });
      });
  };

  const startEditing = (article) => {
    setEditingId(article.id);
    setEditForm({
      title: article.title,
      content: article.content,
      media_url: article.media_url,
      media_type: article.media_type,
      media_file: null
    });
  };

  const saveEdit = async () => {
    try {
      const formData = new FormData();
      formData.append('title', editForm.title);
      formData.append('content', editForm.content);
      
      if (editForm.media_file) {
        formData.append('file', editForm.media_file);
      } else {
        formData.append('media_url', editForm.media_url);
        formData.append('media_type', editForm.media_type);
      }

      await axios.patch(
        `https://ywmn.iphrdafrica.org/api/admin/news/${editingId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );

      setArticles(prev => prev.map(a => 
        a.id === editingId ? { 
          ...a, 
          title: editForm.title,
          content: editForm.content,
          media_url: editForm.media_url,
          media_type: editForm.media_type
        } : a
      ));
      toast.success('Article updated successfully');
      setEditingId(null);
    } catch (err) {
      console.error(err);
      toast.error('Failed to update article');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ToastContainer 
          position="top-right" 
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 pt-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Article Management</h1>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">Manage all published articles</p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Link
              to="/admin/news"
              className="flex items-center gap-2 bg-[#88C641]  hover:bg-[#2B256E] transition px-4 py-2 sm:px-5 sm:py-3 rounded-lg text-white font-semibold shadow-md w-full justify-center sm:w-auto text-sm sm:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              New Article
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th scope="col" className="px-4 py-3 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
                  <th scope="col" className="px-4 py-3 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Media</th>
                  <th scope="col" className="px-4 py-3 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {articles.length > 0 ? (
                  articles.map((article) => (
                    <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 sm:px-6 whitespace-nowrap">
                        {editingId === article.id ? (
                          <input
                            value={editForm.title}
                            onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                            placeholder="Article title"
                          />
                        ) : (
                          <div className="text-sm font-medium text-gray-900">{article.title}</div>
                        )}
                      </td>
                      <td className="px-4 py-4 sm:px-6 max-w-xs">
                        {editingId === article.id ? (
                          <textarea
                            value={editForm.content}
                            onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                            placeholder="Article content"
                          />
                        ) : (
                          <div className="text-sm text-gray-500">
                            {article.content.length > 100 ? `${article.content.slice(0, 100)}...` : article.content}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-4 sm:px-6 whitespace-nowrap">
                        {editingId === article.id ? (
                          <div className="space-y-3">
                            <div className="relative">
                              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Upload Media</label>
                              <input
                                type="file"
                                accept="image/*,video/*"
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  if (!file) return;

                                  const previewUrl = URL.createObjectURL(file);
                                  const isVideo = file.type.startsWith('video/');

                                  setEditForm(prev => ({
                                    ...prev,
                                    media_url: previewUrl,
                                    media_type: isVideo ? 'video' : 'image',
                                    media_file: file
                                  }));

                                  toast.success('Media selected for upload');
                                }}
                                className="block w-full text-xs sm:text-sm text-gray-500 file:mr-2 file:py-1 file:px-3 sm:file:mr-4 sm:file:py-2 sm:file:px-4 file:rounded-md file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                              />
                            </div>
                            {editForm.media_url && (
                              editForm.media_type === 'image' ? (
                                <img
                                  src={editForm.media_url}
                                  alt="Preview"
                                  className="w-24 h-auto rounded-lg object-cover"
                                />
                              ) : (
                                <video
                                  src={editForm.media_url}
                                  controls
                                  className="w-24 h-auto rounded-lg"
                                />
                              )
                            )}
                          </div>
                        ) : article.media_type === 'image' ? (
                          <img 
                            src={article.media_url} 
                            alt="media" 
                            className="w-24 h-auto rounded-lg object-cover" 
                          />
                        ) : (
                          <video 
                            src={article.media_url} 
                            controls 
                            className="w-24 h-auto rounded-lg" 
                          />
                        )}
                      </td>
                      <td className="px-4 py-4 sm:px-6 whitespace-nowrap text-right text-sm font-medium">
                        {editingId === article.id ? (
                          <div className="flex gap-2">
                            <button
                              onClick={saveEdit}
                              className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-2 border border-transparent text-xs sm:text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => {
                                if (editForm.media_url && editForm.media_url.startsWith('blob:')) {
                                  URL.revokeObjectURL(editForm.media_url);
                                }
                                setEditingId(null);
                              }}
                              className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-2 border border-gray-300 shadow-sm text-xs sm:text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="flex gap-2">
                            <button
                              onClick={() => startEditing(article)}
                              className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-2 border border-transparent text-xs sm:text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-[#88C641]  hover:bg-[#2B256E]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(article.id)}
                              className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-2 border border-transparent text-xs sm:text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                      No articles found. Create your first article!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;