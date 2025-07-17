import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function News() {
  const [news, setNews] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsResponse = await fetch('https://ywmn.iphrdafrica.org/api/news');
        const newsData = await newsResponse.json();
        setNews(newsData);

        const authResponse = await fetch('https://ywmn.iphrdafrica.org/api/check-auth', {
          credentials: 'include'
        });
        if (authResponse.ok) {
          const authData = await authResponse.json();
          setIsAdmin(authData.is_admin);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest News</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {news.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {item.media_url && (
              <div className="w-full h-48 overflow-hidden">
                {item.media_type === 'image' ? (
                  <img 
                    src={item.media_url}  // Already a full URL
                    alt={item.title}
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                ) : (
                  <video controls className="w-full h-full object-cover">
                    <source src={item.media_url} type={`video/${item.media_url.split('.').pop()}`} />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.content}</p>
              <p className="text-sm text-gray-500">
                {new Date(item.date_posted).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
