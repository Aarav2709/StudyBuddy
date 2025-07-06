import React, { useState, useEffect } from 'react';
import { storage } from '../utils/helpers';

const SettingsPanel = ({ isDark, onThemeToggle }) => {
  const [settings, setSettings] = useState({
    theme: 'light',
    notifications: true,
    soundEnabled: true,
    autoBreakReminder: true,
    pomodoroLength: 25,
    shortBreakLength: 5,
    longBreakLength: 15,
    sessionsBeforeLongBreak: 4,
    language: 'en',
    compactMode: false,
    showProgress: true
  });

  const [showResetModal, setShowResetModal] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = () => {
    const savedSettings = {
      theme: storage.get('studybuddy-theme', 'light'),
      notifications: storage.get('studybuddy-notifications', true),
      soundEnabled: storage.get('studybuddy-sound', true),
      autoBreakReminder: storage.get('studybuddy-break-reminder', true),
      pomodoroLength: storage.get('studybuddy-pomodoro-length', 25),
      shortBreakLength: storage.get('studybuddy-short-break', 5),
      longBreakLength: storage.get('studybuddy-long-break', 15),
      sessionsBeforeLongBreak: storage.get('studybuddy-sessions-before-long-break', 4),
      language: storage.get('studybuddy-language', 'en'),
      compactMode: storage.get('studybuddy-compact-mode', false),
      showProgress: storage.get('studybuddy-show-progress', true)
    };
    
    setSettings(savedSettings);
  };

  const updateSetting = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    storage.set(`studybuddy-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
  };

  const exportData = () => {
    const data = {
      bookmarks: storage.get('studybuddy-bookmarks', []),
      history: storage.get('studybuddy-history', []),
      notes: storage.get('studybuddy-notes', []),
      progress: storage.get('studybuddy-progress', {}),
      settings: settings,
      timerSessions: storage.get('studybuddy-timer-sessions', []),
      studyHistory: storage.get('studybuddy-study-history', [])
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `studybuddy-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const importData = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        
        if (data.bookmarks) storage.set('studybuddy-bookmarks', data.bookmarks);
        if (data.history) storage.set('studybuddy-history', data.history);
        if (data.notes) storage.set('studybuddy-notes', data.notes);
        if (data.progress) storage.set('studybuddy-progress', data.progress);
        if (data.timerSessions) storage.set('studybuddy-timer-sessions', data.timerSessions);
        if (data.studyHistory) storage.set('studybuddy-study-history', data.studyHistory);
        
        if (data.settings) {
          Object.entries(data.settings).forEach(([key, value]) => {
            storage.set(`studybuddy-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
          });
          setSettings(data.settings);
        }
        
        alert('Data imported successfully! Please refresh the page to see changes.');
      } catch (error) {
        alert('Error importing data. Please check the file format.');
      }
    };
    reader.readAsText(file);
  };

  const resetAllData = () => {
    const keys = [
      'studybuddy-theme', 'studybuddy-bookmarks', 'studybuddy-history',
      'studybuddy-notes', 'studybuddy-progress', 'studybuddy-timer-sessions',
      'studybuddy-study-history', 'studybuddy-notifications', 'studybuddy-sound',
      'studybuddy-break-reminder', 'studybuddy-daily-goal', 'studybuddy-pomodoro-length',
      'studybuddy-short-break', 'studybuddy-long-break', 'studybuddy-sessions-before-long-break',
      'studybuddy-language', 'studybuddy-compact-mode', 'studybuddy-show-progress'
    ];
    
    keys.forEach(key => storage.remove(key));
    
    loadSettings();
    setShowResetModal(false);
    
    alert('All data has been reset to defaults. Please refresh the page.');
  };

  const SettingRow = ({ title, description, children }) => (
    <div className={`p-4 rounded-lg border ${
      isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex-1">
          <h3 className={`font-medium text-sm sm:text-base ${isDark ? 'text-white' : 'text-black'}`}>
            {title}
          </h3>
          {description && (
            <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {description}
            </p>
          )}
        </div>
        <div className="flex-shrink-0 self-start sm:self-center">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
        Settings
      </h2>

      
      <div className="space-y-4">
        <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
          Appearance
        </h3>
        
        <SettingRow
          title="Dark Mode"
          description="Toggle between light and dark themes."
        >
          <button
            onClick={onThemeToggle}
            className={`w-12 h-6 rounded-full p-1 transition-colors ${
              isDark ? 'bg-white' : 'bg-gray-300'
            }`}
          >
            <div className={`w-4 h-4 rounded-full transition-transform ${
              isDark ? 'translate-x-6 bg-black' : 'translate-x-0 bg-white'
            }`} />
          </button>
        </SettingRow>

        <SettingRow
          title="Compact Mode"
          description="Reduce spacing and padding for more content."
        >
          <button
            onClick={() => updateSetting('compactMode', !settings.compactMode)}
            className={`w-12 h-6 rounded-full p-1 transition-colors ${
              settings.compactMode ? (isDark ? 'bg-white' : 'bg-black') : 'bg-gray-300'
            }`}
          >
            <div className={`w-4 h-4 rounded-full transition-transform ${
              settings.compactMode 
                ? `translate-x-6 ${isDark ? 'bg-black' : 'bg-white'}` 
                : `translate-x-0 ${isDark ? 'bg-gray-600' : 'bg-white'}`
            }`} />
          </button>
        </SettingRow>
      </div>

      
      <div className="space-y-4">
        <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
          Study Timer Settings
        </h3>
        
        <SettingRow
          title="Pomodoro Length"
          description="Duration of focus sessions in minutes."
        >
          <select
            value={settings.pomodoroLength}
            onChange={(e) => updateSetting('pomodoroLength', parseInt(e.target.value))}
            className={`px-3 py-1 rounded-md border transition-colors focus:outline-none focus:ring-2 text-sm ${
              isDark 
                ? 'bg-gray-800 border-gray-600 text-white focus:ring-gray-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:ring-gray-400'
            }`}
          >
            {[15, 20, 25, 30, 45, 60].map(num => (
              <option key={num} value={num}>{num} minutes</option>
            ))}
          </select>
        </SettingRow>

        <SettingRow
          title="Short Break Length"
          description="Duration of short breaks in minutes."
        >
          <select
            value={settings.shortBreakLength}
            onChange={(e) => updateSetting('shortBreakLength', parseInt(e.target.value))}
            className={`px-3 py-1 rounded-md border transition-colors focus:outline-none focus:ring-2 text-sm ${
              isDark 
                ? 'bg-gray-800 border-gray-600 text-white focus:ring-gray-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:ring-gray-400'
            }`}
          >
            {[3, 5, 10, 15].map(num => (
              <option key={num} value={num}>{num} minutes</option>
            ))}
          </select>
        </SettingRow>
      </div>

      
      <div className="space-y-4">
        <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
          Notifications
        </h3>
        
        <SettingRow
          title="Sound Notifications"
          description="Play sound when timer completes."
        >
          <button
            onClick={() => updateSetting('soundEnabled', !settings.soundEnabled)}
            className={`w-12 h-6 rounded-full p-1 transition-colors ${
              settings.soundEnabled ? (isDark ? 'bg-white' : 'bg-black') : 'bg-gray-300'
            }`}
          >
            <div className={`w-4 h-4 rounded-full transition-transform ${
              settings.soundEnabled 
                ? `translate-x-6 ${isDark ? 'bg-black' : 'bg-white'}` 
                : `translate-x-0 ${isDark ? 'bg-gray-600' : 'bg-white'}`
            }`} />
          </button>
        </SettingRow>

        <SettingRow
          title="Break Reminders"
          description="Automatically suggest breaks after study sessions."
        >
          <button
            onClick={() => updateSetting('autoBreakReminder', !settings.autoBreakReminder)}
            className={`w-12 h-6 rounded-full p-1 transition-colors ${
              settings.autoBreakReminder ? (isDark ? 'bg-white' : 'bg-black') : 'bg-gray-300'
            }`}
          >
            <div className={`w-4 h-4 rounded-full transition-transform ${
              settings.autoBreakReminder 
                ? `translate-x-6 ${isDark ? 'bg-black' : 'bg-white'}` 
                : `translate-x-0 ${isDark ? 'bg-gray-600' : 'bg-white'}`
            }`} />
          </button>
        </SettingRow>
      </div>

      
      <div className="space-y-4">
        <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
          Data Management
        </h3>
        
        <SettingRow
          title="Export Data"
          description="Download all your study data as a backup."
        >
          <button
            onClick={exportData}
            className={`px-4 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 text-sm ${
              isDark 
                ? 'border-gray-600 text-gray-300 hover:bg-gray-800 focus:ring-gray-600' 
                : 'border-gray-300 text-gray-600 hover:bg-gray-50 focus:ring-gray-400'
            }`}
          >
            Export
          </button>
        </SettingRow>

        <SettingRow
          title="Import Data"
          description="Restore data from a previous backup."
        >
          <label className={`px-4 py-2 rounded-lg border cursor-pointer transition-colors focus-within:ring-2 text-sm ${
            isDark 
              ? 'border-gray-600 text-gray-300 hover:bg-gray-800 focus-within:ring-gray-600' 
              : 'border-gray-300 text-gray-600 hover:bg-gray-50 focus-within:ring-gray-400'
          }`}>
            Import
            <input
              type="file"
              accept=".json"
              onChange={importData}
              className="hidden"
            />
          </label>
        </SettingRow>

        <SettingRow
          title="Reset All Data"
          description="Clear all data and return to defaults."
        >
          <button
            onClick={() => setShowResetModal(true)}
            className={`px-4 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 text-sm ${
              isDark 
                ? 'border-red-600 text-red-400 hover:bg-red-900 hover:bg-opacity-20 focus:ring-red-600' 
                : 'border-red-300 text-red-600 hover:bg-red-50 focus:ring-red-400'
            }`}
          >
            Reset All
          </button>
        </SettingRow>
      </div>

      
      {showResetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`max-w-md w-full rounded-lg p-6 ${
            isDark ? 'bg-gray-900' : 'bg-white'
          }`}>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              Reset All Data
            </h3>
            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              This will permanently delete all your bookmarks, notes, progress, and settings. This action cannot be undone.
            </p>
            <div className="flex gap-2">
              <button
                onClick={resetAllData}
                className={`flex-1 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 ${
                  isDark 
                    ? 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500' 
                    : 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-400'
                }`}
              >
                Reset All Data
              </button>
              <button
                onClick={() => setShowResetModal(false)}
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

export default SettingsPanel;
