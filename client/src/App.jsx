import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import NotFound from './components/not-found/NotFound'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Contacts from './components/contacts/Contacts'

function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} /> 
    </Routes>
    </>
  )
}

export default App
