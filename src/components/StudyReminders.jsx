import React, { useState, useEffect } from 'react';
import { storage } from '../utils/helpers';

const StudyReminders = ({ isDark }) => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState({
    title: '',
    time: '',
    days: [],
    enabled: true
  });
  const [notificationPermission, setNotificationPermission] = useState(Notification.permission);

  const daysOfWeek = [
    { id: 'monday', label: 'Mon' },
    { id: 'tuesday', label: 'Tue' },
    { id: 'wednesday', label: 'Wed' },
    { id: 'thursday', label: 'Thu' },
    { id: 'friday', label: 'Fri' },
    { id: 'saturday', label: 'Sat' },
    { id: 'sunday', label: 'Sun' }
  ];

  useEffect(() => {
    loadReminders();
    checkNotificationPermission();
  }, []);

  const loadReminders = () => {
    const saved = storage.get('studybuddy-reminders') || [];
    setReminders(saved);
  };

  const checkNotificationPermission = () => {
    if ('Notification' in window) {
      setNotificationPermission(Notification.permission);
    }
  };

  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission);
    }
  };

  const addReminder = () => {
    if (!newReminder.title || !newReminder.time || newReminder.days.length === 0) {
      alert('Please fill in all fields');
      return;
    }

    const reminder = {
      id: Date.now(),
      ...newReminder,
      createdAt: new Date().toISOString()
    };

    const updatedReminders = [...reminders, reminder];
    setReminders(updatedReminders);
    storage.set('studybuddy-reminders', updatedReminders);

    scheduleNotification(reminder);

    setNewReminder({
      title: '',
      time: '',
      days: [],
      enabled: true
    });
  };

  const deleteReminder = (id) => {
    const updatedReminders = reminders.filter(r => r.id !== id);
    setReminders(updatedReminders);
    storage.set('studybuddy-reminders', updatedReminders);
  };

  const toggleReminder = (id) => {
    const updatedReminders = reminders.map(r => 
      r.id === id ? { ...r, enabled: !r.enabled } : r
    );
    setReminders(updatedReminders);
    storage.set('studybuddy-reminders', updatedReminders);
  };

  const scheduleNotification = (reminder) => {
    if (notificationPermission !== 'granted') return;

    const now = new Date();
    const [hours, minutes] = reminder.time.split(':').map(Number);

    reminder.days.forEach(day => {
      const dayIndex = daysOfWeek.findIndex(d => d.id === day);
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + (dayIndex + 1 - targetDate.getDay()) % 7);
      targetDate.setHours(hours, minutes, 0, 0);

      if (targetDate > now) {
        const timeUntilNotification = targetDate.getTime() - now.getTime();
        
        setTimeout(() => {
          if (reminder.enabled) {
            new Notification('StudyBuddy Reminder', {
              body: reminder.title,
              icon: '/favicon.ico',
              tag: `reminder-${reminder.id}`
            });
          }
        }, timeUntilNotification);
      }
    });
  };

  const handleDayToggle = (dayId) => {
    setNewReminder(prev => ({
      ...prev,
      days: prev.days.includes(dayId)
        ? prev.days.filter(d => d !== dayId)
        : [...prev.days, dayId]
    }));
  };

  const getNextReminderTime = (reminder) => {
    const now = new Date();
    const [hours, minutes] = reminder.time.split(':').map(Number);
    
    let nextReminder = null;
    let minDiff = Infinity;

    reminder.days.forEach(day => {
      const dayIndex = daysOfWeek.findIndex(d => d.id === day);
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + (dayIndex + 1 - targetDate.getDay()) % 7);
      targetDate.setHours(hours, minutes, 0, 0);

      if (targetDate <= now) {
        targetDate.setDate(targetDate.getDate() + 7);
      }

      const diff = targetDate.getTime() - now.getTime();
      if (diff < minDiff) {
        minDiff = diff;
        nextReminder = targetDate;
      }
    });

    return nextReminder;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
          ⏰ Study Reminders
        </h2>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Set up study reminders to build consistent habits
        </p>
      </div>

      
      {notificationPermission !== 'granted' && (
        <div className={`p-4 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-yellow-50 border-yellow-300'}`}>
          <div className="flex items-center justify-between">
            <div>
              <div className={`font-medium ${isDark ? 'text-white' : 'text-yellow-900'}`}>
                Enable Notifications
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-yellow-700'}`}>
                Allow notifications to receive study reminders
              </div>
            </div>
            <button
              onClick={requestNotificationPermission}
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

      
      <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <h3 className={`text-lg font-medium mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
          Add New Reminder
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Reminder Title
            </label>
            <input
              type="text"
              value={newReminder.title}
              onChange={(e) => setNewReminder(prev => ({ ...prev, title: e.target.value }))}
              placeholder="e.g., Mathematics Study Time"
              className={`w-full p-3 rounded-lg border transition-colors focus:ring-2 focus:outline-none ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500' 
                  : 'bg-white border-gray-300 text-black focus:ring-blue-500'
              }`}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Time
            </label>
            <input
              type="time"
              value={newReminder.time}
              onChange={(e) => setNewReminder(prev => ({ ...prev, time: e.target.value }))}
              className={`w-full p-3 rounded-lg border transition-colors focus:ring-2 focus:outline-none ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500' 
                  : 'bg-white border-gray-300 text-black focus:ring-blue-500'
              }`}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Days of Week
            </label>
            <div className="flex flex-wrap gap-2">
              {daysOfWeek.map(day => (
                <button
                  key={day.id}
                  onClick={() => handleDayToggle(day.id)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    newReminder.days.includes(day.id)
                      ? isDark
                        ? 'bg-blue-700 text-white'
                        : 'bg-blue-600 text-white'
                      : isDark
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {day.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={addReminder}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${
              isDark 
                ? 'bg-blue-700 hover:bg-blue-600 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Add Reminder
          </button>
        </div>
      </div>

      
      <div className="space-y-3">
        <h3 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-black'}`}>
          Your Reminders ({reminders.length})
        </h3>
        
        {reminders.length === 0 ? (
          <div className={`text-center py-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            No reminders set up yet. Add one above to get started!
          </div>
        ) : (
          <div className="space-y-3">
            {reminders.map(reminder => {
              const nextTime = getNextReminderTime(reminder);
              return (
                <div
                  key={reminder.id}
                  className={`p-4 rounded-lg border transition-colors ${
                    reminder.enabled
                      ? isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
                      : isDark ? 'bg-gray-900 border-gray-800 opacity-60' : 'bg-gray-50 border-gray-200 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className={`font-medium ${
                        reminder.enabled 
                          ? isDark ? 'text-white' : 'text-black'
                          : isDark ? 'text-gray-500' : 'text-gray-400'
                      }`}>
                        {reminder.title}
                      </div>
                      <div className={`text-sm ${
                        reminder.enabled 
                          ? isDark ? 'text-gray-400' : 'text-gray-600'
                          : isDark ? 'text-gray-600' : 'text-gray-500'
                      }`}>
                        {reminder.time} • {reminder.days.map(day => 
                          daysOfWeek.find(d => d.id === day)?.label
                        ).join(', ')}
                      </div>
                      {reminder.enabled && nextTime && (
                        <div className={`text-xs ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                          Next: {nextTime.toLocaleDateString()} at {nextTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleReminder(reminder.id)}
                        className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                          reminder.enabled
                            ? isDark ? 'bg-green-700 text-white' : 'bg-green-600 text-white'
                            : isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-300 text-gray-700'
                        }`}
                      >
                        {reminder.enabled ? 'ON' : 'OFF'}
                      </button>
                      
                      <button
                        onClick={() => deleteReminder(reminder.id)}
                        className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                          isDark 
                            ? 'bg-red-700 hover:bg-red-600 text-white' 
                            : 'bg-red-600 hover:bg-red-700 text-white'
                        }`}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyReminders;
