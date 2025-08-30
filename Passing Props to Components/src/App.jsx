import './App.css'
import Card from './Card'
function App() {
  return (
        <div className='w-full h-fit bg-yellow-400 flex p-10 items-center' style={{flexDirection: 'column'}}>
          <Card channelName='Subhan Ali'/>
          <Card channelName='Amjad Javed'/>
        </div>

  )
}

export default App
