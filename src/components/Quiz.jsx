import { useState, useCallback } from 'react'

import QUESTIONS from "../questions.js"
import Summary from './Summary.jsx';
import Question from './Question.jsx';



export default function Quiz() {
    const [userAnswer, setUserAnswer] = useState([]);

    const activeQuestionIndex = userAnswer.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswer((prevAnswer)=>{
            return [...prevAnswer, selectedAnswer]
        });
    },[])


    const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer])

    if(quizIsComplete){
        return(
            <Summary userAnswer={userAnswer}/>
        )
    }
    
    

  return (
    <div id='quiz'>
        <Question 
            key={activeQuestionIndex}
            questionIndex={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer} />
    </div>
    
    
  )
}
