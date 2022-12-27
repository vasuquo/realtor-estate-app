import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { db } from '../firebase'

export default function OAuth() {

  const navigate = useNavigate()
  
  async function onGoogleClick() {

    try {

      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      // Check if user exist
      const docRef = doc(db, "users", user.uid)
      const docSnap = await getDoc(docRef)

      if ( !!docSnap) {
        await setDoc(docRef, {name: user.displayName, email: user.email, timestamp: serverTimestamp() } );
      }

      navigate("/")

      
    } catch (error) {
      toast.error("Failed to authenticate with Google")
    }

  }
  return (    
    <button type='button' onClick={onGoogleClick} className='flex items-center justify-center w-full text-white bg-red-500 py-3 px-7 font-medium text-sm rounded shadow-sm hover:bg-red-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-800 uppercase'>
        <FcGoogle className='text-2xl bg-white rounded-full mr-2'  />
        Continue with Google
    </button>
  )
}
