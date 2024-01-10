import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Main from './pages/Main'
import Register from './pages/Register'
import Login from './pages/Login'
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from './context/AuthContext'
import ContactUs from './pages/ContactUs'

function App() {

  const { currentUser } = useAuthContext();

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='contact-us' element={<ContactUs />} />
        </Route>
        <Route path='/register' element={!currentUser ? <Register /> : <Navigate to="/" />} />
        <Route path='/login' element={!currentUser ? <Login />: <Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
