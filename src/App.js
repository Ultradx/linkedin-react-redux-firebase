import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'
import './App.css'
import Feed from './components/feed/Feed'
import Header from './components/header/Header'
import Login from './components/login/Login'
import Sidebar from './components/sidebar/Sidebar'
import { auth, onAuthStateChanged } from './firebase'
import { useDispatch } from 'react-redux'
import Widgets from './components/widgets/Widgets'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          }),
        )
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [])
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  )
}

export default App
