import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase/firebase'

const style = {
    button:`bg-gray-200 px-4 py-2 hover:bg-gray-100`
}

const signout = () => {
    signOut(auth);
}

export const LogOut = () => {
  return (
    <button 
        className={style.button}
        onClick={ signout }>
            Logout
    </button>
  )
}
