import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState('gray')
  return (
    <div className='w-full h-screen bg-amber-200 flex relative items-center p-3' style={{flexDirection: 'column'}}>
      <div className='w-3xl h-96 rounded-xl' style={{background: color}}>
      </div>
        <div className='w-2xl h-25 bg-white fixed bottom-8 rounded-xl flex flex-wrap items-center p-3'>
          <button onClick={()=>setColor('red')} className='p-2 rounded-xl text-white h-15 w-25 ml-11 text-2xl font-bold' style={{background: 'red'}}>Red</button>
          <button onClick={()=>setColor('aqua')} className='p-2 rounded-xl text-white h-15 w-25 ml-3 text-2xl font-bold' style={{background: 'aqua'}}>Aqua</button>
          <button onClick={()=>setColor('purple')} className='p-2 rounded-xl text-white h-15 w-25 ml-3 text-2xl font-bold' style={{background: 'purple'}}>Purple</button>
          <button onClick={()=>setColor('green')} className='p-2 rounded-xl text-white h-15 w-25 ml-3 text-2xl font-bold' style={{background: 'green'}}>Green</button>
          <button onClick={()=>setColor('pink')} className='p-2 rounded-xl text-white h-15 w-25 ml-3 text-2xl font-bold' style={{background: 'pink'}}>Pink</button>
        </div>
    </div>
  )
}

export default App
