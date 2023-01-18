import React from 'react'
import gsap from 'gsap';

export default function Nav(props) {
  return (
    <div className='nav-container'>
      <div className='nav'>
        <button onClick={props.subfn}>menu</button>
      </div>
      <div className='menu'></div>
    </div>
  )

  
}
