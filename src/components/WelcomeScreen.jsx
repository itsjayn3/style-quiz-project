
import styles from './WelcomeScreen.module.css';

function WelcomeScreen({ onStartQuiz }) {
  return (
    <div className={styles.welcomeScreen}>
      <h1 className={styles.title}>Ready to find your style?</h1>
      <p className={styles.joke}>(Warning: May cause serious outfit envy...)</p>
      <button className={styles.startButton} onClick={onStartQuiz}>
        LET'S GO
      </button>
    </div>
  );
}

export default WelcomeScreen;