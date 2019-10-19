import React from 'react'
import moment from 'moment'

const Notes = ({project}) => {
  return (
    <div className=" card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="blue-text card-title ">{project.title}</span>
        <p className="">By {project.authorFirstName} {project.authorLastName}</p>
        <p className="">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default Notes
