import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

function NewsList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://ywmn.iphrdafrica.org/api/news');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-600">
        Error loading news: {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-24"> {/* Add pt-24 to avoid navbar overlap */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">News</h2>
        <p className="text-base md:text-lg text-gray-700">
          Media and communication enquiries:&nbsp;
          <a
            href="mailto:iphrdcommunications@gmail.com"
            className="text-blue-700 font-medium hover:underline hover:text-blue-900 transition duration-150"
          >
            iphrdcommunications@gmail.com
          </a>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* md:grid-cols-2 for 2 cards side-by-side */}
        {articles.map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default NewsList;
