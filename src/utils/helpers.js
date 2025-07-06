export const storage = {
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultValue;
    }
  },
  
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  },
  
  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  }
};

export const dateUtils = {
  formatDate: (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  },
  
  isToday: (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  },
  
  daysBetween: (date1, date2) => {
    const diffTime = Math.abs(date2 - date1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
};

export const searchUtils = {
  highlightText: (text, searchTerm) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-600">$1</mark>');
  },
  
  searchInText: (text, searchTerm) => {
    return text.toLowerCase().includes(searchTerm.toLowerCase());
  }
};

export const progressUtils = {
  calculateProgress: (completed, total) => {
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  },
  
  getStreakData: (studyHistory) => {
    if (!studyHistory || studyHistory.length === 0) {
      return { currentStreak: 0, longestStreak: 0 };
    }
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const sortedDates = studyHistory
      .map(entry => {
        const date = new Date(entry.date);
        date.setHours(0, 0, 0, 0);
        return date;
      })
      .sort((a, b) => b - a);
    
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;
    
    let checkDate = new Date(today);
    for (let i = 0; i < sortedDates.length; i++) {
      if (sortedDates[i].getTime() === checkDate.getTime()) {
        currentStreak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }
    
    for (let i = 0; i < sortedDates.length; i++) {
      if (i === 0) {
        tempStreak = 1;
      } else {
        const dayDiff = (sortedDates[i - 1] - sortedDates[i]) / (1000 * 60 * 60 * 24);
        if (dayDiff === 1) {
          tempStreak++;
        } else {
          longestStreak = Math.max(longestStreak, tempStreak);
          tempStreak = 1;
        }
      }
    }
    longestStreak = Math.max(longestStreak, tempStreak, currentStreak);
    
    return { currentStreak, longestStreak };
  }
};

export const timerUtils = {
  formatTime: (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  },
  
  playNotificationSound: () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  }
};

export const notificationUtils = {
  requestPermission: async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }
    return false;
  },
  
  showNotification: (title, options = {}) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      return new Notification(title, {
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        ...options
      });
    }
  }
};
