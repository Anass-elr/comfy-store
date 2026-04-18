import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {  HomeLayout,
            ErrorComponent,
            About, 
            Cart, 
            Checkout, 
            Landing, 
            Login, 
            Orders, 
            Products, 
            Register, 
            SingleProduct
     } from './pages'
import { ErrorElement } from './components'

import { loader as landingLoader } from './pages/Landing'
import { loader as singleProductLoader } from './pages/SingleProduct'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <ErrorComponent />,
        children: [
            {
                index: true,
                element: <Landing />,
                errorElement: <ErrorElement />,
                loader: landingLoader
            },
            {
              path: 'products',
              element: <Products />
            },
            { 
                path: 'products/:id',
                element: <SingleProduct />,
                loader: singleProductLoader
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'checkout',
                element: <Checkout />
            },
            {
                path: 'orders',
                element: <Orders />
            },
        ]
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'register',
        element: <Register />
    }
])

const App = () => {
  return (
      <RouterProvider router={router} />
    )
}

export default App
