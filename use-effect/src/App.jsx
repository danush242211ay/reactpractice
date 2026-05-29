import React, { useEffect } from 'react'
import { useState } from 'react'
const App = () => {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)
  useEffect(function(){
    console.log('useeffect is running')
  },[num])
  return (
    <div>
      <h1>{num}</h1>
      <h2>{num2}</h2>
      <button onMouseEnter={()=>setNum(num+1)}
              onDoubleClick={()=>setNum2(num2+10)}
      >add</button>
    </div>
  )
}

export default App