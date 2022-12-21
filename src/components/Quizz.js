import React from 'react'
import Questions from './Questions'

export default function Quizz() {
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
