import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import OAuth from '../components/OAuth';
import img_key from '../images/maria-ziegler-jJnZg7vBfMs-unsplash.jpg';


export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
     
    setEmail(e.target.value);

  }
  async function onSubmit(e) {

    e.preventDefault();

    try {

      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success("Email was Sent")
      
    } catch (error) {

      toast.error("Error Resetting Password")
      
    }

  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className=' md:w-[57%] lg:w-[50%] mb-12 md:mb-6'> 
         <img src={img_key} alt="key"  className='w-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'> 
          <form onSubmit={onSubmit} className='space-y-6 mb-6'> 
            <input type="email" id='email' value={email} className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'  placeholder='Email Address' onChange={onChange} />
            
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p> 
                Don't have account?               
                <Link to="/sign-up" className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'>Register</Link>
              </p>
              <p>
                <Link to="/sign-in" className='text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out' >Sign In</Link>
              </p>
            </div>   
            <button type="submit" className='w-full bg-blue-600 text-white px-7 py-3 font-medium text-sm uppercase rounded shadow-sm hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'>Send Reset Email</button>
            <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div> 
            <OAuth />        
          </form>
         
        </div>
      </div>
    </section>

  )
}
