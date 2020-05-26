import React, { Component } from 'react';
import NoteContext from '../noteContext'

class AddFolder extends Component {

    static contextType = NoteContext;

    handleSubmit = event => {
        event.preventDefault();
        const { folderName } = event.target
        const folder = {
            name: folderName.value
        }
        console.log({ folderName })
        fetch(`http://localhost:9090/folders`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(folder)
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
                folderName.value = ''
                this.context.handleAddFolder(data)
                this.props.history.push(`/folder/${data.id}`)
            })
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        return (
            <form className="Noteful-form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label htmlFor="folder-name-input">Name {' '}</label>
                    <input
                        type="text"
                        id="folderName"
                        name="folderName" />
                </div>
                <div className="buttons">
                    <button type="submit">Add folder</button>
                </div>
            </form>
        )
    }
}

export default AddFolder;