import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
  const error = useRouteError();
  return (
    <div>
        <h4 className='text-3xl font-bold'>There was an error: {error.message}</h4>   
    </div>
  )
}

export default ErrorElement
