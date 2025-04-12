import Testone from './components/test'
import Aboutsec from './components/about.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const pername = 'sai test test';
  const number = '12435678';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Testone/>
  },
  {
    path: '/about',
    element: <Aboutsec testpername={pername} testnum={number}/>
  }
]);



  return(
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App
