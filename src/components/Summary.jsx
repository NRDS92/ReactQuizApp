import React from 'react'
import QuizCompleteImg from "../assets/quiz-complete.png"
import QUESTIONS from "../questions.js"
import Answers from './Answers'

export default function Summary({userAnswer}) {
    const skippedAnswers = userAnswer.filter(answer => answer === null)
    const skippedShare = Math.round((skippedAnswers.length / userAnswer.length) * 100)
    const correctAnswers = userAnswer.filter((answer, index) => answer === QUESTIONS[index].answers[0])
    const correctShare = Math.round((correctAnswers.length / userAnswer.length) * 100)
    const wrongAnswer = 100 - skippedShare - correctShare
    return (
    <div id='summary'>
        <h2>Quiz Completed</h2>
        <img src={QuizCompleteImg} alt='Trophy icon'/>
        <div id='summary-stats'>
            <p>
                <span className='number'>{skippedShare}%</span>
                <span className='text'>skipped</span>
            </p>
            <p>
                <span className='number'>{correctShare}%</span>
                <span className='text'>Answered Correctly</span>
            </p>
            <p>
                <span className='number'>{wrongAnswer}%</span>
                <span className='text'>Answered Incorrectly</span>
            </p>
        </div>
        <ol>
        {userAnswer.map((answer, index) =>{
            let cssClass = "user-answer"
            if(answer === null){
                cssClass += " skipped"
            }else if(answer === QUESTIONS[index].answers[0]){
                cssClass += " correct"
            }else{
                cssClass += " wrong"
            }

            return(
                <li key={index} >
                <h3>{index + 1}</h3>
                <p className='question'>{QUESTIONS[index].text}</p>
                <p className={cssClass}>{answer ?? "skipped"}</p>
                </li>
            )
        })}
            
        </ol>
    </div>
  )
}
