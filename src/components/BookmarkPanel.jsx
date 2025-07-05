import React, { useState, useEffect } from 'react';
import { storage, dateUtils } from '../utils/helpers';

const BookmarkPanel = ({ isDark }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedBookmarks = storage.get('studybuddy-bookmarks', []);
    setBookmarks(savedBookmarks);
  }, []);

  const removeBookmark = (id) => {
    const updatedBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(updatedBookmarks);
    storage.set('studybuddy-bookmarks', updatedBookmarks);
  };

  const filteredBookmarks = bookmarks.filter(bookmark =>
    bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bookmark.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
          Bookmarked Chapters
        </h2>
        <div className="relative">
          <svg 
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search bookmarks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`pl-10 pr-4 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
              isDark 
                ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:ring-gray-600' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-gray-400'
            }`}
          />
        </div>
      </div>

      {filteredBookmarks.length === 0 ? (
        <div className={`text-center py-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {bookmarks.length === 0 ? (
            <div>
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <p className="text-lg mb-2">No bookmarks yet</p>
              <p className="text-sm">Bookmark chapters from the subjects page to see them here</p>
            </div>
          ) : (
            <div>
              <p className="text-lg">No bookmarks match your search</p>
              <p className="text-sm">Try a different search term</p>
            </div>
          )}
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredBookmarks.map((bookmark) => (
            <div
              key={bookmark.id}
              className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
                isDark 
                  ? 'bg-gray-900 border-gray-700 hover:border-gray-600' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                    {bookmark.title}
                  </h3>
                  <p className={`text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {bookmark.subject}
                  </p>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Bookmarked on {dateUtils.formatDate(new Date(bookmark.date))}
                  </p>
                </div>
                <div className="flex space-x-2 ml-4">
                  <a
                    href={bookmark.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1 rounded-md text-sm transition-colors focus:outline-none focus:ring-2 ${
                      isDark 
                        ? 'bg-white text-black hover:bg-gray-200 focus:ring-gray-600' 
                        : 'bg-black text-white hover:bg-gray-800 focus:ring-gray-400'
                    }`}
                  >
                    Open PDF
                  </a>
                  <button
                    onClick={() => removeBookmark(bookmark.id)}
                    className={`p-1 rounded-md transition-colors focus:outline-none focus:ring-2 ${
                      isDark 
                        ? 'text-gray-400 hover:text-red-400 hover:bg-gray-800 focus:ring-gray-600' 
                        : 'text-gray-500 hover:text-red-500 hover:bg-gray-100 focus:ring-gray-400'
                    }`}
                    title="Remove bookmark"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookmarkPanel;
