import React from 'react';
import styles from '../styles/Question.module.scss';
import { Question } from '@/interface/Question.interface';

interface Props {
  question: Question;
}

const QuestionComponent: React.FC<Props> = ({ question }) => {
  return (
    <div className={styles.questionContainer}>
      <h2>{question.question}</h2>
      <p>{question.answer}</p>
    </div>
  );
};

export default QuestionComponent;
