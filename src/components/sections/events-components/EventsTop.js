import React from 'react'
import LocalScroller from '../hero-components/LocalScroller'

export default function EventsTop() {
  return (
    <div className='section events-top'>
      <div className='events-top-container'>
        <div className='hidden-scroller'>
          <LocalScroller direction={"33.3%"} uniqueId="events-first"/>
        </div>
        <LocalScroller direction={"-33.3%"} uniqueId="events-second"/>
      </div>
    </div>
  )
}
