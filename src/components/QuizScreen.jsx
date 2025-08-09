import styles from './QuizScreen.module.css';
import { useState } from 'react';
import AnswerCard from './AnswerCard.jsx';
import ResultsScreen from './ResultsScreen.jsx';

const clickSound = new Audio('/public/mouse-click-290204.mp3'); 

function QuizScreen({ questions }) {
  // All useState hooks are now correctly grouped at the top
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({
    'Club_Rat_Glam': 0,
    'Grungy_Coquette': 0,
    'Soft_Indie_Tomboy': 0,
  });
  const [showResults, setShowResults] = useState(false); 

  // There is now only ONE handleAnswerClick function
  const handleAnswerClick = (style) => {
    clickSound.play(); // Sound plays first

    setScores((prevScores) => ({
      ...prevScores,
      [style]: prevScores[style] + 1,
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true); 
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
  
  return showResults ? (
    <ResultsScreen scores={scores} />
  ) : (
    <div className={styles.quizScreen}>
      <div className={styles.progressBarContainer}>
        <div 
          className={styles.progressBar} 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <h2 key={currentQuestion.id} className={styles.questionText}>
        {currentQuestion.question}
      </h2>
      <div className={styles.answersContainer}>
        {currentQuestion.answers.map((answer) => (
          <AnswerCard
            key={answer.imageUrl}
            answer={answer}
            onClick={() => handleAnswerClick(answer.style)} 
          />
        ))}
      </div>
    </div> 
  );
}

export default QuizScreen;