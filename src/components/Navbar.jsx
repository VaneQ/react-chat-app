import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'
import { LogOut } from './LogOut'
import { Signin } from './Signin'

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`
}

export const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat App</h1> 
      { !!user  ? <LogOut/> : <Signin/>  } 
    </div>
  )
}
