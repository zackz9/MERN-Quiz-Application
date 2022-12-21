import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Result.css'
import ResultTable from './ResultTable';

export default function Result() {

    function onRestart() {
            console.log('Restart');
    }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quizz Application</h1>

      <div className='result flex-center'>
            <div className='flex'>
                <span>Username</span>
                <span className='bold'>Zackaria</span>
            </div>
            <div className='flex'>
                <span>Total Quizz points: </span>
                <span className='bold'>50</span>
            </div>
            <div className='flex'>
                <span>Total Questions: </span>
                <span className='bold'>05</span>
            </div>
            <div className='flex'>
                <span>Total Attempts: </span>
                <span className='bold'>04</span>
            </div>
            <div className='flex'>
                <span>Total Earn Points: </span>
                <span className='bold'>50</span>
            </div>
            <div className='flex'>
                <span>Quizz Result: </span>
                <span className='bold'>Passed</span>
            </div>
      </div>

      <div className='start'>
        <Link className='btn' to={'/'} onClick={onRestart()}>Restart</Link>
      </div>

      <div className='container'>
        {/* Result table  */}
            <ResultTable/>
      </div>
    </div>
  )
}
