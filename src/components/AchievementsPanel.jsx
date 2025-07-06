import React, { useState, useEffect } from 'react';
import { storage } from '../utils/helpers';

const AchievementsPanel = ({ isDark }) => {
  const [achievements, setAchievements] = useState([]);
  const [stats, setStats] = useState({});

  const achievementDefinitions = [
    {
      id: 'first_study',
      title: 'First Steps',
      description: 'Complete your first study session',
      icon: '🎯',
      requirement: 'study_sessions >= 1',
      points: 10
    },
    {
      id: 'week_streak',
      title: 'Week Warrior',
      description: 'Study for 7 consecutive days',
      icon: '🔥',
      requirement: 'max_streak >= 7',
      points: 50
    },
    {
      id: 'flashcard_master',
      title: 'Flashcard Master',
      description: 'Study 100 flashcards',
      icon: '📚',
      requirement: 'flashcards_studied >= 100',
      points: 75
    },
    {
      id: 'time_keeper',
      title: 'Time Keeper',
      description: 'Study for 10 hours total',
      icon: '⏰',
      requirement: 'total_study_time >= 600', // 10 hours in minutes
      points: 100
    },
    {
      id: 'bookmark_collector',
      title: 'Bookmark Collector',
      description: 'Save 25 bookmarks',
      icon: '🔖',
      requirement: 'bookmarks_count >= 25',
      points: 25
    },
    {
      id: 'month_dedication',
      title: 'Month of Dedication',
      description: 'Study for 30 consecutive days',
      icon: '🏆',
      requirement: 'max_streak >= 30',
      points: 200
    },
    {
      id: 'quiz_champion',
      title: 'Quiz Champion',
      description: 'Complete 50 quiz questions',
      icon: '🧠',
      requirement: 'quiz_questions >= 50',
      points: 60
    },
    {
      id: 'early_bird',
      title: 'Early Bird',
      description: 'Study before 8 AM for 5 days',
      icon: '🌅',
      requirement: 'early_sessions >= 5',
      points: 40
    },
    {
      id: 'night_owl',
      title: 'Night Owl',
      description: 'Study after 10 PM for 5 days',
      icon: '🦉',
      requirement: 'late_sessions >= 5',
      points: 40
    },
    {
      id: 'subject_explorer',
      title: 'Subject Explorer',
      description: 'Study all 5 subjects',
      icon: '🗺️',
      requirement: 'subjects_studied >= 5',
      points: 80
    }
  ];

  useEffect(() => {
    loadAchievements();
    loadStats();
  }, []);

  const loadAchievements = () => {
    const saved = storage.get('studybuddy-achievements') || [];
    setAchievements(saved);
  };

  const loadStats = () => {
    const studyStats = storage.get('studybuddy-study-stats') || {};
    const bookmarks = storage.get('studybuddy-bookmarks') || [];
    const flashcardProgress = storage.get('studybuddy-flashcards-progress') || {};
    
    const flashcardsStudied = Object.values(flashcardProgress).reduce((total, subject) => {
      return total + (subject ? subject.length : 0);
    }, 0);

    setStats({
      study_sessions: studyStats.totalSessions || 0,
      total_study_time: studyStats.totalTime || 0,
      max_streak: studyStats.maxStreak || 0,
      current_streak: studyStats.currentStreak || 0,
      bookmarks_count: bookmarks.length,
      flashcards_studied: flashcardsStudied,
      quiz_questions: studyStats.quizQuestions || 0,
      early_sessions: studyStats.earlySessions || 0,
      late_sessions: studyStats.lateSessions || 0,
      subjects_studied: studyStats.subjectsStudied || 0
    });
  };

  const checkAchievements = () => {
    const currentAchievements = [...achievements];
    let newAchievements = [];

    achievementDefinitions.forEach(achievement => {
      if (!currentAchievements.some(a => a.id === achievement.id)) {
        if (evaluateRequirement(achievement.requirement, stats)) {
          const newAchievement = {
            ...achievement,
            unlockedAt: new Date().toISOString()
          };
          currentAchievements.push(newAchievement);
          newAchievements.push(newAchievement);
        }
      }
    });

    if (newAchievements.length > 0) {
      setAchievements(currentAchievements);
      storage.set('studybuddy-achievements', currentAchievements);
      
      newAchievements.forEach(achievement => {
        showAchievementNotification(achievement);
      });
    }
  };

  const evaluateRequirement = (requirement, currentStats) => {
    try {
      const parts = requirement.match(/(\w+)\s*(>=|<=|>|<|==)\s*(\d+)/);
      if (!parts) return false;
      
      const [, variable, operator, value] = parts;
      const currentValue = currentStats[variable] || 0;
      const targetValue = parseInt(value);
      
      switch (operator) {
        case '>=': return currentValue >= targetValue;
        case '<=': return currentValue <= targetValue;
        case '>': return currentValue > targetValue;
        case '<': return currentValue < targetValue;
        case '==': return currentValue === targetValue;
        default: return false;
      }
    } catch (error) {
      console.error('Error evaluating requirement:', error);
      return false;
    }
  };

  const showAchievementNotification = (achievement) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Achievement Unlocked!', {
        body: `${achievement.icon} ${achievement.title}: ${achievement.description}`,
        icon: '/favicon.ico'
      });
    }
  };

  const getTotalPoints = () => {
    return achievements.reduce((total, achievement) => total + achievement.points, 0);
  };

  const getLevel = () => {
    const points = getTotalPoints();
    if (points >= 500) return { level: 'Master Scholar', color: 'text-purple-500' };
    if (points >= 300) return { level: 'Advanced Student', color: 'text-blue-500' };
    if (points >= 150) return { level: 'Dedicated Learner', color: 'text-green-500' };
    if (points >= 50) return { level: 'Rising Student', color: 'text-yellow-500' };
    return { level: 'Beginner', color: 'text-gray-500' };
  };

  const getProgress = () => {
    const points = getTotalPoints();
    const nextLevelThresholds = [50, 150, 300, 500];
    const currentThreshold = nextLevelThresholds.find(threshold => points < threshold);
    
    if (!currentThreshold) return { progress: 100, nextLevel: null };
    
    const previousThreshold = nextLevelThresholds[nextLevelThresholds.indexOf(currentThreshold) - 1] || 0;
    const progress = ((points - previousThreshold) / (currentThreshold - previousThreshold)) * 100;
    
    return { progress, nextLevel: currentThreshold };
  };

  useEffect(() => {
    checkAchievements();
  }, [stats]);

  const userLevel = getLevel();
  const progressInfo = getProgress();

  return (
    <div className="space-y-6">
      
      <div className="text-center">
        <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
          🏆 Achievements
        </h2>
        <div className={`text-lg font-medium ${userLevel.color}`}>
          {userLevel.level}
        </div>
        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {getTotalPoints()} points earned
        </div>
      </div>

      
      {progressInfo.nextLevel && (
        <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="flex justify-between items-center mb-2">
            <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Progress to next level
            </span>
            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {getTotalPoints()}/{progressInfo.nextLevel}
            </span>
          </div>
          <div className={`w-full bg-gray-200 rounded-full h-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressInfo.progress}%` }}
            ></div>
          </div>
        </div>
      )}

      
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="text-center">
          <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            {stats.study_sessions}
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Study Sessions
          </div>
        </div>
        <div className="text-center">
          <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            {stats.current_streak}
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Current Streak
          </div>
        </div>
        <div className="text-center">
          <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            {Math.floor(stats.total_study_time / 60)}h {stats.total_study_time % 60}m
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Total Time
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievementDefinitions.map(achievement => {
          const isUnlocked = achievements.some(a => a.id === achievement.id);
          const unlockedAchievement = achievements.find(a => a.id === achievement.id);
          
          return (
            <div
              key={achievement.id}
              className={`p-4 rounded-lg border-2 transition-all ${
                isUnlocked
                  ? isDark 
                    ? 'bg-gray-800 border-yellow-500 shadow-lg' 
                    : 'bg-yellow-50 border-yellow-400 shadow-lg'
                  : isDark 
                    ? 'bg-gray-900 border-gray-700 opacity-60' 
                    : 'bg-gray-100 border-gray-300 opacity-60'
              }`}
            >
              <div className="text-center space-y-2">
                <div className="text-3xl">{achievement.icon}</div>
                <div className={`font-medium ${
                  isUnlocked 
                    ? isDark ? 'text-white' : 'text-black'
                    : isDark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  {achievement.title}
                </div>
                <div className={`text-sm ${
                  isUnlocked 
                    ? isDark ? 'text-gray-300' : 'text-gray-700'
                    : isDark ? 'text-gray-600' : 'text-gray-500'
                }`}>
                  {achievement.description}
                </div>
                <div className={`text-xs font-medium ${
                  isUnlocked 
                    ? isDark ? 'text-yellow-400' : 'text-yellow-600'
                    : isDark ? 'text-gray-600' : 'text-gray-500'
                }`}>
                  {achievement.points} points
                </div>
                {isUnlocked && unlockedAchievement && (
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Unlocked: {new Date(unlockedAchievement.unlockedAt).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      
      {'Notification' in window && Notification.permission === 'default' && (
        <div className={`p-4 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-300'}`}>
          <div className="flex items-center justify-between">
            <div>
              <div className={`font-medium ${isDark ? 'text-white' : 'text-blue-900'}`}>
                Enable Achievement Notifications
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-blue-700'}`}>
                Get notified when you unlock new achievements
              </div>
            </div>
            <button
              onClick={() => Notification.requestPermission()}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isDark 
                  ? 'bg-blue-700 hover:bg-blue-600 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              Enable
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementsPanel;
