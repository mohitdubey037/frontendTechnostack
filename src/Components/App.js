import { Provider } from 'react-redux';
import { Main } from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CheckUserExist } from '../helper/helper';
import '../styles/App.css';

/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz',
    element : <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
