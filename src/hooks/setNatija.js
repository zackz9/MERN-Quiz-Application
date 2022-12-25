import { postDataServer } from '../helpers/helper'
import * as Action from '../redux/result_reducer'

export const pushingAnswer = (result) => async (dispatch) => {

    try {
        await dispatch(Action.pushingResultAction(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index))
    } catch (error) {
        console.log(error)
    }
}

export const insertUserResult = (userResult) => {
    const { username, result } = userResult;
    (async () => {
        try {
            if(result !== [] && !username) throw new Error('Error in getting result')
            await postDataServer(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, userResult, data => data)
        } catch (error) {
            console.log(error)
        }
    })()
}