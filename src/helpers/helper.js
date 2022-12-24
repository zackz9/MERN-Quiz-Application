import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'


// Calculate only when user choose answers 
export function attempts_number(result) {
    return result.filter(r => r !== undefined).length;
}

export function earnPoints_number(result, answers, point) {

    return result.map((elem, index) => answers[index] === elem ).filter(index => index).map(index => point).reduce((prev, curr) => prev + curr, 0);
}

export function flagResult(totalPoints, earnPoints) {
    return (totalPoints * 50 / 100) < earnPoints
}


/** Checking for user authenticate  */
export function CheckUserExist({ children }){
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}

