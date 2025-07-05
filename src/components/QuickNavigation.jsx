import React from 'react';

const QuickNavigation = ({ isDark, activePanel, setActivePanel, isNavOpen, setIsNavOpen }) => {
  const navItems = [
    { id: 'subjects', label: 'Subjects', icon: 'book' },
    { id: 'bookmarks', label: 'Bookmarks', icon: 'bookmark' },
    { id: 'history', label: 'History', icon: 'clock' },
    { id: 'notes', label: 'Notes', icon: 'note' },
    { id: 'stats', label: 'Statistics', icon: 'stats' },
    { id: 'settings', label: 'Settings', icon: 'settings' }
  ];

  const getIcon = (iconType) => {
    const iconClasses = "w-6 h-6";
    switch (iconType) {
      case 'book':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'bookmark':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        );
      case 'clock':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'note':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        );
      case 'chart':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'stats':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'settings':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`fixed left-0 top-0 h-full z-50 transition-all duration-300 ${
      isNavOpen ? 'w-64' : 'w-16'
    } ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-r`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className={`absolute -right-3 top-6 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
          isDark 
            ? 'bg-gray-900 border-gray-700 text-gray-400 hover:text-white' 
            : 'bg-white border-gray-200 text-gray-600 hover:text-black'
        }`}
      >
        <svg 
          className={`w-3 h-3 transition-transform duration-300 ${isNavOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Navigation Items */}
      <nav className="pt-6 pb-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePanel(item.id)}
            className={`w-full flex items-center px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-inset ${
              activePanel === item.id
                ? isDark
                  ? 'bg-white text-black focus:ring-gray-600'
                  : 'bg-black text-white focus:ring-gray-400'
                : isDark
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-white focus:ring-gray-600'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-black focus:ring-gray-400'
            }`}
          >
            <div className="flex-shrink-0">
              {getIcon(item.icon)}
            </div>
            {isNavOpen && (
              <span className="ml-3 text-sm font-medium">{item.label}</span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default QuickNavigation;
