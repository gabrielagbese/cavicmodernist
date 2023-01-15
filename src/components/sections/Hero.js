import React from 'react'
import { useEffect } from 'react'
import Scroller from './hero-components/Scroller';
import LocalScroller from './hero-components/LocalScroller';


export default function Hero() {

  useEffect(() => {

    

    //end of useEffect
  },);

  return (
    <div className='section-long hero'>
      <div className='hidden-scroller'>
        <LocalScroller />
      </div>
      <LocalScroller />
      <LocalScroller />
    </div>
  )
}
