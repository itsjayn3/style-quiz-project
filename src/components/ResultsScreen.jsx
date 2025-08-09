// src/components/ResultsScreen.jsx
import { useState } from 'react';
import styles from './ResultsScreen.module.css';

const drumrollSound = new Audio('public/drum-roll-sound-effect-278576.mp3');

function ResultsScreen({ scores }) {
  const [isRevealing, setIsRevealing] = useState(false); // New state to track the reveal process
  const [isRevealed, setIsRevealed] = useState(false);

  // This function will now be triggered by a button click
  const handleRevealClick = () => {
    setIsRevealing(true); // Hide the button and prepare for the reveal
    drumrollSound.play();

    const timer = setTimeout(() => {
      setIsRevealed(true); // After 5 seconds, show the text
    }, 5000);
  }; 

  const findBestStyle = () => {
    let bestStyle = '';
    let maxScore = -1;
    for (const style in scores) {
      if (scores[style] > maxScore) {
        maxScore = scores[style];
        bestStyle = style;
      }
    }
    return bestStyle.replace(/_/g, ' ');
  };

  const finalResult = findBestStyle();

  return (
    <div className={styles.resultsScreen}>
      {isRevealing ? (
        // If we are revealing, show the (initially hidden) text
        <>
          <h1 className={styles.resultTitle}>
             Your Style Is...
          </h1>
          <h2 className={`${styles.resultPersona} ${isRevealed ? styles.revealed : ''}`}>
            {finalResult}!
          </h2>
        </>
      ) : (
        // Otherwise, show the reveal button
        <button className={styles.revealButton} onClick={handleRevealClick}>
          REVEAL MY STYLE
        </button>
      )}
    </div>
  );
}

export default ResultsScreen;