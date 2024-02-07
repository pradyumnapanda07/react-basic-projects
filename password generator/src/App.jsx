import { useState  , useCallback} from 'react'




function App() {
  const [ length, setLength] = useState(8) 
  const [ numberAllowed , setNumberAllowed] = useState
  (false);
  const[ charAllowed , setcharAllowed]= useState(false)
  const[password , setPassword] = useState("")
   const passwordGenerator = useCallback [( ) => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxzy"
    if (numberAllowed) str +="0123456789"
    if(charAllowed) str+= "0123456789" 
    for ( let  i = 1; i<= array.length; i++) {
      let char = math.floor(math.random () * str.length +1 )
      pass = str.charAt(char)
      
    }
    setPassword(pass)

   }, [length, numberAllowed, charAllowed , setPassword]]



  return ( 
   <div  className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600  bg-gray-800">
    
    
    <h1 className=' text-white text-center my-3 mx-10 '>Password Generator
      </h1>
      
  
  <div className='"flex- shadow rounded-lg overflow-hidden mb-4" '>

    <input type="text"  
    value ={ password}
    className='outline-none w-full py-1m px-3 '
    placeholder='password'
    readOnly
    />

    <button className=' otline-none  bg-blue-700 text-white px-3 py-0.5 shrink-0 '>copy </button>
  </div>
 <div  className='flex test-sm gap-x-2'></div>
 <div className='flex items -centre gap-x-1'>
  <input 
  type="range"
  min={6}
  max={100}
  value= {length}
  className='cursor-pointer'
  onChange={(e) => {setLength(e.target.value)}}

   />
   <label > Length :{length}</label>

   
 <div className=" flex items-centre gap-x-1">

  
 </div>


 </div>
  </div>
  
  
  )
}

export default App
