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
      return {
        ...state,
        queue: action.payload,
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
    }
  },
})

export const { startExamAction, moveToNextAction, moveToPrevAction } = questionReducer.actions

export default questionReducer.reducer
