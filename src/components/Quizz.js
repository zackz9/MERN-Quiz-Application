import React, { useEffect, useState } from 'react'
import Questions from './Questions'
import { useSelector, useDispatch } from 'react-redux'
import { moveToNextQuestion, moveToPrevQuestion } from '../hooks/FetchQuestion'
import { pushingAnswer } from '../hooks/setNatija'

export default function Quizz() {
  // grabbing value from child questions compo
  const [check, setChecked] = useState(undefined)

  const state = useSelector((state) => state)
  const { queue, trace } = useSelector((state) => state.questions)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log(state)
  })

  // Btns handling
  function onNext() {
    console.log('Next click')

    // To prevent navigate for inexistant incrementation

    if (trace < queue.length) {
      // Increment initialState's trace value to move to next question
      dispatch(moveToNextQuestion())
      // Push answer
      dispatch(pushingAnswer(check))
    }
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
    console.log(check)
    setChecked(check)
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quizz Application</h1>

      <Questions onChecked={onChecked} />

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
