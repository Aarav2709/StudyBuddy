import React, { useState, useEffect } from 'react';
import { storage } from '../utils/helpers';
import { flashcardsData } from '../data/flashcardsData';

const FlashcardsPanel = ({ isDark }) => {
  const [selectedSubject, setSelectedSubject] = useState('mathematics');
  const [selectedChapter, setSelectedChapter] = useState('');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState([]);
  const [difficulty, setDifficulty] = useState('all');

  useEffect(() => {
    const saved = storage.get('studybuddy-flashcards-progress') || {};
    setStudiedCards(saved[selectedSubject] || []);
  }, [selectedSubject]);

  const getCurrentCards = () => {
    const subjectData = flashcardsData[selectedSubject];
    if (!subjectData || !selectedChapter) return [];
    
    const chapterCards = subjectData[selectedChapter] || [];
    if (difficulty === 'all') return chapterCards;
    return chapterCards.filter(card => card.difficulty === difficulty);
  };

  const currentCards = getCurrentCards();
  const currentCard = currentCards[currentCardIndex];

  const nextCard = () => {
    if (currentCardIndex < currentCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setShowAnswer(false);
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setShowAnswer(false);
    }
  };

  const markAsStudied = () => {
    if (!currentCard) return;
    
    const cardId = `${selectedSubject}-${selectedChapter}-${currentCardIndex}`;
    const newStudiedCards = [...studiedCards];
    if (!newStudiedCards.includes(cardId)) {
      newStudiedCards.push(cardId);
      setStudiedCards(newStudiedCards);
      
      const allProgress = storage.get('studybuddy-flashcards-progress') || {};
      allProgress[selectedSubject] = newStudiedCards;
      storage.set('studybuddy-flashcards-progress', allProgress);
    }
  };

  const resetProgress = () => {
    setStudiedCards([]);
    const allProgress = storage.get('studybuddy-flashcards-progress') || {};
    delete allProgress[selectedSubject];
    storage.set('studybuddy-flashcards-progress', allProgress);
  };

  const shuffleCards = () => {
    setCurrentCardIndex(0);
    setShowAnswer(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
          📚 Flashcards
        </h2>
        <div className="flex items-center space-x-2">
          <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Studied: {studiedCards.length}
          </span>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Subject
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value);
              setSelectedChapter('');
              setCurrentCardIndex(0);
              setShowAnswer(false);
            }}
            className={`w-full p-3 rounded-lg border transition-colors focus:ring-2 focus:outline-none text-sm sm:text-base ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' 
                : 'bg-white border-gray-300 text-black focus:ring-blue-500'
            }`}
          >
            {Object.keys(flashcardsData).map(subject => (
              <option key={subject} value={subject}>
                {subject.charAt(0).toUpperCase() + subject.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Chapter
          </label>
          <select
            value={selectedChapter}
            onChange={(e) => {
              setSelectedChapter(e.target.value);
              setCurrentCardIndex(0);
              setShowAnswer(false);
            }}
            className={`w-full p-3 rounded-lg border transition-colors focus:ring-2 focus:outline-none text-sm sm:text-base ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' 
                : 'bg-white border-gray-300 text-black focus:ring-blue-500'
            }`}
            disabled={!flashcardsData[selectedSubject]}
          >
            <option value="">Select Chapter</option>
            {flashcardsData[selectedSubject] && Object.keys(flashcardsData[selectedSubject]).map(chapter => (
              <option key={chapter} value={chapter}>
                {chapter}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Difficulty
          </label>
          <select
            value={difficulty}
            onChange={(e) => {
              setDifficulty(e.target.value);
              setCurrentCardIndex(0);
              setShowAnswer(false);
            }}
            className={`w-full p-3 rounded-lg border transition-colors focus:ring-2 focus:outline-none text-sm sm:text-base ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' 
                : 'bg-white border-gray-300 text-black focus:ring-blue-500'
            }`}
          >
            <option value="all">All Levels</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>

      
      {currentCard ? (
        <div className="space-y-4">
          
          <div className="text-center">
            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Card {currentCardIndex + 1} of {currentCards.length}
            </span>
          </div>

          
          <div 
            className={`min-h-[250px] sm:min-h-[300px] rounded-lg border-2 cursor-pointer transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                : 'bg-white border-gray-300 hover:border-gray-400'
            }`}
            onClick={() => setShowAnswer(!showAnswer)}
          >
            <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-center">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className={`text-xs sm:text-sm font-medium ${
                  currentCard.difficulty === 'easy' ? 'text-green-500' :
                  currentCard.difficulty === 'medium' ? 'text-yellow-500' : 'text-red-500'
                }`}>
                  {currentCard.difficulty.toUpperCase()}
                </div>
                
                <div className={`text-base sm:text-lg font-medium ${isDark ? 'text-white' : 'text-black'}`}>
                  {showAnswer ? 'Answer:' : 'Question:'}
                </div>
                
                <div className={`text-lg sm:text-xl leading-relaxed px-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                  {showAnswer ? currentCard.answer : currentCard.question}
                </div>
                
                {!showAnswer && (
                  <div className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Tap to reveal answer
                  </div>
                )}
              </div>
            </div>
          </div>

          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              onClick={prevCard}
              disabled={currentCardIndex === 0}
              className={`w-full sm:w-auto px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base ${
                isDark 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300 text-black'
              }`}
            >
              ← Previous
            </button>

            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={markAsStudied}
                className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                  isDark 
                    ? 'bg-green-700 hover:bg-green-600 text-white' 
                    : 'bg-green-200 hover:bg-green-300 text-green-800'
                }`}
              >
                ✓ Studied
              </button>
              
              <button
                onClick={shuffleCards}
                className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                  isDark 
                    ? 'bg-blue-700 hover:bg-blue-600 text-white' 
                    : 'bg-blue-200 hover:bg-blue-300 text-blue-800'
                }`}
              >
                🔀 Shuffle
              </button>
              
              <button
                onClick={resetProgress}
                className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                  isDark 
                    ? 'bg-red-700 hover:bg-red-600 text-white' 
                    : 'bg-red-200 hover:bg-red-300 text-red-800'
                }`}
              >
                Reset
              </button>
            </div>

            <button
              onClick={nextCard}
              disabled={currentCardIndex === currentCards.length - 1}
              className={`w-full sm:w-auto px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base ${
                isDark 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300 text-black'
              }`}
            >
              Next →
            </button>
          </div>
        </div>
      ) : (
        <div className={`text-center py-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {selectedChapter ? 'No flashcards available for this chapter.' : 'Please select a chapter to start studying.'}
        </div>
      )}
    </div>
  );
};

export default FlashcardsPanel;
