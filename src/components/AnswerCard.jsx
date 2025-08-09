
import styles from './AnswerCard.module.css';

function AnswerCard({ answer, onClick }) { 
  return (
    <button className={styles.answerCard} onClick={onClick}>
      <img className={styles.answerImage} src={answer.imageUrl} alt="Style choice" />
    </button>
  );
}

export default AnswerCard;