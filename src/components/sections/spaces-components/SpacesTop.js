import React from 'react'
import LocalScroller from '../hero-components/LocalScroller'

export default function SpacesTop() {
  return (
    <div className='section spaces-top'>
      <div className='spaces-top-container'>
        <div className='hidden-scroller'>
          <LocalScroller direction={"33.3%"} uniqueId="spaces-first"/>
        </div>
        <LocalScroller direction={"-33.3%"} uniqueId="spaces-second"/>
      </div>
    </div>
  )
}
