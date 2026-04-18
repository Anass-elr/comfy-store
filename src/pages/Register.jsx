import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link } from 'react-router-dom'


const Register = () => {
  return (
     <section className="h-screen grid place-items-center">
          <Form method="post" className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
            <FormInput label="username" name="username" type="text"  />
            <FormInput label="Email" name="identifier" type="email"  />
            <FormInput label="Password" name="password" type="password" />
            <FormInput label="Confirm Password" name="confirmPassword" type="password" />
            <FormInput label="Phone" name="phone" type="tel" />
            <FormInput label="Address" name="address" type="text" />
            <FormInput label="Country" name="country" type="text" />

            <div className="mt-4 flex flex-col gap-2">
                <SubmitBtn text="Register" />
                
                <p className='text-sm text-center'>
                  Want to login?
                  <Link to="/login" className='link link-hover ml-2 link-primary capitalize'>Login</Link>
                </p>
            </div>

          </Form>
    </section>
  )
}

export default Register
