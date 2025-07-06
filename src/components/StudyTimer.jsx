import React, { useState, useEffect } from 'react';
import { timerUtils, storage } from '../utils/helpers';

const StudyTimer = ({ isDark }) => {
  const [time, setTime] = useState(25 * 60); // 25 minutes default
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [sessions, setSessions] = useState(0);
  const [settings, setSettings] = useState({
    pomodoroLength: 25,
    shortBreakLength: 5,
    longBreakLength: 15,
    sessionsBeforeLongBreak: 4,
    soundEnabled: true
  });

  useEffect(() => {
    const savedSettings = {
      pomodoroLength: storage.get('studybuddy-pomodoro-length', 25),
      shortBreakLength: storage.get('studybuddy-short-break', 5),
      longBreakLength: storage.get('studybuddy-long-break', 15),
      sessionsBeforeLongBreak: storage.get('studybuddy-sessions-before-long-break', 4),
      soundEnabled: storage.get('studybuddy-sound', true)
    };
    setSettings(savedSettings);
    setTime(savedSettings.pomodoroLength * 60);
  }, []);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (time === 0) {
      if (settings.soundEnabled) {
        timerUtils.playNotificationSound();
      }
      setIsRunning(false);
      
      const timerSessions = storage.get('studybuddy-timer-sessions', []);
      const sessionData = {
        date: new Date().toISOString(),
        duration: isBreak ? 
          (sessions % settings.sessionsBeforeLongBreak === 3 ? settings.longBreakLength : settings.shortBreakLength) :
          settings.pomodoroLength,
        type: isBreak ? 'break' : 'focus'
      };
      timerSessions.push(sessionData);
      storage.set('studybuddy-timer-sessions', timerSessions);
      
      if (!isBreak) {
        const timerHistory = storage.get('studybuddy-timer-history', []);
        const today = new Date().toISOString().split('T')[0];
        const existingToday = timerHistory.find(entry => entry.date.startsWith(today));
        
        if (existingToday) {
          existingToday.duration += settings.pomodoroLength;
          existingToday.sessions += 1;
        } else {
          timerHistory.push({
            date: new Date().toISOString(),
            duration: settings.pomodoroLength,
            sessions: 1
          });
        }
        storage.set('studybuddy-timer-history', timerHistory);
        
        updateStudyStats();
      }
      
      if (isBreak) {
        setIsBreak(false);
        setTime(settings.pomodoroLength * 60);
        setSessions(prev => prev + 1);
      } else {
        setIsBreak(true);
        const isLongBreak = sessions % settings.sessionsBeforeLongBreak === 3;
        setTime((isLongBreak ? settings.longBreakLength : settings.shortBreakLength) * 60);
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, time, isBreak, sessions, settings]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    if (isBreak) {
      const isLongBreak = sessions % settings.sessionsBeforeLongBreak === 3;
      setTime((isLongBreak ? settings.longBreakLength : settings.shortBreakLength) * 60);
    } else {
      setTime(settings.pomodoroLength * 60);
    }
  };

  const skipSession = () => {
    setIsRunning(false);
    if (isBreak) {
      setIsBreak(false);
      setTime(settings.pomodoroLength * 60);
      setSessions(prev => prev + 1);
    } else {
      setIsBreak(true);
      const isLongBreak = sessions % settings.sessionsBeforeLongBreak === 3;
      setTime((isLongBreak ? settings.longBreakLength : settings.shortBreakLength) * 60);
    }
  };

  const getProgressPercentage = () => {
    const totalTime = isBreak ? 
      (sessions % settings.sessionsBeforeLongBreak === 3 ? settings.longBreakLength : settings.shortBreakLength) * 60 :
      settings.pomodoroLength * 60;
    return ((totalTime - time) / totalTime) * 100;
  };

  const updateStudyStats = () => {
    const stats = storage.get('studybuddy-study-stats', {});
    const now = new Date();
    const hour = now.getHours();
    
    stats.totalSessions = (stats.totalSessions || 0) + 1;
    stats.totalTime = (stats.totalTime || 0) + settings.pomodoroLength;
    
    if (hour < 8) {
      stats.earlySessions = (stats.earlySessions || 0) + 1;
    } else if (hour >= 22) {
      stats.lateSessions = (stats.lateSessions || 0) + 1;
    }
    
    stats.subjectsStudied = Math.min((stats.subjectsStudied || 0) + 0.2, 5);
    
    storage.set('studybuddy-study-stats', stats);
  };

  return (
    <div className={`p-4 rounded-lg border ${
      isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className="text-center">
        <h3 className={`text-lg font-semibold mb-2 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {isBreak ? 
            (sessions % settings.sessionsBeforeLongBreak === 3 ? 'Long Break' : 'Short Break') : 
            'Focus Time'
          }
        </h3>
        
        
        <div className="relative w-24 h-24 mx-auto mb-4">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className={`${isDark ? 'stroke-gray-700' : 'stroke-gray-200'}`}
              strokeWidth="2"
              fill="transparent"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className={`${isDark ? 'stroke-white' : 'stroke-black'}`}
              strokeWidth="2"
              strokeLinecap="round"
              fill="transparent"
              strokeDasharray={`${getProgressPercentage()}, 100`}
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className={`absolute inset-0 flex items-center justify-center text-2xl font-mono ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`}>
            {timerUtils.formatTime(time)}
          </div>
        </div>
        
        <div className="flex justify-center space-x-2 mb-4">
          <button
            onClick={toggleTimer}
            className={`px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 ${
              isDark 
                ? 'bg-white text-black hover:bg-gray-200 focus:ring-gray-600' 
                : 'bg-black text-white hover:bg-gray-800 focus:ring-gray-400'
            }`}
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
          
          <button
            onClick={resetTimer}
            className={`px-4 py-2 rounded-md border transition-colors focus:outline-none focus:ring-2 ${
              isDark 
                ? 'border-gray-600 text-gray-300 hover:bg-gray-800 focus:ring-gray-600' 
                : 'border-gray-300 text-gray-600 hover:bg-gray-50 focus:ring-gray-400'
            }`}
          >
            Reset
          </button>
          
          <button
            onClick={skipSession}
            className={`px-4 py-2 rounded-md border transition-colors focus:outline-none focus:ring-2 ${
              isDark 
                ? 'border-gray-600 text-gray-300 hover:bg-gray-800 focus:ring-gray-600' 
                : 'border-gray-300 text-gray-600 hover:bg-gray-50 focus:ring-gray-400'
            }`}
          >
            Skip
          </button>
        </div>
        
        <div className="space-y-1">
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Sessions completed: {sessions}
          </div>
          <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            Next: {sessions % settings.sessionsBeforeLongBreak === 3 ? 'Long break' : 'Short break'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyTimer;
