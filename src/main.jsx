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
import FoodRequest from './Pages/FoodRequest/FoodRequest';
import SingleFood from './Pages/AvailableFood/4-AvailabFood/SingleFood';
import ManageButton from './Pages/ManageFood/ManageButton/ManageButton';
import ManageFoods from './Pages/ManageFood/ManageFoods';
import Button from './Pages/ManageFood/Button/Button';
import PrivateRoute from './PrivateRoute/PrivateRoute';






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
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>,
      },
      {
        path: '/managefood',
        element:<ManageFoods></ManageFoods>,
      
      },
    
      
      {
        path: '/managebutton/:id',
        element: <PrivateRoute><ManageButton></ManageButton></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/onefood/${params.id}`)
       
      },
      {
        path: '/button/:id',
        element: <Button></Button>,
        loader: () => fetch('http://localhost:5000/requestfood'),
       

      },

      {
        path: '/foodrequest',
        element: <PrivateRoute><FoodRequest></FoodRequest></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/requestfood'),
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
