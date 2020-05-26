import React, { Component } from 'react'
import NoteContext from '../noteContext'
import { formatISO } from 'date-fns'

class AddNote extends Component {

    static contextType = NoteContext;

    handleSubmit = event => {
        event.preventDefault();
        const { noteName, noteContent, noteFolder } = event.target;
        const time = formatISO(new Date());
        const note = {
            name: noteName.value,
            content: noteContent.value,
            folderId: noteFolder.value,
            modified: time,
        }
        fetch(`http://localhost:9090/notes`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(note)
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
                noteName.value = ''
                noteContent.value = ''
                noteFolder.value = ''
                this.context.handleAddNote(data)
                this.props.history.push(`/note/${data.id}`)
            })
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        return (
            <form className="Noteful-form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label htmlFor="note-name-input">Name</label>
                    <input 
                        type="text"
                        id="noteName"
                        name="noteName"
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="note-content-input">Content</label>
                    <textarea
                        id="noteContent"
                        name="noteContent"
                        required
                        />
                </div>
                <div className="field">
                    <label htmlFor="note-folder-select">Folder</label>
                    <select
                        id="noteFolder"
                        name="noteFolder"
                        required
                        >
                        {this.context.folders.map(folder =>
                            <option key={folder.id} value={folder.id}>
                                {folder.name}
                            </option>
                        )}
                    </select>
                </div>
                <div className="buttons">
                    <button type="submit">Add note</button>
                </div>
            </form>
        )
    }
}

export default AddNote;