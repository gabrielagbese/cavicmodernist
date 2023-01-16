import React from 'react'
import gsap from 'gsap';

export default function EventsBottom() {



  return (
    <div className='section events-bottom'>
      <div className='events-bottom-main'>
        <button onClick={raiseSubStage}>raise!</button>
      </div>
      <div className='events-bottom-sub'>
      <button onClick={lowerSubStage}>close x</button>
      </div>
    </div>
  )

  function raiseSubStage(a){
    let rss = gsap.timeline();
    let ssl = document.querySelector(".events-bottom-sub")
  
    rss.to(".events-bottom-sub", {duration: 1, yPercent: -100,display: "block"})
    console.log(ssl)
  }
  function lowerSubStage(a){
    let rss = gsap.timeline();
    let ssl = document.querySelector(".events-bottom-sub")
  
    rss.to(".events-bottom-sub", {duration: 1, yPercent: 100,display: "none"})
    console.log(ssl)
  }
}
