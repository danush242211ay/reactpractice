import { IndentDecrease } from 'lucide-react';
import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState([10,20,30])

  function add(){
    const newNum=[...num]
    newNum.push(90)

    setNum(newNum)
  }
  
  return (
    <div>
      <h1>Value of num is {num}</h1>
      <button onClick={add}>Increase</button>
    </div>
  )
}

export default App