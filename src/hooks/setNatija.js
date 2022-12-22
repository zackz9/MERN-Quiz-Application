import * as Action from '../redux/result_reducer'

export const pushingAnswer = (result) => async (dispatch) => {

    try {
        await dispatch(Action.pushingResultAction(result))
    } catch (error) {
        console.log(error)
    }
}