import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import NoteContext from '../noteContext'
import PropTypes from 'prop-types';

function deleteNoteRequest(noteId, callback) {
  fetch(`http://localhost:9090/notes/${noteId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (!response.ok) {
        return response.json().then(error => {
          throw error
        })
      }
      return response.json()
    })
    .then(data => {
      callback(noteId)
    })
    .catch(error => {
      console.error(error)
    })
}

class Note extends Component {
  static defaultProps = this.props
  static contextType = NoteContext
  render() {
    const date = (!this.props.modifiedDate) ? '' : format(new Date(this.props.modifiedDate), 'MMM dd yyyy')
    return (
      <li>
        <div className="note-box">
          <Link to={`/note/${this.props.id}`}><h2>{this.props.name}</h2></Link>
          <p>Date modified {date}</p>
          <button
            type="button"
            onClick={() => {
              deleteNoteRequest(this.props.id, this.context.deleteNote)
            }}>
            Delete Note
                </button>
        </div>
      </li>
    )
  }
}

export default Note;

Note.propTypes = {
  modifiedDate: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
}