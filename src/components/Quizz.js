import React, { useEffect } from 'react'
import Questions from './Questions'

// Redux store import 
import {useSelector} from 'react-redux'

export default function Quizz() {

    const state = useSelector(state => state)

    useEffect(() => {
        console.log(state);
    })


  // Btns handling
  function onNext() {
    console.log('Next click')
  }
  function onPrev() {
    console.log('Prev click')
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quizz Application</h1>

      <Questions/>

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
