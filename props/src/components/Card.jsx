import React from 'react'

export const Card = (props) => {
  return (
    <div className='cards'>
        <img src={props.image}></img>
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellendus mollitia vitae accusamus et libero</p>
        <button>view more</button>
    </div>
  )
}
