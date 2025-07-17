import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminNews() {
  const [form, setForm] = useState({
    title: '',
    content: '',
    file: null,
    fileName: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: null
  });
  const [authChecked, setAuthChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('https://ywmn.iphrdafrica.org/api/check-auth', {
          credentials: 'include'
        });
        
        if (!res.ok) {
          throw new Error('Authentication check failed');
        }
        
        const data = await res.json();
        if (!data.is_authenticated || !data.is_admin) {
          navigate('/login');
        } else {
          setAuthChecked(true);
        }
      } catch (err) {
        console.error('Auth check error:', err);
        navigate('/login');
      }
    };
    
    checkAuth();
  }, [navigate]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 500 * 1024 * 1024) {
        setStatus({...status, error: 'File too large (max 500MB)'});
        return;
      }
      
      const validTypes = ['png', 'jpg', 'jpeg', 'gif', 'mp4'];
      const ext = file.name.split('.').pop().toLowerCase();
      if (!validTypes.includes(ext)) {
        setStatus({...status, error: 'Invalid file type'});
        return;
      }
      
      setForm({...form, file, fileName: file.name});
      setStatus({...status, error: null});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: null });

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('content', form.content);
    formData.append('file', form.file);

    try {
      const res = await fetch('https://ywmn.iphrdafrica.org/api/admin/news', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Request failed');
      }

      const data = await res.json();
      console.log('Response:', data);
      setStatus({ 
        loading: false, 
        success: data.message || 'Article published successfully!',
        error: null
      });
      setForm({ 
        title: '', 
        content: '', 
        file: null, 
        fileName: '' 
      });
       setTimeout(() => navigate('/admin/dashboard'), 1000);
    } catch (err) {
      setStatus({ 
        loading: false, 
        error: err.message,
        success: null
      });
    }
  };

  if (!authChecked) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Create News Article</h1>
      
      {/* Status messages */}
      {status.error && (
        <div className="mb-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
          {status.error}
        </div>
      )}
      
      {status.success && (
        <div className="mb-4 p-3 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
          {status.success}
        </div>
      )}

      {/* Article form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title *
          </label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({...form, title: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        {/* Content field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Content *
          </label>
          <textarea
            value={form.content}
            onChange={(e) => setForm({...form, content: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 min-h-[150px]"
            required
          />
        </div>
        
        {/* File upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Media File *
          </label>
          <div className="flex items-center">
            <label className="inline-flex flex-col items-center px-4 py-2 bg-white rounded-md border border-gray-300 shadow-sm cursor-pointer hover:bg-gray-50">
              <span className="text-sm font-medium text-gray-700">
                {form.fileName || 'Select a file...'}
              </span>
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/*,video/*"
                className="hidden"
                required
              />
            </label>
            {form.fileName && (
              <button
                type="button"
                onClick={() => setForm({...form, file: null, fileName: ''})}
                className="ml-2 text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            )}
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Supports: PNG, JPG, JPEG, GIF, MP4 (Max 500MB)
          </p>
        </div>
        
        {/* Submit button */}
        <button
          type="submit"
          disabled={status.loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md disabled:bg-blue-400 transition-colors duration-200"
        >
          {status.loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Publishing...
            </span>
          ) : 'Publish Article'}
        </button>
      </form>
    </div>
  );
}

export default AdminNews;