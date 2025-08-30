import React from 'react'
import { useState, useCallback,useEffect,useRef} from 'react'
function Second() {
    const [length,setLength] = useState(8);
    const [numAllowed,setnumAllowed] = useState(false);
    const [charAllowed,setCharAllowed] = useState(false);
    const [password,setPassword] = useState('');
    const copyToClipboard = useCallback(()=>{
        passwordRef.current?.select();
        // passwordRef.current?.setSelectionRange(8,20)
        window.navigator.clipboard.writeText(password)
    },[password])
    const passwordRef = useRef(null);
    const passwordGenerator = useCallback(()=>{
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz';
        if(numAllowed) str+='123456789';
        if(charAllowed) str+='!@#$%^&*()_+=}{[]';
        for(let i=1;i<=length;i++){
            let char = Math.trunc(Math.random()*str.length+1);
            pass += str.charAt(char)
        }
        setPassword(pass)
    },[numAllowed,charAllowed,setPassword,length])
    useEffect(()=>{
        passwordGenerator();
    },[charAllowed,numAllowed,setPassword,length])
  return (
    <>
    <div className='w-full h-screen flex justify-center p-6' style={{background: '#333'}}> 
        <div className='w-xl h-30 rounded-xl bg-green-300 p-2 flex items-center' style={{flexDirection: 'column'}}>
            <h2 className='text-2xl font-bold text-white'>Password Generator</h2>
            <div className='flex'>
                <input type="text"
                value={password}
                placeholder='Password'
                readOnly
                ref={passwordRef}
                className='bg-white my-2 outline-none text-red-500 font-bold'
                />
                <button onClick={copyToClipboard} className='bg-blue-600 w-12 outline-none text-white rounded-xl' style={{fontSize: '1rem'}}>Copy</button>
            </div>
            <div className='flex'>
                <input type="range"
                min={8}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e)=>{
                    setLength(e.target.value)
                }}
                />
                <label style={{fontSize: '1rem', color: 'white'}}>Length: {length}</label>
                <input type="checkbox" 
                defaultChecked={numAllowed}
                id='numberId'
                 className='ml-2'
                onChange={()=>{
                    setnumAllowed((prev)=>!prev)
                }}
                />
                <label htmlFor="numberId"  className='ml-2'>Number</label>
                <input type="checkbox" 
                defaultChecked={charAllowed}
                id='charId'
                className='ml-2'
                onChange={()=>{
                    setCharAllowed((prev)=>!prev)
                }}
                />
                <label htmlFor="charId"  className='ml-2'>Characters</label>
            </div>
        </div>
    </div>
    </>
  )
}

export default Second