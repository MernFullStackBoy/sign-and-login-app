import "./App.css"
import React, { useEffect, useState } from 'react'
import { BrowserRouter } from "react-router-dom"
import RouteElement from './components/route/Route'
import "./firebase/config"
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"

const App = () => {

  let auth = getAuth()

  const [isLogin, setIsLogin] = useState(false)


  useEffect(() => {
    let findOut = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true)
      } else {
        setIsLogin(false)
      }
    })
    return findOut
  }, [auth])


  function deleteAccount() {
    signOut(getAuth()).then(() => alert("Account has been removed"))
      .catch(() => alert("Something went wrong"))
  }

  return (
    <div>
      <BrowserRouter>
        {!isLogin && <RouteElement />}
        {isLogin && <button onClick={deleteAccount} className=' w-[100%] h-[50px] bg-blue-700 text-[white] font-bold text-[180x] border-none rounded-[10px] mt-6 hover:bg-blue-900 cursor-pointer '>Logout</button>}
      </BrowserRouter>
    </div>
  )
}

export default App