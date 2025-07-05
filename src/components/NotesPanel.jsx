import React, { useState, useEffect } from 'react';
import { getCuratedNotes, searchCuratedNotes } from '../data/curatedNotes';
import { storage } from '../utils/helpers';

const NotesPanel = ({ isDark }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [notes, setNotes] = useState([]);
  const [bookmarkedNotes, setBookmarkedNotes] = useState(new Set());

  const subjects = [
    { key: 'all', name: 'All Subjects' },
    { key: 'mathematics', name: 'Mathematics' },
    { key: 'science', name: 'Science' },
    { key: 'english', name: 'English' },
    { key: 'hindiSparsh', name: 'Hindi' },
    { key: 'socialScience', name: 'Social Science' }
  ];

  const difficulties = [
    { key: 'all', name: 'All Levels' },
    { key: 'Basic', name: 'Basic' },
    { key: 'Intermediate', name: 'Intermediate' },
    { key: 'Advanced', name: 'Advanced' }
  ];

  useEffect(() => {
    const savedBookmarks = storage.get('studybuddy-bookmarked-notes', []);
    setBookmarkedNotes(new Set(savedBookmarks));
  }, []);

  useEffect(() => {
    let allNotes = [];

    if (searchTerm.trim()) {
      // Search across all notes
      allNotes = searchCuratedNotes(searchTerm);
    } else if (selectedSubject === 'all') {
      // Get all notes from all subjects
      subjects.slice(1).forEach(subject => {
        const subjectNotes = getCuratedNotes(subject.key);
        subjectNotes.forEach(note => {
          allNotes.push({ ...note, subject: subject.key });
        });
      });
    } else {
      // Get notes for selected subject
      allNotes = getCuratedNotes(selectedSubject).map(note => ({
        ...note,
        subject: selectedSubject
      }));
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'all') {
      allNotes = allNotes.filter(note => note.difficulty === selectedDifficulty);
    }

    setNotes(allNotes);
  }, [searchTerm, selectedSubject, selectedDifficulty]);

  const toggleBookmark = (noteId) => {
    const newBookmarks = new Set(bookmarkedNotes);
    if (newBookmarks.has(noteId)) {
      newBookmarks.delete(noteId);
    } else {
      newBookmarks.add(noteId);
    }
    setBookmarkedNotes(newBookmarks);
    storage.set('studybuddy-bookmarked-notes', Array.from(newBookmarks));
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Basic': return isDark ? 'text-green-400' : 'text-green-600';
      case 'Intermediate': return isDark ? 'text-yellow-400' : 'text-yellow-600';
      case 'Advanced': return isDark ? 'text-red-400' : 'text-red-600';
      default: return isDark ? 'text-gray-400' : 'text-gray-600';
    }
  };

  const getSubjectDisplayName = (subject, subpart) => {
    const subjectNames = {
      mathematics: 'Mathematics',
      science: 'Science',
      english: 'English',
      hindiSparsh: 'Hindi',
      socialScience: 'Social Science'
    };
    
    let name = subjectNames[subject] || subject;
    if (subpart) {
      const subpartNames = {
        physics: 'Physics',
        chemistry: 'Chemistry', 
        biology: 'Biology',
        history: 'History',
        civics: 'Civics',
        geography: 'Geography',
        economics: 'Economics'
      };
      name += ` - ${subpartNames[subpart] || subpart}`;
    }
    return name;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
          Curated Study Notes
        </h2>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          High-quality notes from reputable educational sources
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <svg 
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
              isDark 
                ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:ring-gray-600' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-gray-400'
            }`}
          />
        </div>

        {/* Subject Filter */}
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className={`px-4 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
            isDark 
              ? 'bg-gray-900 border-gray-700 text-white focus:ring-gray-600' 
              : 'bg-white border-gray-300 text-gray-900 focus:ring-gray-400'
          }`}
        >
          {subjects.map(subject => (
            <option key={subject.key} value={subject.key}>
              {subject.name}
            </option>
          ))}
        </select>

        {/* Difficulty Filter */}
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className={`px-4 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
            isDark 
              ? 'bg-gray-900 border-gray-700 text-white focus:ring-gray-600' 
              : 'bg-white border-gray-300 text-gray-900 focus:ring-gray-400'
          }`}
        >
          {difficulties.map(difficulty => (
            <option key={difficulty.key} value={difficulty.key}>
              {difficulty.name}
            </option>
          ))}
        </select>
      </div>

      {/* Notes Grid */}
      {notes.length === 0 ? (
        <div className={`text-center py-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-lg mb-2">No notes found</p>
          <p className="text-sm">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
                isDark 
                  ? 'bg-gray-900 border-gray-700 hover:border-gray-600' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Note Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                    {note.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className={`px-2 py-1 rounded ${
                      isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {getSubjectDisplayName(note.subject, note.subpart)}
                    </span>
                    <span className={`px-2 py-1 rounded ${getDifficultyColor(note.difficulty)} ${
                      isDark ? 'bg-gray-800' : 'bg-gray-100'
                    }`}>
                      {note.difficulty}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => toggleBookmark(note.id)}
                  className={`p-1 rounded-md transition-colors focus:outline-none focus:ring-2 ${
                    bookmarkedNotes.has(note.id)
                      ? (isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-yellow-500 hover:text-yellow-600')
                      : (isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-500 hover:text-yellow-500')
                  } ${isDark ? 'hover:bg-gray-800 focus:ring-gray-600' : 'hover:bg-gray-100 focus:ring-gray-400'}`}
                  title={bookmarkedNotes.has(note.id) ? "Remove bookmark" : "Add bookmark"}
                >
                  <svg className="w-5 h-5" fill={bookmarkedNotes.has(note.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>

              {/* Note Content */}
              <div className={`text-sm leading-relaxed mb-3 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                {note.content}
              </div>

              {/* Tags */}
              {note.tags && note.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {note.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs rounded-full ${
                        isDark 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Source */}
              <div className="flex justify-between items-center">
                <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Source: {note.source}
                </div>
                {note.sourceUrl && (
                  <a
                    href={note.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded ${
                      isDark 
                        ? 'text-blue-400 hover:text-blue-300 focus:ring-blue-500' 
                        : 'text-blue-600 hover:text-blue-800 focus:ring-blue-500'
                    }`}
                  >
                    View Source →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Stats */}
      <div className={`text-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        Showing {notes.length} curated note{notes.length !== 1 ? 's' : ''}
        {bookmarkedNotes.size > 0 && (
          <span> • {bookmarkedNotes.size} bookmarked</span>
        )}
      </div>
    </div>
  );
};

export default NotesPanel;
