import React, { useState, useEffect } from 'react';
import { storage } from '../utils/helpers';

const StreakPanel = ({ isDark }) => {
  const [streakData, setStreakData] = useState({
    currentStreak: 0,
    maxStreak: 0,
    studyDates: [],
    lastStudyDate: null,
    totalStudyDays: 0
  });
  const [todayStudied, setTodayStudied] = useState(false);

  useEffect(() => {
    loadStreakData();
    checkTodayStudy();
  }, []);

  const loadStreakData = () => {
    const saved = storage.get('studybuddy-streak-data') || {
      currentStreak: 0,
      maxStreak: 0,
      studyDates: [],
      lastStudyDate: null,
      totalStudyDays: 0
    };
    setStreakData(saved);
  };

  const checkTodayStudy = () => {
    const today = new Date().toDateString();
    setTodayStudied(streakData.studyDates.includes(today));
  };

  const markTodayAsStudied = () => {
    const today = new Date().toDateString();
    const newStreakData = { ...streakData };
    
    if (!newStreakData.studyDates.includes(today)) {
      newStreakData.studyDates.push(today);
      newStreakData.totalStudyDays += 1;
      
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayString = yesterday.toDateString();
      
      if (newStreakData.lastStudyDate === yesterdayString || newStreakData.currentStreak === 0) {
        newStreakData.currentStreak += 1;
      } else {
        newStreakData.currentStreak = 1; // Reset streak
      }
      
      newStreakData.maxStreak = Math.max(newStreakData.maxStreak, newStreakData.currentStreak);
      newStreakData.lastStudyDate = today;
      
      setStreakData(newStreakData);
      storage.set('studybuddy-streak-data', newStreakData);
      setTodayStudied(true);
      
      updateStudyStats();
    }
  };

  const updateStudyStats = () => {
    const stats = storage.get('studybuddy-study-stats') || {};
    stats.currentStreak = streakData.currentStreak + 1;
    stats.maxStreak = Math.max(stats.maxStreak || 0, stats.currentStreak);
    storage.set('studybuddy-study-stats', stats);
  };

  const getWeekView = () => {
    const week = [];
    const today = new Date();
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateString = date.toDateString();
      
      week.push({
        date: date,
        dateString: dateString,
        studied: streakData.studyDates.includes(dateString),
        isToday: i === 0
      });
    }
    
    return week;
  };

  const getStreakMessage = () => {
    if (streakData.currentStreak === 0) {
      return "Start your study streak today! 🎯";
    } else if (streakData.currentStreak === 1) {
      return "Great start! Keep it going! 💪";
    } else if (streakData.currentStreak < 7) {
      return `${streakData.currentStreak} days strong! 🔥`;
    } else if (streakData.currentStreak < 30) {
      return `Amazing ${streakData.currentStreak}-day streak! 🚀`;
    } else {
      return `Incredible ${streakData.currentStreak}-day streak! You're a study champion! 👑`;
    }
  };

  const getStreakEmoji = () => {
    if (streakData.currentStreak === 0) return "🌱";
    if (streakData.currentStreak < 7) return "🔥";
    if (streakData.currentStreak < 30) return "⚡";
    return "👑";
  };

  const weekView = getWeekView();

  return (
    <div className="space-y-6">
      
      <div className="text-center">
        <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
          🔥 Study Streak
        </h2>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Build consistent study habits
        </p>
      </div>

      
      <div className={`p-6 rounded-lg text-center ${isDark ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-50 to-purple-50'}`}>
        <div className="text-4xl mb-2">{getStreakEmoji()}</div>
        <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
          {streakData.currentStreak}
        </div>
        <div className={`text-lg font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Day Streak
        </div>
        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {getStreakMessage()}
        </div>
      </div>

      
      <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="flex justify-between items-center">
          <div>
            <div className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
              Today's Study
            </div>
            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {todayStudied ? 'Completed! 🎉' : 'Ready to study?'}
            </div>
          </div>
          {!todayStudied && (
            <button
              onClick={markTodayAsStudied}
              className={`px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 ${
                isDark 
                  ? 'bg-green-700 hover:bg-green-600 text-white focus:ring-green-500' 
                  : 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-400'
              }`}
            >
              Mark as Studied
            </button>
          )}
        </div>
      </div>

      
      <div className="space-y-3">
        <h3 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-black'}`}>
          This Week
        </h3>
        <div className="grid grid-cols-7 gap-2">
          {weekView.map((day, index) => (
            <div key={index} className="text-center">
              <div className={`text-xs mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {day.date.toLocaleDateString('en', { weekday: 'short' })}
              </div>
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-colors ${
                  day.studied
                    ? isDark
                      ? 'bg-green-700 border-green-500 text-white'
                      : 'bg-green-500 border-green-400 text-white'
                    : day.isToday
                      ? isDark
                        ? 'border-blue-500 text-blue-400 bg-gray-800'
                        : 'border-blue-500 text-blue-600 bg-blue-50'
                      : isDark
                        ? 'border-gray-700 text-gray-500 bg-gray-900'
                        : 'border-gray-300 text-gray-400 bg-gray-100'
                }`}
              >
                {day.studied ? '✓' : day.date.getDate()}
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className={`p-4 rounded-lg text-center ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            {streakData.maxStreak}
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Best Streak
          </div>
        </div>
        
        <div className={`p-4 rounded-lg text-center ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            {streakData.totalStudyDays}
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Total Days
          </div>
        </div>
        
        <div className={`p-4 rounded-lg text-center ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            {Math.round((streakData.totalStudyDays / 365) * 100) || 0}%
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Year Progress
          </div>
        </div>
      </div>

      
      <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-blue-50'}`}>
        <div className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-blue-900'}`}>
          💡 Streak Tips
        </div>
        <ul className={`text-sm space-y-1 ${isDark ? 'text-gray-300' : 'text-blue-800'}`}>
          <li>• Study at the same time each day to build a habit</li>
          <li>• Start with small goals (15-30 minutes)</li>
          <li>• Use the Pomodoro timer for focused sessions</li>
          <li>• Track your progress and celebrate milestones</li>
          <li>• Don't break the chain - consistency is key!</li>
        </ul>
      </div>
    </div>
  );
};

export default StreakPanel;
