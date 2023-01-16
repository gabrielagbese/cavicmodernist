import React from 'react'
import gsap from 'gsap';

export default function SpacesBottom() {
  return (
    <div className='section-long-spaces-bottom spaces-bottom'>
      <div className='spaces-bottom-main'>
        <button onClick={raiseSubStage}>raise</button>
        <div className='space-thumb-container'>gallery</div>
        <div className='space-thumb-container'>dedicated desk space</div>
        <div className='space-thumb-container'>conference room</div>
        <div className='space-thumb-container'>training space</div>
        <div className='space-thumb-container'>studio space</div>
        <div className='space-thumb-container'>private office</div>
        <div className='space-thumb-container'>co-working space</div>
        <div className='space-thumb-container'>chill zone</div>
      </div>
      <div className='spaces-bottom-sub'>
        <button onClick={lowerSubStage}>close x</button>
      </div>
    </div>
  )

  function raiseSubStage(a){
    let rss = gsap.timeline();
    let ssl = document.querySelector(".spaces-bottom-sub")
  
    rss.to(".spaces-bottom-sub", {duration: 1, yPercent: -100,display: "block"})
    console.log(ssl)
  }
  function lowerSubStage(a){
    let rss = gsap.timeline();
    let ssl = document.querySelector(".spaces-bottom-sub")
  
    rss.to(".spaces-bottom-sub", {duration: 1, yPercent: 100,display: "none"})
    console.log(ssl)
  }
}
