import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './components/MainPage.jsx';
import Profile from './components/Profile.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Error from './components/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement:  <Error/>,
    
  },
  {
    path: "/profile",
    element: <Profile/>,
    errorElement: <Error/>
    
  },
  {
    path: "/signup",
    element: <SignUp/>,
    errorElement:  <Error/>,
    
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement:  <Error/>,
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
