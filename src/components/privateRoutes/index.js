import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'


export default function PrivateRoute({children}) {
    const { currentUser } = useAuth
  
    if(!currentUser){
      return <Navigate to = "/users/login"/>
    }

    return children;
}