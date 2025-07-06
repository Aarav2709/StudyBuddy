import React, { useState, useEffect } from 'react';
import { storage } from '../utils/helpers';

const ProgressTracker = ({ isDark }) => {
  const [progress, setProgress] = useState({});

  const subjects = {
    mathematics: { name: 'Mathematics', totalChapters: 15 },
    physics: { name: 'Physics', totalChapters: 4 },
    chemistry: { name: 'Chemistry', totalChapters: 4 },
    biology: { name: 'Biology', totalChapters: 6 },
    english: { name: 'English Literature', totalChapters: 1 },
    hindiSparsh: { name: 'Hindi (Sparsh)', totalChapters: 17 },
    hindiSanchayan: { name: 'Hindi (Sanchayan)', totalChapters: 3 },
    history: { name: 'History', totalChapters: 8 },
    geography: { name: 'Geography', totalChapters: 7 },
    civics: { name: 'Civics', totalChapters: 8 },
    economics: { name: 'Economics', totalChapters: 5 }
  };

  useEffect(() => {
    const savedProgress = storage.get('studybuddy-progress', {});
    setProgress(savedProgress);
  }, []);

  const toggleChapterCompletion = (subject, chapterIndex) => {
    const newProgress = { ...progress };
    if (!newProgress[subject]) {
      newProgress[subject] = {};
    }
    
    newProgress[subject][chapterIndex] = !newProgress[subject][chapterIndex];
    
    setProgress(newProgress);
    storage.set('studybuddy-progress', newProgress);
  };

  const getSubjectProgress = (subject) => {
    const subjectProgress = progress[subject] || {};
    const completed = Object.values(subjectProgress).filter(Boolean).length;
    const total = subjects[subject].totalChapters;
    return { completed, total, percentage: total > 0 ? (completed / total) * 100 : 0 };
  };

  const getTotalProgress = () => {
    let totalCompleted = 0;
    let totalChapters = 0;
    
    Object.keys(subjects).forEach(subject => {
      const { completed, total } = getSubjectProgress(subject);
      totalCompleted += completed;
      totalChapters += total;
    });
    
    return { 
      completed: totalCompleted, 
      total: totalChapters, 
      percentage: totalChapters > 0 ? (totalCompleted / totalChapters) * 100 : 0 
    };
  };

  const totalProgress = getTotalProgress();

  return (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
        Study Progress
      </h2>

      
      <div className={`p-6 rounded-lg border ${
        isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
          Overall Progress
        </h3>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1">
            <div className={`w-full bg-gray-200 rounded-full h-3 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div 
                className={`h-3 rounded-full transition-all duration-500 ${
                  isDark ? 'bg-white' : 'bg-black'
                }`}
                style={{ width: `${totalProgress.percentage}%` }}
              ></div>
            </div>
          </div>
          <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
            {Math.round(totalProgress.percentage)}%
          </span>
        </div>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {totalProgress.completed} of {totalProgress.total} chapters completed
        </p>
      </div>

      
      <div className="grid gap-4">
        <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
          Subject-wise Progress
        </h3>
        {Object.entries(subjects).map(([key, subject]) => {
          const subjectProgress = getSubjectProgress(key);
          return (
            <div
              key={key}
              className={`p-4 rounded-lg border ${
                isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
                  {subject.name}
                </h4>
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {subjectProgress.completed}/{subjectProgress.total}
                </span>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex-1">
                  <div className={`w-full bg-gray-200 rounded-full h-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        isDark ? 'bg-white' : 'bg-black'
                      }`}
                      style={{ width: `${subjectProgress.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {Math.round(subjectProgress.percentage)}%
                </span>
              </div>
              <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
                {Array.from({ length: subject.totalChapters }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => toggleChapterCompletion(key, index)}
                    className={`w-8 h-8 rounded-md border-2 flex items-center justify-center text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 ${
                      progress[key]?.[index]
                        ? isDark
                          ? 'bg-white text-black border-white focus:ring-gray-600'
                          : 'bg-black text-white border-black focus:ring-gray-400'
                        : isDark
                          ? 'border-gray-600 text-gray-400 hover:border-gray-500 focus:ring-gray-600'
                          : 'border-gray-300 text-gray-500 hover:border-gray-400 focus:ring-gray-400'
                    }`}
                    title={`Chapter ${index + 1}: ${progress[key]?.[index] ? 'Completed' : 'Not completed'}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressTracker;
