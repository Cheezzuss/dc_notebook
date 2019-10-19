import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">  <i class="medium material-icons">face</i></span>
          <ul className="online-users">
            { notifications && notifications.map(item =>{
              return <li key={item.id}>
                <span className="black-text">{item.user}- </span>
                <span>{item.content}</span>
                <div className="note-date blue-text">{moment(item.time.toDate()).fromNow()}</div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
