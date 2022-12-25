import React from 'react'
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import img_key from '../images/maria-ziegler-jJnZg7vBfMs-unsplash.jpg';


export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState( {name:"", email: "", password: ""} );
  const {name, email, password} = formData;

  function onChange(e) {
     
    setFormData(
       (prevState) => ( { ...prevState, [e.target.id]: e.target.value } )
    );

  }

  function onSubmit(e) {
    e.preventDefault();
  }


  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign Up</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className=' md:w-[57%] lg:w-[50%] mb-12 md:mb-6'> 
         <img src={img_key} alt="key"  className='w-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'> 
          <form className='space-y-6 mb-6' onSubmit={onSubmit}> 
            <input type="name" id='name' value={name} className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'  placeholder='Full Name' onChange={onChange} />
            <input type="email" id='email' value={email} className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'  placeholder='Email Address' onChange={onChange} />
            <div className='relative'>
              <input type={showPassword ? "text" : "password"} id='password' value={password} className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' placeholder='Password' onChange={onChange}  />
              {showPassword ? (<AiFillEyeInvisible className='absolute right-3 top-4 cursor-pointer' onClick={ ()=>setShowPassword( (prevState)=>!prevState ) } />) : (<AiFillEye className='absolute right-3 top-4 cursor-pointer' onClick={ ()=>setShowPassword( (prevState)=>!prevState ) } />)  }
            </div>
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p> 
               Have an account?                
                <Link to="/sign-in" className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'>Sign In</Link>
              </p>
              <p>
                <Link to="/forgot-password" className='text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out' >Forgot Password?</Link>
              </p>
            </div>   
            <button type="submit" className='w-full bg-blue-600 text-white px-7 py-3 font-medium text-sm uppercase rounded shadow-sm hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'>Sign Up</button>
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
