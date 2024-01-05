import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import NewRegistration from './NewRegistration';
import Contact_us from './Contact_us'
import Customer_Home from './Customer_Home';
import Profile from './Profile';
import Customer_Login from './Customer_Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/Customer_home",
    element: <Customer_Home />,
  },
  {
    path: "/NewRegistration",
    element: <NewRegistration />,
  },
  {
    path: "/Contact_us",
    element: <Contact_us/>,
  },
  {
    path: "/Profile",
    element: <Profile/>,
  },
  {
    path: "/Customer_Login",
    element: <Customer_Login/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

