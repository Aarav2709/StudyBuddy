import React, { useState, useEffect } from 'react';
import NCERTSubjects from './components/NCERTSubjects';
import SearchBar from './components/SearchBar';
import StudyTimer from './components/StudyTimer';
import BookmarkPanel from './components/BookmarkPanel';
import HistoryPanel from './components/HistoryPanel';
import NotesPanel from './components/NotesPanel';
import StatsPanel from './components/StatsPanel';
import SettingsPanel from './components/SettingsPanel';
import QuickNavigation from './components/QuickNavigation';
import { storage, searchUtils } from './utils/helpers';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [activePanel, setActivePanel] = useState('subjects');
  const [searchTerm, setSearchTerm] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Load theme preference
  useEffect(() => {
    const savedTheme = storage.get('studybuddy-theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  // Save theme preference
  useEffect(() => {
    storage.set('studybuddy-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const renderContent = () => {
    switch (activePanel) {
      case 'subjects':
        return <NCERTSubjects searchTerm={searchTerm} isDark={isDark} />;
      case 'bookmarks':
        return <BookmarkPanel isDark={isDark} />;
      case 'history':
        return <HistoryPanel isDark={isDark} />;
      case 'notes':
        return <NotesPanel isDark={isDark} />;
      case 'stats':
        return <StatsPanel isDark={isDark} />;
      case 'settings':
        return <SettingsPanel isDark={isDark} onThemeToggle={toggleTheme} />;
      default:
        return <NCERTSubjects searchTerm={searchTerm} isDark={isDark} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Navigation */}
      <QuickNavigation 
        isDark={isDark}
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />

      {/* Main Content */}
      <div className={`${isNavOpen ? 'ml-64' : 'ml-16'} transition-all duration-300`}>
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <header className="text-center mb-8 relative">
            <h1 className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
              StudyBuddy
            </h1>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Class 10 NCERT Study Platform
            </p>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`absolute top-0 right-0 p-3 rounded-full transition-colors focus:outline-none focus:ring-2 ${
                isDark 
                  ? 'bg-gray-900 hover:bg-gray-800 focus:ring-gray-600 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 focus:ring-gray-400 text-gray-800'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </header>

          {/* Search Bar */}
          {activePanel === 'subjects' && (
            <div className="mb-6">
              <SearchBar onSearch={handleSearch} isDark={isDark} />
            </div>
          )}

          {/* Main Content */}
          {renderContent()}

          {/* Disclaimer Footer */}
          <footer className={`mt-12 pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className={`rounded-lg p-6 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
                <strong>Disclaimer:</strong> All textbook links are sourced from the official NCERT website (
                <a 
                  href="https://ncert.nic.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`underline transition-colors ${
                    isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-800'
                  }`}
                >
                  https://ncert.nic.in
                </a>
                ). We do not host or modify any content. This platform is created solely for educational convenience.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
