import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import NotFound from './components/not-found/NotFound'
import Login from './components/login/Login'

function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} /> 
    </Routes>
    </>
  )
}

export default App
