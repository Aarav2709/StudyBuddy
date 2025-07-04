import React, { useState, useEffect } from 'react';

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

const SubjectCard = ({ subject, subjectKey, isOpen, onToggle, isDark }) => {
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
            // Science with subparts (Physics, Chemistry, Biology)
            <div className="space-y-6">
              {Object.entries(subject.subparts).map(([subpartKey, subpart]) => (
                <div key={subpartKey} className={`border-l-2 pl-4 ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <h3 className={`text-lg font-medium mb-3 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>{subpart.name}</h3>
                  <div className="space-y-2">
                    {subpart.chapters.map((chapter, index) => (
                      <div key={index} className={`flex justify-between items-center py-2 border-b last:border-b-0 ${
                        isDark ? 'border-gray-700' : 'border-gray-100'
                      }`}>
                        <span className={`flex-1 text-sm ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{chapter.name}</span>
                        <a
                          href={chapter.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`ml-4 px-3 py-1 rounded-md transition-colors focus:outline-none focus:ring-2 text-xs ${
                            isDark 
                              ? 'bg-white text-black hover:bg-gray-200 focus:ring-gray-600' 
                              : 'bg-black text-white hover:bg-gray-800 focus:ring-gray-400'
                          }`}
                        >
                          View PDF
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Regular subjects with direct chapters
            <div className="space-y-3">
              {subject.chapters.map((chapter, index) => (
                <div key={index} className={`flex justify-between items-center py-2 border-b last:border-b-0 ${
                  isDark ? 'border-gray-700' : 'border-gray-100'
                }`}>
                  <span className={`flex-1 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>{chapter.name}</span>
                  <a
                    href={chapter.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`ml-4 px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 text-sm ${
                      isDark 
                        ? 'bg-white text-black hover:bg-gray-200 focus:ring-gray-600' 
                        : 'bg-black text-white hover:bg-gray-800 focus:ring-gray-400'
                    }`}
                  >
                    View PDF
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const NCERTSubjects = () => {
  const [openSubjects, setOpenSubjects] = useState({});
  const [isDark, setIsDark] = useState(false);

  // Load theme preference from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('studybuddy-theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('studybuddy-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleSubject = (subjectKey) => {
    setOpenSubjects(prev => ({
      ...prev,
      [subjectKey]: !prev[subjectKey]
    }));
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header with Theme Toggle */}
        <header className="text-center mb-8 relative">
          <h1 className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>StudyBuddy</h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Class 10 NCERT Textbooks</p>
          
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
              // Sun icon for light mode
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </header>

        <div className="space-y-4">
          {Object.entries(subjectsData).map(([key, subject]) => (
            <SubjectCard
              key={key}
              subject={subject}
              subjectKey={key}
              isOpen={openSubjects[key] || false}
              onToggle={() => toggleSubject(key)}
              isDark={isDark}
            />
          ))}
        </div>
        
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
  );
};

export default NCERTSubjects;
