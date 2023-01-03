import React from 'react'
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, updateProfile } from 'firebase/auth'
import { toast } from 'react-toastify'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

export default function Profile() {
  const auth = getAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState( { name: auth.currentUser.displayName, email: auth.currentUser.email } )
  const [changeDetail, setChangeDetail] = useState(false)
  const {name, email} = formData

  function onLogOut() {
     auth.signOut()
     navigate("/")
  }

  function onChange(e) {
      setFormData( (prevState) => ({...prevState, [e.target.id]: e.target.value })   )
  }

 async function onSubmit() {

    try {

      if (auth.currentUser.displayName !== name) {
        await updateProfile( auth.currentUser, {displayName: name} )
      }

      const docRef = doc(db, "users", auth.currentUser.uid)
      await updateDoc(docRef, { name })

      toast.success("Profile details updated");

      
    } catch (error) {

      toast.error("Cannot Update profile details");
      
    }

  }

  return (
    <>

    <section className='max-w-6xl mx-auto flex:justify-center items-center flex-col'>
      <h1 className='text-3xl text-center mt-6 font-bold'>
        My Profile
      </h1>
      <div className='w-full py-3 mt-6 md:w-[50%] lg:mx-auto'>
        <form >
          {/* Name Input */}

          <input type="text" id='name' value={name} disabled={!changeDetail} onChange={onChange} className={ `mb-6 w-full px-6 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail  &&  " bg-red-200  focus:bg-red-200 " } ` } />
          {/* Email Input */}

          <input type="email" id='email' value={email} disabled={!changeDetail} onChange={onChange} className='mb-6 w-full px-6 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out' />
        </form>

        <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
        <p className='flex items-center'>
          Change profile Name?
          <span onClick={ () => { changeDetail && onSubmit();  setChangeDetail(  (prevState) => !prevState  )   }  } className=' text-red-600 px-2 cursor-pointer hover:text-red-700 transition ease-in-out duration-200'>
           { changeDetail ? "Apply Change" : "Edit" }
          </span>
        </p>
        <p onClick={onLogOut} className=' text-blue-600 hover:text-blue-800 cursor-pointer'>Sign out</p>
      </div>

      </div>
      
    </section>

    </>
  )
}
