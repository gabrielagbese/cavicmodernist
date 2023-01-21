import React from 'react'
import { useEffect, useState } from 'react'
import Scroller from './hero-components/Scroller';
import LocalScroller from './hero-components/LocalScroller';


export default function Hero() {

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(defaultDark);
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className='section-long hero'>
      <div className='hidden-scroller'>
        <LocalScroller direction={"-33.3%"} uniqueId="first" className="scrolltray"/>
      </div>
      <LocalScroller direction={"33.3%"} uniqueId="second" className="scrolltray"/>
      <LocalScroller direction={"-33.3%"} uniqueId="third" className="scrolltray"/>
      <div className='hero-main'>

        <div className='hero-top'>
          <div className='hero-top-nav'>
            <p>CAVIC</p>
            <button onClick={() => switchTheme()}>theme</button>
          </div>
        </div>
      
        <div className='hero-bottom'>
          <p className='hero-lg-text'>Creative Arts & Visual Imagery Centre</p>
        </div>
      
      </div>
    </div>
  )
}
