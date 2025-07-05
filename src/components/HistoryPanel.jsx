import React, { useState, useEffect } from 'react';
import { storage, dateUtils } from '../utils/helpers';

const HistoryPanel = ({ isDark }) => {
  const [history, setHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedHistory = storage.get('studybuddy-history', []);
    setHistory(savedHistory);
  }, []);

  const clearHistory = () => {
    setHistory([]);
    storage.set('studybuddy-history', []);
  };

  const removeHistoryItem = (id) => {
    const updatedHistory = history.filter(item => item.id !== id);
    setHistory(updatedHistory);
    storage.set('studybuddy-history', updatedHistory);
  };

  const filteredHistory = history.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedHistory = filteredHistory.reduce((groups, item) => {
    const date = new Date(item.date).toDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(item);
    return groups;
  }, {});

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
          Recently Viewed
        </h2>
        <div className="flex gap-2">
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
              placeholder="Search history..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`pl-10 pr-4 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                isDark 
                  ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:ring-gray-600' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-gray-400'
              }`}
            />
          </div>
          {history.length > 0 && (
            <button
              onClick={clearHistory}
              className={`px-4 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 ${
                isDark 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800 focus:ring-gray-600' 
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50 focus:ring-gray-400'
              }`}
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {Object.keys(groupedHistory).length === 0 ? (
        <div className={`text-center py-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {history.length === 0 ? (
            <div>
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-lg mb-2">No history yet</p>
              <p className="text-sm">Open some chapters to see your reading history here</p>
            </div>
          ) : (
            <div>
              <p className="text-lg">No history matches your search</p>
              <p className="text-sm">Try a different search term</p>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedHistory)
            .sort(([a], [b]) => new Date(b) - new Date(a))
            .map(([date, items]) => (
              <div key={date}>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                  {dateUtils.isToday(new Date(date)) ? 'Today' : dateUtils.formatDate(new Date(date))}
                </h3>
                <div className="grid gap-3">
                  {items
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map((item) => (
                      <div
                        key={item.id}
                        className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
                          isDark 
                            ? 'bg-gray-900 border-gray-700 hover:border-gray-600' 
                            : 'bg-white border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                              {item.title}
                            </h4>
                            <p className={`text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                              {item.subject}
                            </p>
                            <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                              Viewed at {new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                          <div className="flex space-x-2 ml-4">
                            <a
                              href={item.pdfUrl}
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
                              onClick={() => removeHistoryItem(item.id)}
                              className={`p-1 rounded-md transition-colors focus:outline-none focus:ring-2 ${
                                isDark 
                                  ? 'text-gray-400 hover:text-red-400 hover:bg-gray-800 focus:ring-gray-600' 
                                  : 'text-gray-500 hover:text-red-500 hover:bg-gray-100 focus:ring-gray-400'
                              }`}
                              title="Remove from history"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default HistoryPanel;
