import React, { useState, useEffect } from 'react';
import { storage, dateUtils } from '../utils/helpers';

const StatsPanel = ({ isDark }) => {
  const [stats, setStats] = useState({
    totalStudyTime: 0,
    dailyStudyTime: 0,
    currentStreak: 0,
    longestStreak: 0,
    chaptersCompleted: 0,
    notesCreated: 0,
    lastStudyDate: null,
    studyHistory: []
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = () => {
    const timerSessions = storage.get('studybuddy-timer-sessions', []);
    const progress = storage.get('studybuddy-progress', {});
    const notes = storage.get('studybuddy-notes', []);
    const studyHistory = storage.get('studybuddy-study-history', []);

    // Calculate total study time from timer sessions
    const totalStudyTime = timerSessions.reduce((total, session) => {
      return total + (session.duration || 0);
    }, 0);

    // Calculate today's study time
    const today = new Date().toDateString();
    const todaySessions = timerSessions.filter(session => 
      new Date(session.date).toDateString() === today
    );
    const dailyStudyTime = todaySessions.reduce((total, session) => {
      return total + (session.duration || 0);
    }, 0);

    // Calculate chapters completed
    const chaptersCompleted = Object.values(progress).reduce((total, subjectProgress) => {
      return total + Object.values(subjectProgress).filter(Boolean).length;
    }, 0);

    // Calculate study streaks
    const { currentStreak, longestStreak } = calculateStreaks(studyHistory);

    // Get last study date
    const lastStudyDate = studyHistory.length > 0 
      ? studyHistory[studyHistory.length - 1].date 
      : null;

    setStats({
      totalStudyTime,
      dailyStudyTime,
      currentStreak,
      longestStreak,
      chaptersCompleted,
      notesCreated: notes.length,
      lastStudyDate,
      studyHistory
    });
  };

  const calculateStreaks = (studyHistory) => {
    if (studyHistory.length === 0) return { currentStreak: 0, longestStreak: 0 };

    const sortedHistory = studyHistory.sort((a, b) => new Date(b.date) - new Date(a.date));
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if studied today or yesterday to maintain streak
    const lastStudyDate = new Date(sortedHistory[0].date);
    lastStudyDate.setHours(0, 0, 0, 0);
    const daysDiff = dateUtils.daysBetween(lastStudyDate, today);

    if (daysDiff <= 1) {
      currentStreak = 1;
      tempStreak = 1;

      // Count consecutive days
      for (let i = 1; i < sortedHistory.length; i++) {
        const currentDate = new Date(sortedHistory[i - 1].date);
        const nextDate = new Date(sortedHistory[i].date);
        currentDate.setHours(0, 0, 0, 0);
        nextDate.setHours(0, 0, 0, 0);

        if (dateUtils.daysBetween(nextDate, currentDate) === 1) {
          currentStreak++;
          tempStreak++;
        } else {
          break;
        }
      }
    }

    // Calculate longest streak
    tempStreak = 1;
    for (let i = 1; i < sortedHistory.length; i++) {
      const currentDate = new Date(sortedHistory[i - 1].date);
      const nextDate = new Date(sortedHistory[i].date);
      currentDate.setHours(0, 0, 0, 0);
      nextDate.setHours(0, 0, 0, 0);

      if (dateUtils.daysBetween(nextDate, currentDate) === 1) {
        tempStreak++;
      } else {
        longestStreak = Math.max(longestStreak, tempStreak);
        tempStreak = 1;
      }
    }
    longestStreak = Math.max(longestStreak, tempStreak, currentStreak);

    return { currentStreak, longestStreak };
  };

  const formatStudyTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  const getWeeklyActivity = () => {
    const last7Days = [];
    const today = new Date();
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      date.setHours(0, 0, 0, 0);
      
      const dayData = stats.studyHistory.filter(entry => {
        const entryDate = new Date(entry.date);
        entryDate.setHours(0, 0, 0, 0);
        return entryDate.getTime() === date.getTime();
      });
      
      last7Days.push({
        date: date.toDateString(),
        day: date.toLocaleDateString('en', { weekday: 'short' }),
        hasActivity: dayData.length > 0
      });
    }
    
    return last7Days;
  };

  const StatCard = ({ title, value, subtitle, icon }) => (
    <div className={`p-4 rounded-lg border ${
      isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {title}
        </h3>
        {icon}
      </div>
      <p className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
        {value}
      </p>
      {subtitle && (
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );

  const weeklyActivity = getWeeklyActivity();

  return (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
        Study Statistics
      </h2>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Study Time"
          value={formatStudyTime(stats.totalStudyTime)}
          subtitle="All time"
          icon={
            <svg className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        
        <StatCard
          title="Today's Study Time"
          value={formatStudyTime(stats.dailyStudyTime)}
          subtitle="This session"
          icon={
            <svg className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
        />
        
        <StatCard
          title="Current Streak"
          value={`${stats.currentStreak} days`}
          subtitle={stats.currentStreak > 0 ? "Keep it up!" : "Start today!"}
          icon={
            <svg className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            </svg>
          }
        />
        
        <StatCard
          title="Longest Streak"
          value={`${stats.longestStreak} days`}
          subtitle="Personal best"
          icon={
            <svg className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          }
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatCard
          title="Chapters Completed"
          value={stats.chaptersCompleted}
          subtitle="Across all subjects"
          icon={
            <svg className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        
        <StatCard
          title="Notes Created"
          value={stats.notesCreated}
          subtitle="Study notes"
          icon={
            <svg className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          }
        />
      </div>

      {/* Weekly Activity */}
      <div className={`p-6 rounded-lg border ${
        isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
          Weekly Activity
        </h3>
        <div className="grid grid-cols-7 gap-2">
          {weeklyActivity.map((day, index) => (
            <div key={index} className="text-center">
              <div className={`text-xs mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {day.day}
              </div>
              <div 
                className={`w-8 h-8 rounded-md flex items-center justify-center ${
                  day.hasActivity
                    ? isDark
                      ? 'bg-white'
                      : 'bg-black'
                    : isDark
                      ? 'bg-gray-700'
                      : 'bg-gray-200'
                }`}
                title={day.hasActivity ? 'Study day' : 'No activity'}
              >
                {day.hasActivity && (
                  <svg 
                    className={`w-4 h-4 ${isDark ? 'text-black' : 'text-white'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className={`text-sm mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {stats.lastStudyDate 
            ? `Last study session: ${dateUtils.formatDate(new Date(stats.lastStudyDate))}`
            : 'No study sessions recorded yet'
          }
        </p>
      </div>
    </div>
  );
};

export default StatsPanel;
