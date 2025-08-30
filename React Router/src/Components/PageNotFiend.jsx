import React from 'react'
import { useNavigate } from 'react-router-dom'
function PageNotFiend() {
  const navigate = useNavigate();
  return (
    <div>
      <div><h1>404 - Page Not Found</h1></div>
      <button onClick={()=>navigate('/')}>Go To Home</button>
    </div>
  )
}

export default PageNotFiend