import axios from 'axios'
import { useState } from 'react'

const App = () => {
  // async function getData(){
  //   const data= await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   console.log(data)
      
  // }
  // const getData = async () =>{
  //   const response= await fetch('https://jsonplaceholder.typicode.com/todos')
  //   const data = await response.json()
  //   console.log(data)
  // }
  // const getData = async () =>{
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    
  //   console.log(response.data)
  // }
  const [data, setData] = useState([])
  const getData = async () =>{
    const response = await axios.get('https://picsum.photos/v2/list')
    
    setData(response.data)
  }
  return (
    <div>
      <button onClick={getData}>api</button>
      {data.map(function(elem,idx){
        return <div className='bg-amber-300 w-full flex'>
          <div>
            <h4 className='font-bold bg-red-600 px-5 pt-2 w-2/3'>{elem.author}</h4>
            <img src={elem.download_url} width='100' height='100'></img>
          </div>
        </div>
      })}
    </div>
  )
}

export default App