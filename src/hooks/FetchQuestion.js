// Fetch questions hook to fetch api data and setting value to the store

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import data, { answers } from '../database/data'

// Actions
import * as Action from '../redux/question_reducer'

export const useFetchQuestion = () => {
  const dispatch = useDispatch()
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  })

  useEffect(() => {
    setGetData(prev => ({ ...prev, isLoading: true }));
    (
      // Async func to fetch data
      async () => {
        try {
          let question = await data

          if (question.length > 0) {
            setGetData((prev) => ({ ...prev, isLoading: false }));
            setGetData((prev) => ({ ...prev, apiData: { question, answers } }));

            // Dispatch action Call

            dispatch(Action.startExamAction({ question, answers }))


          } else {
            throw new Error('No question available !')
          }
        } catch (error) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, serverError: error }));
        }
      })()
  }, [dispatch])

  return [getData, setGetData]
}


// MoveToNext action Disptach func
export const moveToNextQuestion = () => async (dispatch) => {
  try {

    dispatch(Action.moveToNextAction())

  } catch (error) {
    console.log(error)
  }
}
// MoveToPrev action Disptach func
export const moveToPrevQuestion = () => async (dispatch) => {
  try {

    dispatch(Action.moveToPrevAction())

  } catch (error) {
    console.log(error)
  }
}