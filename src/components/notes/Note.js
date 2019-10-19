import React from 'react'
import Notes from './Notes'
import { Link } from 'react-router-dom'

const Note = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <Link to={'/project/' + project.id} key={project.id}>
            <Notes project={project} />
          </Link>
        )
      })}  
    </div>
  )
}

export default Note
