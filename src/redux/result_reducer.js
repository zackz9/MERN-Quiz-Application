import {createSlice } from '@reduxjs/toolkit'
export const resultReducer = createSlice({
    name: 'result',
    initialState: {
        userId: null,
        result: []
    },
    reducers: {
        setUserId:  (state, action) => {
            state.userId = action.payload
        },
        pushingResultAction: (state, action) => {
            state.result.push(action.payload)
        },
        resetResultAction : () => {
            return {
                userId: null,
                result: []
            }
        },
        updateResultAction: (state, action) => {
            const { trace, checked } = action.payload
            state.result.fill(checked, trace, trace +1)
        }

    }
})

export const {setUserId, pushingResultAction, updateResultAction, resetResultAction } = resultReducer.actions

export default resultReducer.reducer