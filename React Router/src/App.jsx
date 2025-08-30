import React from 'react'
import Navbar from './Components/Navbar';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import ReactLayout from './layout/ReactLayout';
import './index.css'
import ContactLayout from './layout/ContactLayout';
import ContactInfo from './Components/ContactInfo';
import ContactForm from './Components/ContactForm';
import PageNotFiend from './Components/PageNotFiend';
import JobsLayout from './layout/JobsLayout';
import Jobs, { JobLoader } from './pages/Jobs';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<ReactLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<ContactLayout/>}>
        <Route path='info' element={<ContactInfo/>}/>
        <Route path='form' element={<ContactForm/>}/>
        </Route>
        <Route path='jobs' element={<JobsLayout/>}>
        <Route index element={<Jobs/>} loader={JobLoader}/>
        </Route>
        <Route path='*' element={<PageNotFiend/>}/>
      </Route>
    )
  )
  return (
    <div>
      {/* <Navbar />
      <div className='container'>
        <Routes>
        </Routes>
      </div> */}
      <RouterProvider router={router}/>
    </div>
  )
}

export default App