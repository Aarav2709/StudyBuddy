import React, { useState, useEffect } from 'react';
import { storage } from '../utils/helpers';
import { quizData } from '../data/quizData';

const QuizPanel = ({ isDark }) => {
  const [selectedSubject, setSelectedSubject] = useState('mathematics');
  const [selectedChapter, setSelectedChapter] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [quizResults, setQuizResults] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let timer;
    if (timerActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      handleTimeUp();
    }
    return () => clearTimeout(timer);
  }, [timerActive, timeLeft]);

  const getCurrentQuestions = () => {
    const subjectData = quizData[selectedSubject];
    if (!subjectData || !selectedChapter) return [];
    return subjectData[selectedChapter] || [];
  };

  const startQuiz = () => {
    const questions = getCurrentQuestions();
    if (questions.length === 0) return;
    
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setShowResult(false);
    setQuizResults([]);
    setScore(0);
    setTimeLeft(30);
    setTimerActive(true);
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const submitAnswer = () => {
    const questions = getCurrentQuestions();
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct;
    
    const result = {
      question: currentQuestion.question,
      selectedAnswer,
      correctAnswer: currentQuestion.correct,
      isCorrect,
      explanation: currentQuestion.explanation
    };
    
    setQuizResults([...quizResults, result]);
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setShowResult(true);
    setTimerActive(false);
    
    updateQuizStats(isCorrect);
  };

  const handleTimeUp = () => {
    if (!showResult && quizStarted) {
      const questions = getCurrentQuestions();
      const currentQuestion = questions[currentQuestionIndex];
      
      const result = {
        question: currentQuestion.question,
        selectedAnswer: 'Time up',
        correctAnswer: currentQuestion.correct,
        isCorrect: false,
        explanation: currentQuestion.explanation
      };
      
      setQuizResults([...quizResults, result]);
      setShowResult(true);
      setTimerActive(false);
      updateQuizStats(false);
    }
  };

  const nextQuestion = () => {
    const questions = getCurrentQuestions();
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
      setShowResult(false);
      setTimeLeft(30);
      setTimerActive(true);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setQuizStarted(false);
    setTimerActive(false);
    
    const quizResult = {
      subject: selectedSubject,
      chapter: selectedChapter,
      score,
      total: getCurrentQuestions().length,
      date: new Date().toISOString(),
      results: quizResults
    };
    
    const savedResults = storage.get('studybuddy-quiz-results') || [];
    savedResults.push(quizResult);
    storage.set('studybuddy-quiz-results', savedResults);
  };

  const updateQuizStats = (isCorrect) => {
    const stats = storage.get('studybuddy-study-stats') || {};
    stats.quizQuestions = (stats.quizQuestions || 0) + 1;
    if (isCorrect) {
      stats.correctAnswers = (stats.correctAnswers || 0) + 1;
    }
    storage.set('studybuddy-study-stats', stats);
  };

  const getQuizHistory = () => {
    return storage.get('studybuddy-quiz-results') || [];
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setShowResult(false);
    setQuizResults([]);
    setScore(0);
    setTimerActive(false);
  };

  const questions = getCurrentQuestions();
  const currentQuestion = questions[currentQuestionIndex];
  const quizHistory = getQuizHistory();

  if (!quizStarted) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
            🧠 Quick Quiz
          </h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Test your knowledge with quick quizzes
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Subject
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => {
                setSelectedSubject(e.target.value);
                setSelectedChapter('');
              }}
              className={`w-full p-3 rounded-lg border transition-colors focus:ring-2 focus:outline-none text-sm sm:text-base ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' 
                  : 'bg-white border-gray-300 text-black focus:ring-blue-500'
              }`}
            >
              {Object.keys(quizData).map(subject => (
                <option key={subject} value={subject}>
                  {subject === 'hindiSparsh' ? 'Hindi (Sparsh)' :
                   subject === 'hindiSanchayan' ? 'Hindi (Sanchayan)' :
                   subject === 'physics' ? 'Physics' :
                   subject === 'chemistry' ? 'Chemistry' :
                   subject === 'biology' ? 'Biology' :
                   subject === 'history' ? 'History' :
                   subject === 'geography' ? 'Geography' :
                   subject === 'civics' ? 'Civics' :
                   subject === 'economics' ? 'Economics' :
                   subject.charAt(0).toUpperCase() + subject.slice(1)}
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
              onChange={(e) => setSelectedChapter(e.target.value)}
              className={`w-full p-3 rounded-lg border transition-colors focus:ring-2 focus:outline-none text-sm sm:text-base ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' 
                  : 'bg-white border-gray-300 text-black focus:ring-blue-500'
              }`}
              disabled={!quizData[selectedSubject]}
            >
              <option value="">Select Chapter</option>
              {quizData[selectedSubject] && Object.keys(quizData[selectedSubject]).map(chapter => (
                <option key={chapter} value={chapter}>
                  {chapter}
                </option>
              ))}
            </select>
          </div>
        </div>

        
        {selectedChapter && questions.length > 0 && (
          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="flex justify-between items-center">
              <div>
                <div className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
                  {questions.length} Questions Available
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  30 seconds per question
                </div>
              </div>
              <button
                onClick={startQuiz}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  isDark 
                    ? 'bg-blue-700 hover:bg-blue-600 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Start Quiz
              </button>
            </div>
          </div>
        )}

        
        {quizHistory.length > 0 && (
          <div className="space-y-4">
            <h3 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-black'}`}>
              Recent Quiz Results
            </h3>
            <div className="space-y-2">
              {quizHistory.slice(-5).reverse().map((result, index) => (
                <div key={index} className={`p-3 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
                        {result.subject} - {result.chapter}
                      </div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {new Date(result.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className={`font-bold ${
                      result.score / result.total >= 0.8 ? 'text-green-500' :
                      result.score / result.total >= 0.6 ? 'text-yellow-500' : 'text-red-500'
                    }`}>
                      {result.score}/{result.total}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      
      <div className="flex justify-between items-center">
        <div>
          <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            Quiz: {selectedSubject} - {selectedChapter}
          </h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className={`text-lg font-bold ${
            timeLeft <= 10 ? 'text-red-500' : isDark ? 'text-white' : 'text-black'
          }`}>
            {timeLeft}s
          </div>
          <button
            onClick={resetQuiz}
            className={`px-4 py-2 rounded-lg transition-colors ${
              isDark 
                ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-black'
            }`}
          >
            Exit Quiz
          </button>
        </div>
      </div>

      
      <div className={`w-full bg-gray-200 rounded-full h-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div 
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
        ></div>
      </div>

      
      {currentQuestion && (
        <div className="space-y-6">
          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className={`text-lg font-medium mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              {currentQuestion.question}
            </div>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
                    showResult
                      ? option === currentQuestion.correct
                        ? 'border-green-500 bg-green-100 text-green-800'
                        : option === selectedAnswer
                          ? 'border-red-500 bg-red-100 text-red-800'
                          : isDark ? 'border-gray-700 bg-gray-900 text-gray-400' : 'border-gray-300 bg-gray-50 text-gray-600'
                      : selectedAnswer === option
                        ? isDark ? 'border-blue-500 bg-blue-900 text-white' : 'border-blue-500 bg-blue-100 text-blue-800'
                        : isDark ? 'border-gray-700 bg-gray-900 text-white hover:border-gray-600' : 'border-gray-300 bg-white text-black hover:border-gray-400'
                  }`}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              ))}
            </div>
          </div>

          
          <div className="flex justify-center">
            {!showResult ? (
              <button
                onClick={submitAnswer}
                disabled={!selectedAnswer}
                className={`px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  isDark 
                    ? 'bg-blue-700 hover:bg-blue-600 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Submit Answer
              </button>
            ) : (
              <div className="text-center space-y-4">
                {currentQuestion.explanation && (
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <div className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                      Explanation:
                    </div>
                    <div className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {currentQuestion.explanation}
                    </div>
                  </div>
                )}
                
                <button
                  onClick={nextQuestion}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    isDark 
                      ? 'bg-green-700 hover:bg-green-600 text-white' 
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      
      <div className={`text-center p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className={`text-lg font-medium ${isDark ? 'text-white' : 'text-black'}`}>
          Current Score: {score}/{currentQuestionIndex + (showResult ? 1 : 0)}
        </div>
        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {score > 0 ? Math.round((score / (currentQuestionIndex + (showResult ? 1 : 0))) * 100) : 0}% correct
        </div>
      </div>
    </div>
  );
};

export default QuizPanel;
