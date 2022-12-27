import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {useAuthStatus} from '../hooks/useAuthStatus'

export default function PrivateRoute() {
    const [loggedIn, checkStatus] = useAuthStatus()

    if (checkStatus) {
        return <h3>Loading...</h3>
    }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
}