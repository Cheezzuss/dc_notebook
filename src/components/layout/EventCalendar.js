import React,{ Component } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import { compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { firestoreConnect } from 'react-redux-firebase'



const  EventCalendar =({})=>{

    return (
          <div className='cal grey lighten-5 z-depth-5'>
          
          <FullCalendar 
            dateClick={this.handleDateClick} plugins={[ dayGridPlugin, interactionPlugin ]}
            defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} 
            weekdays={false}
            events={[
                { title: 'Start Project', date: '2019-10-05' },
                { title: 'Meeting', date: '2019-10-08' },
                { title: 'Final Meeting', date: '2019-10-17' },
                { title: 'Today Present', date: '2019-10-19' },
                { title: 'hello', date: '2019-10-19' },
                { title: 'Meeting', date: '2019-10-19' },
                { title: 'Conference', date: '2019-10-19' }
              ]}

          />
          </div>
        )
      
}


export default (EventCalendar)
  