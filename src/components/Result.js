import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import '../styles/Result.css'
import ResultTable from './ResultTable';
// Call Reset actions 
import { resetQuestionsAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { attempts_number, earnPoints_number, flagResult } from '../helpers/helper';
import { insertUserResult } from '../hooks/setNatija';


export default function Result() {

    const dispatch = useDispatch()

    const { questions: {queue, answers}, result: {result, userId}} = useSelector(state => state)


    // useEffect(() => {
    //   console.log(flag)
    // })
    
    const totalPoints = queue.length * 10;
    const attempts = attempts_number(result)
    const earnPoints = earnPoints_number(result, answers, 10)
    const flag = flagResult(totalPoints, earnPoints)

    // Insert user result 
    insertUserResult({result, username: userId, attempts, points: earnPoints, achieved: flag ? 'Passed' : 'Failed'})
    
    function onRestart() {
        dispatch(resetQuestionsAction());
        dispatch(resetResultAction());
    }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quizz Application</h1>

      <div className='result flex-center'>
            <div className='flex'>
                <span>Username</span>
                <span className='bold'>{userId || ""}</span>
            </div>
            <div className='flex'>
                <span>Total Quizz points: </span>
                <span className='bold'>{totalPoints || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Questions: </span>
                <span className='bold'>{ queue.length || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Attempts: </span>
                <span className='bold'>{attempts || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Earn Points: </span>
                <span className='bold'>{earnPoints || 0}</span>
            </div>
            <div className='flex'>
                <span>Quizz Result: </span>
                <span style={{color:`${flag ? 'green' : 'red'}`}} className='bold'>{flag ? 'Passed' : 'Failed'}</span>
            </div>
      </div>

      <div className='start'>
        <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
      </div>

      <div className='container'>
        {/* Result table  */}
            <ResultTable/>
      </div>
    </div>
  )
}
