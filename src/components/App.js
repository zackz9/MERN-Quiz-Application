import '../styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Main'
import Quizz from './Quizz';
import Result from './Result';

// Declare routes 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>
  },
  {
    path: "/quizz",
    element: <Quizz>quizz Comp</Quizz>
  },
  {
    path: "/result",
    element: <Result>result Comp</Result>
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
