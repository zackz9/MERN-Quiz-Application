import React, { useEffect } from 'react'
import Questions from './Questions'

// Redux store import
import { useSelector, useDispatch } from 'react-redux'
import { moveToNextQuestion, moveToPrevQuestion } from '../hooks/FetchQuestion'
import { moveToPrevAction } from '../redux/question_reducer'

export default function Quizz() {

  const {queue, trace} = useSelector((state) => state.questions)
  // const trace = useSelector((state) => state.questions.trace)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log(queue, trace)
  })

  // Btns handling
  function onNext() {
    console.log('Next click')

    // To prevent navigate for inexistant incrementation 

    if(trace < queue.length) {
      // Increment initialState's trace value to move to next question 
      dispatch(moveToNextQuestion())
    }

  }
  function onPrev() {
    console.log('Prev click')

    // To prevent navigation to the negative value 
    if(trace > 0) {
      // Decrement initialState's trace value to move to prev question 
      dispatch(moveToPrevQuestion())
    }

  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quizz Application</h1>

      <Questions />

      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>
          Prev
        </button>
        <button className='btn next' onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  )
}
