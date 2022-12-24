import { createSlice } from '@reduxjs/toolkit'

export const questionReducer = createSlice({
  name: 'questions',
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    startExamAction: (state, action) => {
      let { question, answers } = action.payload
      return {
        ...state,
        queue: question,
        answers,
      }
    },
    moveToNextAction: (state) => {
        return {
            ...state,
            trace: state.trace + 1
        }
    },
    moveToPrevAction: (state) => {
        return {
            ...state,
            trace: state.trace - 1
        }
    },
    resetQuestionsAction: () => {
      return {
        queue: [],
        answers: [],
        trace: 0,
      }
    }
  },
})

export const { startExamAction, moveToNextAction, moveToPrevAction, resetQuestionsAction } = questionReducer.actions

export default questionReducer.reducer
