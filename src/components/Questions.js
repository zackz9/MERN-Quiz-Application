import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import data from '../database/data'
// Call Custom hook
import { useFetchQuestion } from '../hooks/FetchQuestion'

export default function Questions() {
  const [checked, setChecked] = useState(undefined)
  //Destruct values of array
  const [{ isLoading, apiData, serverError }, setGetData] = useFetchQuestion()

  const question = data[0]

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  )

  const trace = useSelector(state => state.questions.trace)

  useEffect(() => {
    console.log(questions)
  })

  function onSelect() {
    // console.log('onSelect Radio')
  }

  if (isLoading) return <h2 className='text-light'>isLoading</h2>
  if (serverError)
    return <h2 className='text-light'>serverError || "Unknown error"</h2>

  return (
    <div className='questions'>
      <h2 className='text-light'>{question.question}</h2>

      <ul key={question.id}>
        {question.options.map((q, i) => (
          <li key={i}>
            <input
              type='radio'
              value={false}
              name='options'
              id={`q${i}-option`}
              onChange={onSelect()}
            />
            <label className='text-primary' htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className='check'></div>
          </li>
        ))}
      </ul>
    </div>
  )
}
