import React from 'react'
import EventsTop from './events-components/EventsTop'
import EventsBottom from './events-components/EventsBottom'

export default function Events() {
  return (
    <div className='events'>
        <EventsTop />
        <EventsBottom/>
    </div>
  )
}
