import Signup from './components/Signup';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import { useEffect, useState } from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import io from 'socket.io-client'


const router = createBrowserRouter([
  {
  path:"/",
  element: <HomePage/>
},
{
  path:"/register",
  element: <Signup/>
},
{
  path:"/login",
  element: <Login/>
}
]);
function App() {
   
  return (
    <div className="App p-4 h-screen flex items-center justify-center">
      
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
