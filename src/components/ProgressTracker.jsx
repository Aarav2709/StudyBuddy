import React, { useState, useEffect } from 'react';
import { storage } from '../utils/helpers';

const ProgressTracker = ({ isDark }) => {
  const [progress, setProgress] = useState({});
  const [dailyGoal, setDailyGoal] = useState(5); // chapters per day
  const [showGoalModal, setShowGoalModal] = useState(false);

  // Subject data structure for progress tracking
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
    const savedGoal = storage.get('studybuddy-daily-goal', 5);
    setProgress(savedProgress);
    setDailyGoal(savedGoal);
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

  const updateDailyGoal = () => {
    storage.set('studybuddy-daily-goal', dailyGoal);
    setShowGoalModal(false);
  };

  const totalProgress = getTotalProgress();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
          Study Progress
        </h2>
        <button
          onClick={() => setShowGoalModal(true)}
          className={`px-4 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 ${
            isDark 
              ? 'border-gray-600 text-gray-300 hover:bg-gray-800 focus:ring-gray-600' 
              : 'border-gray-300 text-gray-600 hover:bg-gray-50 focus:ring-gray-400'
          }`}
        >
          Set Daily Goal
        </button>
      </div>

      {/* Overall Progress */}
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

      {/* Daily Goal */}
      <div className={`p-4 rounded-lg border ${
        isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center justify-between">
          <div>
            <h4 className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
              Daily Goal
            </h4>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Complete {dailyGoal} chapters per day
            </p>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm ${
            isDark ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-700'
          }`}>
            {dailyGoal} chapters/day
          </div>
        </div>
      </div>

      {/* Subject Progress */}
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

      {/* Daily Goal Modal */}
      {showGoalModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`max-w-md w-full rounded-lg p-6 ${
            isDark ? 'bg-gray-900' : 'bg-white'
          }`}>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              Set Daily Study Goal
            </h3>
            <div className="mb-4">
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                Chapters per day
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={dailyGoal}
                onChange={(e) => setDailyGoal(parseInt(e.target.value) || 1)}
                className={`w-full px-4 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                  isDark 
                    ? 'bg-gray-800 border-gray-600 text-white focus:ring-gray-500' 
                    : 'bg-white border-gray-300 text-gray-900 focus:ring-gray-400'
                }`}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={updateDailyGoal}
                className={`flex-1 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 ${
                  isDark 
                    ? 'bg-white text-black hover:bg-gray-200 focus:ring-gray-600' 
                    : 'bg-black text-white hover:bg-gray-800 focus:ring-gray-400'
                }`}
              >
                Save Goal
              </button>
              <button
                onClick={() => setShowGoalModal(false)}
                className={`flex-1 px-4 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 ${
                  isDark 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800 focus:ring-gray-600' 
                    : 'border-gray-300 text-gray-600 hover:bg-gray-50 focus:ring-gray-400'
                }`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressTracker;
