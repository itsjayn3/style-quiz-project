
import { useState } from 'react';
import { QUIZ_QUESTIONS } from './questions.js';
import QuizScreen from './components/QuizScreen.jsx';
import WelcomeScreen from './components/WelcomeScreen.jsx'; // 1. Import WelcomeScreen

function App() {
 
  const [isQuizStarted, setIsQuizStarted] = useState(false);

 
  
  return (
    <div>
      {isQuizStarted ?
        (<QuizScreen questions={QUIZ_QUESTIONS} />) 
        : 
        (<WelcomeScreen onStartQuiz={() => setIsQuizStarted(true)} />)
    }
    </div>
  );
}

export default App;