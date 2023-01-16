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
        <LocalScroller direction={"-33.3%"} uniqueId="first"/>
      </div>
      <LocalScroller direction={"33.3%"} uniqueId="second"/>
      <LocalScroller direction={"-33.3%"} uniqueId="third"/>
    </div>
  )
}
