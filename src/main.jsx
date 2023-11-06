import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Error from './ErrorElement/Error';
import Home from './Home/Home';
import Login from './Login/Login';
import Registration from './Login/Registration'
import AuthProvider from './Providers.jsx/AuthProvider';
import AvailableFoods from './Pages/AvailableFood/AvailableFoods';
import AddFood from './Pages/AddFood';
import ManageFoods from './Pages/ManageFoods';
import FoodRequest from './Pages/FoodRequest';
import SingleFood from './Pages/AvailableFood/4-AvailabFood/SingleFood';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/singlefood/:id',
        element: <SingleFood></SingleFood>,
        loader: ({ params }) => fetch(`http://localhost:5000/onefood/${params.id}`)
      
      }, 
      {
        path: '/availablfoods',
        element: <AvailableFoods></AvailableFoods>,
        loader: () => fetch('http://localhost:5000/allfood'),
      },
      {
        path: '/addfood',
        element: <AddFood></AddFood>,
      },
      {
        path: '/managefood',
        element:<ManageFoods></ManageFoods>,
      },
      {
        path: '/foodrequest',
        element: <FoodRequest></FoodRequest>,
      }, 
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/registration',
        element: <Registration></Registration>,
      },
  
    ]
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/registration',
    element: <Registration></Registration>,
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
