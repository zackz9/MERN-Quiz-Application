import React, { useEffect, useState } from 'react'
import Questions from './Questions'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { moveToNextQuestion, moveToPrevQuestion } from '../hooks/FetchQuestion'
import { pushingAnswer } from '../hooks/setNatija'

export default function Quizz() {
  // grabbing value from child questions compo
  const [check, setChecked] = useState(undefined)

  const result = useSelector((state) => state.result.result)
  const { queue, trace } = useSelector((state) => state.questions)

  const dispatch = useDispatch()


  // Btns handling
  function onNext() {
    // console.log('Next click')

    // To prevent navigate for inexistant incrementation

    if (trace < queue.length) {
      // Increment initialState's trace value to move to next question
      dispatch(moveToNextQuestion())

      // inserting a new val in array only if previous has changed 
      if(result.length <= trace) {
 
        // Push answer
        dispatch(pushingAnswer(check))
      }
    }

    // Reset value only for checked variable 
    setChecked(undefined)

  }

  function onPrev() {
    console.log('Prev click')

    // To prevent navigation to the negative value
    if (trace > 0) {
      // Decrement initialState's trace value to move to prev question
      dispatch(moveToPrevQuestion())
    }
  }

  function onChecked(check) {
    setChecked(check)
  }

  // Examinate answers after last question 
  if(result.length && result.length >= queue.length ) {
    return <Navigate to={'/result'} replace='true'></Navigate>
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quizz Application</h1>

      <Questions onChecked={onChecked} />

      <div className='grid'>

        { 
          trace > 0 ?   
            <button className='btn prev' onClick={onPrev}>Prev</button>
          : <div></div>
          }
        <button className='btn next' onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  )
}
