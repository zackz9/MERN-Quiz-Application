import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Call Custom hook
import { useFetchQuestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/setNatija'

export default function Questions({ onChecked }) {
  
  const [checked, setChecked] = useState(undefined)
  const { trace } = useSelector((state) => state.questions)
  const result = useSelector((state) => state.result.result)

  //Destruct values of array
  const [{ isLoading, apiData, serverError }, setGetData] = useFetchQuestion()
  
  const questions = useSelector((state) => state.questions.queue[state.questions.trace])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateResult({ trace, checked }))
  }, [checked, trace, dispatch])

  function onSelect(i) {
    onChecked(i)
    setChecked(i)
    dispatch(updateResult({ trace, checked }))

  }

  if (isLoading) return <h2 className='text-light'>isLoading</h2>
  if (serverError)
    return <h2 className='text-light'>{serverError || "Unknown error"}</h2>

  return (
    <div className='questions'>
      <h2 className='text-light'>{questions?.question}</h2>

      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type='radio'
              value={false}
              name='options'
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />
            <label className='text-primary' htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div
              className={`check ${result[trace] === i ? 'checked' : ''}`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  )
}
