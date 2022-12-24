import '../styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Main'
import Quizz from './Quizz';
import Result from './Result';
import { CheckUserExist } from '../helpers/helper';


// Declare routes 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>
  },
  {
    path: "/quizz",
    element:<CheckUserExist><Quizz>quizz Comp</Quizz></CheckUserExist>
  },
  {
    path: "/result",
    element:<CheckUserExist><Result>result Comp</Result></CheckUserExist>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
