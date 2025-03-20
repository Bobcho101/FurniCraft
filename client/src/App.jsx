import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import NotFound from './components/not-found/NotFound'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Contacts from './components/contacts/Contacts'
import About from './components/about/About'
import Catalog from './components/catalog/Catalog'
import Create from './components/create/Create'

function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path='/register' element={<Register />} />
        <Route path='/sell-furniture' element={<Create />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} /> 
    </Routes>
    </>
  )
}

export default App
