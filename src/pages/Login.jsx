import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link } from 'react-router-dom'

const Login = () => {

  return (
    <section className="h-screen grid place-items-center">
      <Form method="post" className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-4'>
        <FormInput label="Email" name="identifier" type="email"  />
        <FormInput label="Password" name="password" type="password" />
        <div className="mt-4 flex flex-col gap-2">
            <SubmitBtn text="Login" />
            <button type="button" className="btn btn-secondary">GUEST USER</button>
            <p className='text-sm text-center'>
              Don't have an account? 
              <Link to="/register" className='link link-hover ml-2 link-primary capitalize'>Register</Link>
            </p>
        </div>


      </Form>
    </section>
  )
}

export default Login

