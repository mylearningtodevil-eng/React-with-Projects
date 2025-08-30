import { useState, useCallback,useEffect,useRef } from "react"

function App(){
  const [length,useLength] = useState(8);
  const [numberAllowed,useNumberAllowed] = useState(false);
  const [character,useCharacter] = useState(false);
  const [password,usePassword] = useState('');
  const passwordGenerator = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numberAllowed) str+='1234567890';
    if(character) str+='!@#$%^&*+_)(';
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    usePassword(pass);
  },[length,numberAllowed,character,usePassword])
  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,character,numberAllowed,passwordGenerator])
  const passwordRef=useRef(null);
  return(
    <div className="text-center p-3 text-black" style={{width:'100vw',height:'100vh',background:'aqua'}}>
     <div className="w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-500 bg-gray-700 p-4">
      <h1 className="text-white py-2" style={{fontSize:'2rem',fontWeight:'600'}}>Password Generator</h1>
      <div className="flex rounded-lg shadow overflow-hidden mb-4">
        <input 
        value={password}
        type="text" 
        className="outline-none w-full py-1 px-3 bg-white"
        placeholder="Password"
        readOnly
        ref={passwordRef}
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer" onClick={copyToClipboard}>Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" min={4} max={100} value={length} className="cursor-pointer" 
          onChange={(e)=>{useLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1 ">
          <input type="checkbox"  id="numberInput"
          defaultChecked={numberAllowed}
          onChange={()=>{
            useNumberAllowed((prev)=>!prev)
          }}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1 ">
          <input type="checkbox"  id="numberInput"
          defaultChecked={character}
          onChange={()=>{
            useCharacter((prev)=>!prev)
          }}
          />
          <label>Character</label>
        </div>
      </div>
     </div>
    </div>
  )
}
export default App