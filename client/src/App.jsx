import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import NotFound from './components/not-found/NotFound'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Contacts from './components/contacts/Contacts'
import About from './components/about/About'
import Create from './components/create/Create'
import UserProvider from './providers/userProvider'
import Logout from './components/logout/Logout'
import Catalog  from './components/catalog/Catalog'
import Details from './components/details/Details'
import Profile from './components/profile/Profile'
import Order from './components/order/Order'

function App() {

  return (
    <>
    <UserProvider>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='profile' element={<Profile />} />
            <Route path="/catalog/:page" element={<Catalog />} />
            {/* /:itemId */}
            <Route path='/catalog/order' element={<Order />} />
            <Route path='/catalog/:itemId/details' element={<Details />} />
            <Route path='/sell-furniture' element={<Create />} />
            <Route path='/about' element={<About />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='*' element={<NotFound />} /> 
        </Routes>
    </UserProvider>
    </>
  )
}

export default App
