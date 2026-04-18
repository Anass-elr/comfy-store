import React from 'react'
import { useRouteError,  } from 'react-router-dom'

const ErrorComponent = () => {
  const error = useRouteError();
  console.error(error);

  if(error.status === 404) {
    return (
      <main className='grid min-h-100vh place-items-center px-8'>
        <h4 className='text-center font-bold text-4xl'>
          Page Not Found
        </h4>
      </main>
    )
  }

  return (
    <main className='grid min-h-100vh place-items-center px-8'>
      <h4 className='text-center font-bold text-4xl'>
        Something went wrong!
      </h4>
    </main>
  )
}

export default ErrorComponent
