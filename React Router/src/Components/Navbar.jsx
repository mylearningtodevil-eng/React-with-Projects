import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink , useNavigate} from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate();
  return (
    // The difference between Link and NavLink is that NavLink provides some more features like which one is active
    // Some times we have to navigate to a certain page whenever a button is clicked or whenever a state is used for this purpose we have useNavigate hook
    <div className='navbar'>
        <img src="/img.jpg" alt="image" />
        <ul>
            <NavLink to='/'>
              <li>Home</li>
            </NavLink>
            <NavLink to='/product'>
              <li>Product</li>
            </NavLink>
            <NavLink to='/about'>
              <li>About</li>
            </NavLink>       
            <NavLink to='/contact'>
              <li>Contact</li>
            </NavLink>
            <NavLink to='/jobs'>
              <li>Jobs</li>
            </NavLink>
            </ul>
            {/* // Google saves our history whenever we move from one page toa another page but we can remove this by using useNavigate hook after providing the path provide provide replace: true */}
        <button onClick={()=>navigate('/contact',{replace: true})}>Get Started</button>
    </div>
  )
}

export default Navbar