import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
import '../styles/Main.css'
export default function Main() {

  const inputRef = useRef(null)
  const dispatch = useDispatch()

  function startQuizz() {
      if(inputRef.current?.value) {
        dispatch(setUserId(inputRef.current?.value))
      }
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quizz App</h1>

      <ol>
        <li>You will be asked 10 questions one after another</li>
        <li>10 points is awarded for every correct answer</li>
        <li>
          Each question had three options, and you can only choose one of them
        </li>
        <li>You can review and change answers before the quizz finish</li>
        <li>
          Your result will be displayed after the end of quizz, Good Luck !
        </li>
      </ol>

      <form id='form'>
        <input ref={inputRef} type='text' placeholder='Username' className='userid'></input>
      </form>

      <div className='start'>
        <Link className='btn' to={'quizz'} onClick={startQuizz}>
          Start Quizz
        </Link>
      </div>
    </div>
  )
}
