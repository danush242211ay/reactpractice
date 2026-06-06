import { Route,Routes } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact  from './pages/Contact'
import Product from './pages/Product'
import "./App.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Notfound from './pages/Notfound'
import Men from './pages/Men'
import Women from './pages/Women'
const App = () => {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
        </Route>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App