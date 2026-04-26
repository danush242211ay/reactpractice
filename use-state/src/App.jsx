import { IndentDecrease } from 'lucide-react';
import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(20)

  function increase(){
    setNum(num+1);
  }
  function decrease(){
    setNum(num-1);
  }
  
  return (
    <div>
      <h1>Value of num is {num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>

      <h1></h1>
    </div>
  )
}

export default App