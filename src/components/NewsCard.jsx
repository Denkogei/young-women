import React, { useState } from 'react';

function NewsCard({ article }) {
  const [imgError, setImgError] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);

  const handleImageError = (e) => {
    if (!imgError) {
      setImgError(true);
      e.target.src = '/placeholder-image.jpg';
    }
  };

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    setIsPortrait(naturalHeight > naturalWidth);
  };

  const getMediaUrl = () => {
    if (!article.media_url) return '/placeholder-image.jpg';
    if (article.media_url.startsWith('http')) return article.media_url;
    return `https://ywmn.iphrdafrica.org/${article.media_url}`;
  };

  return (
    <div className="rounded overflow-hidden shadow-lg bg-white flex flex-col min-h-[600px] w-full">
      {/* Media display */}
      <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center overflow-hidden">
        {article.media_type === 'image' ? (
          <img
            src={imgError ? '/placeholder-image.jpg' : getMediaUrl()}
            alt={article.title}
            className={`w-full h-full ${isPortrait ? 'object-contain' : 'object-cover'}`}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        ) : (
          <video
            controls
            className="w-full h-full object-cover"
            poster="/video-placeholder.jpg"
          >
            <source
              src={getMediaUrl()}
              type={`video/${article.media_url.split('.').pop()}`}
            />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Article content */}
      <div className="px-6 py-4 flex flex-col justify-between flex-1">
        <div>
          <h2 className="font-bold text-xl mb-2 text-gray-800">{article.title}</h2>
          <p className="text-gray-700 text-base mb-4">{article.content}</p>
        </div>

        {/* Metadata */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t text-sm text-gray-600">
          <span>Posted by {article.author}</span>
          <span>{new Date(article.date_posted).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
