import React, { useState, useEffect } from 'react';
import { storage, searchUtils } from '../utils/helpers';
import StudyTimer from './StudyTimer';

const subjectsData = {
  mathematics: {
    name: 'Mathematics',
    chapters: [
      { name: '1. Real Numbers', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh101.pdf' },
      { name: '2. Polynomials', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh102.pdf' },
      { name: '3. Pair of Linear Equations in Two Variables', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh103.pdf' },
      { name: '4. Quadratic Equations', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh104.pdf' },
      { name: '5. Arithmetic Progressions', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh105.pdf' },
      { name: '6. Triangles', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh106.pdf' },
      { name: '7. Coordinate Geometry', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh107.pdf' },
      { name: '8. Introduction to Trigonometry', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh108.pdf' },
      { name: '9. Some Applications of Trigonometry', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh109.pdf' },
      { name: '10. Circles', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh110.pdf' },
      { name: '11. Constructions', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh111.pdf' },
      { name: '12. Areas Related to Circles', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh112.pdf' },
      { name: '13. Surface Areas and Volumes', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh113.pdf' },
      { name: '14. Statistics', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh114.pdf' },
      { name: '15. Probability', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh115.pdf' }
    ]
  },
  science: {
    name: 'Science',
    subparts: {
      physics: {
        name: 'Physics',
        chapters: [
          { name: '1. Light - Reflection and Refraction', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc101.pdf' },
          { name: '2. The Human Eye and the Colourful World', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc102.pdf' },
          { name: '3. Electricity', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc103.pdf' },
          { name: '4. Magnetic Effects of Electric Current', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc104.pdf' }
        ]
      },
      chemistry: {
        name: 'Chemistry',
        chapters: [
          { name: '1. Acids, Bases and Salts', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc111.pdf' },
          { name: '2. Metals and Non-metals', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc112.pdf' },
          { name: '3. Carbon and its Compounds', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc113.pdf' },
          { name: '4. Periodic Classification of Elements', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc114.pdf' }
        ]
      },
      biology: {
        name: 'Biology',
        chapters: [
          { name: '1. Life Processes', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc106.pdf' },
          { name: '2. Control and Coordination', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc107.pdf' },
          { name: '3. How do Organisms Reproduce?', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc108.pdf' },
          { name: '4. Heredity and Evolution', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc109.pdf' },
          { name: '5. Our Environment', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc105.pdf' },
          { name: '6. Natural Resource Management', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc110.pdf' }
        ]
      }
    }
  },
  english: {
    name: 'English Literature Reader',
    chapters: [
      { name: 'Complete Book PDF', pdfUrl: 'https://cbseacademic.nic.in/web_material/publication/LitratureReader_ClassX_2023.pdf' }
    ]
  },
  hindiSparsh: {
    name: 'Hindi (Sparsh)',
    chapters: [
      { name: '1. कबीर', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsp101.pdf' },
      { name: '2. मीरा', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsp102.pdf' },
      { name: '3. बिहारी', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsp103.pdf' },
      { name: '4. मैथिलीशरण गुप्त', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsp104.pdf' },
      { name: '5. सुमित्रानंदन पंत', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsp105.pdf' },
      { name: '6. महादेवी वर्मा', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsp106.pdf' },
      { name: '7. वीरेन डंगवाल', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsp107.pdf' },
      { name: '8. कैफी आजमी', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsp108.pdf' },
      { name: '9. रवींद्रनाथ टैगोर', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsp109.pdf' },
      { name: '10. स्वयं प्रकाश', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsp110.pdf' },
      { name: '11. रामवृक्ष बेनीपुरी', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsp111.pdf' },
      { name: '12. यशपाल', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsp112.pdf' },
      { name: '13. सर्वेश्वर दयाल सक्सेना', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsp113.pdf' },
      { name: '14. राहुल सांकृत्यायन', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsp114.pdf' },
      { name: '15. प्रेमचंद', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsp115.pdf' },
      { name: '16. फणीश्वरनाथ रेणु', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsp116.pdf' },
      { name: '17. हबीब तनवीर', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsp117.pdf' }
    ]
  },
  hindiSanchayan: {
    name: 'Hindi (Sanchayan)',
    chapters: [
      { name: '1. हरिहर काका', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsy101.pdf' },
      { name: '2. सपनों के-से दिन', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsy102.pdf' },
      { name: '3. टोपी शुक्ला', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jhsy103.pdf' }
    ]
  },
  socialScience: {
    name: 'Social Science',
    subparts: {
      history: {
        name: 'History',
        chapters: [
          { name: '1. The Rise of Nationalism in Europe', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess101.pdf' },
          { name: '2. The Nationalist Movement in Indo-China', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess102.pdf' },
          { name: '3. Nationalism in India', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess103.pdf' },
          { name: '4. The Making of a Global World', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess104.pdf' },
          { name: '5. The Age of Industrialisation', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess105.pdf' },
          { name: '6. Work, Life and Leisure', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess106.pdf' },
          { name: '7. Print Culture and the Modern World', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess107.pdf' },
          { name: '8. Novel, Society and History', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess108.pdf' }
        ]
      },
      geography: {
        name: 'Geography',
        chapters: [
          { name: '1. Resources and Development', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess201.pdf' },
          { name: '2. Forest and Wildlife Resources', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess202.pdf' },
          { name: '3. Water Resources', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess203.pdf' },
          { name: '4. Agriculture', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess204.pdf' },
          { name: '5. Minerals and Energy Resources', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess205.pdf' },
          { name: '6. Manufacturing Industries', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess206.pdf' },
          { name: '7. Lifelines of National Economy', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess207.pdf' }
        ]
      },
      civics: {
        name: 'Civics (Political Science)',
        chapters: [
          { name: '1. Power Sharing', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess301.pdf' },
          { name: '2. Federalism', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess302.pdf' },
          { name: '3. Democracy and Diversity', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess303.pdf' },
          { name: '4. Gender, Religion and Caste', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess304.pdf' },
          { name: '5. Popular Struggles and Movements', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess305.pdf' },
          { name: '6. Political Parties', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess306.pdf' },
          { name: '7. Outcomes of Democracy', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess307.pdf' },
          { name: '8. Challenges to Democracy', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess308.pdf' }
        ]
      },
      economics: {
        name: 'Economics',
        chapters: [
          { name: '1. Development', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess401.pdf' },
          { name: '2. Sectors of the Indian Economy', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess402.pdf' },
          { name: '3. Money and Credit', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess403.pdf' },
          { name: '4. Globalisation and the Indian Economy', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess404.pdf' },
          { name: '5. Consumer Rights', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jess405.pdf' }
        ]
      }
    }
  }
};

const SubjectCard = ({ subject, subjectKey, isOpen, onToggle, isDark, searchTerm }) => {
  const addToBookmarks = (chapter, subjectName) => {
    const bookmarks = storage.get('studybuddy-bookmarks', []);
    const bookmark = {
      id: Date.now().toString(),
      title: chapter.name,
      subject: subjectName,
      pdfUrl: chapter.pdfUrl,
      date: new Date().toISOString()
    };
    
    const exists = bookmarks.some(b => b.title === chapter.name && b.subject === subjectName);
    if (!exists) {
      bookmarks.unshift(bookmark);
      storage.set('studybuddy-bookmarks', bookmarks);
    }
  };

  const addToHistory = (chapter, subjectName) => {
    const history = storage.get('studybuddy-history', []);
    const historyItem = {
      id: Date.now().toString(),
      title: chapter.name,
      subject: subjectName,
      pdfUrl: chapter.pdfUrl,
      date: new Date().toISOString()
    };
    
    const filteredHistory = history.filter(h => !(h.title === chapter.name && h.subject === subjectName));
    filteredHistory.unshift(historyItem);
    
    const limitedHistory = filteredHistory.slice(0, 50);
    storage.set('studybuddy-history', limitedHistory);
    
    const studyHistory = storage.get('studybuddy-study-history', []);
    const today = new Date().toDateString();
    const todayExists = studyHistory.some(entry => new Date(entry.date).toDateString() === today);
    
    if (!todayExists) {
      studyHistory.push({ date: new Date().toISOString() });
      storage.set('studybuddy-study-history', studyHistory);
    }
  };

  const handlePDFClick = (chapter, subjectName) => {
    addToHistory(chapter, subjectName);
  };

  const isBookmarked = (chapter, subjectName) => {
    const bookmarks = storage.get('studybuddy-bookmarks', []);
    return bookmarks.some(b => b.title === chapter.name && b.subject === subjectName);
  };

  const filteredChapters = (chapters) => {
    if (!searchTerm) return chapters;
    return chapters.filter(chapter => 
      searchUtils.searchInText(chapter.name, searchTerm)
    );
  };

  return (
    <div className={`border rounded-lg mb-4 shadow-sm ${isDark ? 'border-gray-800' : 'border-gray-300'}`}>
      <button
        onClick={onToggle}
        className={`w-full px-6 py-4 text-left rounded-t-lg focus:outline-none focus:ring-2 transition-colors ${
          isDark 
            ? 'bg-gray-900 hover:bg-gray-800 focus:ring-gray-600 text-white' 
            : 'bg-gray-50 hover:bg-gray-100 focus:ring-gray-400 text-black'
        }`}
      >
        <div className="flex justify-between items-center">
          <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>{subject.name}</h2>
          <span className={`text-2xl transition-transform duration-200 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            ↓
          </span>
        </div>
      </button>
      
      {isOpen && (
        <div className={`px-6 py-4 border-t ${
          isDark 
            ? 'bg-black border-gray-800' 
            : 'bg-white border-gray-200'
        }`}>
          {subject.subparts ? (
            <div className="space-y-6">
              {Object.entries(subject.subparts).map(([subpartKey, subpart]) => {
                const filteredSubpartChapters = filteredChapters(subpart.chapters);
                if (filteredSubpartChapters.length === 0 && searchTerm) return null;
                
                return (
                  <div key={subpartKey} className={`border-l-2 pl-4 ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                    <h3 className={`text-lg font-medium mb-3 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>{subpart.name}</h3>
                    <div className="space-y-2">
                      {filteredSubpartChapters.map((chapter, index) => (
                        <div key={index} className={`flex justify-between items-center py-2 border-b last:border-b-0 ${
                          isDark ? 'border-gray-700' : 'border-gray-100'
                        }`}>
                          <span 
                            className={`flex-1 text-sm ${isDark ? 'text-gray-200' : 'text-gray-700'}`}
                            dangerouslySetInnerHTML={{ 
                              __html: searchTerm ? searchUtils.highlightText(chapter.name, searchTerm) : chapter.name 
                            }}
                          />
                          <div className="flex items-center space-x-2 ml-4">
                            <button
                              onClick={() => addToBookmarks(chapter, subpart.name)}
                              className={`p-1 rounded-md transition-colors focus:outline-none focus:ring-2 ${
                                isBookmarked(chapter, subpart.name)
                                  ? isDark
                                    ? 'text-yellow-400 hover:text-yellow-300 focus:ring-gray-600'
                                    : 'text-yellow-600 hover:text-yellow-700 focus:ring-gray-400'
                                  : isDark
                                    ? 'text-gray-400 hover:text-yellow-400 focus:ring-gray-600'
                                    : 'text-gray-500 hover:text-yellow-600 focus:ring-gray-400'
                              }`}
                              title={isBookmarked(chapter, subpart.name) ? 'Bookmarked' : 'Add to bookmarks'}
                            >
                              <svg className="w-4 h-4" fill={isBookmarked(chapter, subpart.name) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                              </svg>
                            </button>
                            <a
                              href={chapter.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => handlePDFClick(chapter, subpart.name)}
                              className={`px-3 py-1 rounded-md transition-colors focus:outline-none focus:ring-2 text-xs ${
                                isDark 
                                  ? 'bg-white text-black hover:bg-gray-200 focus:ring-gray-600' 
                                  : 'bg-black text-white hover:bg-gray-800 focus:ring-gray-400'
                              }`}
                            >
                              View PDF
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-3">
              {filteredChapters(subject.chapters).map((chapter, index) => (
                <div key={index} className={`flex justify-between items-center py-2 border-b last:border-b-0 ${
                  isDark ? 'border-gray-700' : 'border-gray-100'
                }`}>
                  <span 
                    className={`flex-1 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}
                    dangerouslySetInnerHTML={{ 
                      __html: searchTerm ? searchUtils.highlightText(chapter.name, searchTerm) : chapter.name 
                    }}
                  />
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => addToBookmarks(chapter, subject.name)}
                      className={`p-1 rounded-md transition-colors focus:outline-none focus:ring-2 ${
                        isBookmarked(chapter, subject.name)
                          ? isDark
                            ? 'text-yellow-400 hover:text-yellow-300 focus:ring-gray-600'
                            : 'text-yellow-600 hover:text-yellow-700 focus:ring-gray-400'
                          : isDark
                            ? 'text-gray-400 hover:text-yellow-400 focus:ring-gray-600'
                            : 'text-gray-500 hover:text-yellow-600 focus:ring-gray-400'
                      }`}
                      title={isBookmarked(chapter, subject.name) ? 'Bookmarked' : 'Add to bookmarks'}
                    >
                      <svg className="w-4 h-4" fill={isBookmarked(chapter, subject.name) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                    <a
                      href={chapter.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handlePDFClick(chapter, subject.name)}
                      className={`px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 text-sm ${
                        isDark 
                          ? 'bg-white text-black hover:bg-gray-200 focus:ring-gray-600' 
                          : 'bg-black text-white hover:bg-gray-800 focus:ring-gray-400'
                      }`}
                    >
                      View PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const NCERTSubjects = ({ searchTerm, isDark }) => {
  const [openSubjects, setOpenSubjects] = useState({});

  const toggleSubject = (subjectKey) => {
    setOpenSubjects(prev => ({
      ...prev,
      [subjectKey]: !prev[subjectKey]
    }));
  };

  const getFilteredSubjects = () => {
    if (!searchTerm) return subjectsData;
    
    const filtered = {};
    Object.entries(subjectsData).forEach(([key, subject]) => {
      const hasMatchingChapters = subject.subparts 
        ? Object.values(subject.subparts).some(subpart =>
            subpart.chapters.some(chapter => 
              searchUtils.searchInText(chapter.name, searchTerm)
            )
          )
        : subject.chapters.some(chapter => 
            searchUtils.searchInText(chapter.name, searchTerm)
          );
      
      const hasMatchingSubject = searchUtils.searchInText(subject.name, searchTerm);
      
      if (hasMatchingChapters || hasMatchingSubject) {
        filtered[key] = subject;
      }
    });
    
    return filtered;
  };

  const filteredSubjects = getFilteredSubjects();

  return (
    <div className="space-y-6">
      
      <StudyTimer isDark={isDark} />
      
      
      <div className="space-y-4">
        {Object.keys(filteredSubjects).length === 0 ? (
          <div className={`text-center py-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="text-lg mb-2">No results found</p>
            <p className="text-sm">Try searching for a different term</p>
          </div>
        ) : (
          Object.entries(filteredSubjects).map(([key, subject]) => (
            <SubjectCard
              key={key}
              subject={subject}
              subjectKey={key}
              isOpen={openSubjects[key] || false}
              onToggle={() => toggleSubject(key)}
              isDark={isDark}
              searchTerm={searchTerm}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NCERTSubjects;
