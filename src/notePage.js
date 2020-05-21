import React, { Component } from 'react';
import STORE from './STORE'

class Folder extends Component {
    render() {
        const currentNote = STORE.notes.find(note =>
            note.id === this.props.match.params.noteId
        );
        const currentFolderName = STORE.folders.map(folder => {
            if(currentNote.folderId === folder.id) {
                return folder.name
            }
        })
        return (
            <>
                <section>
                    <button type="button" onClick={() => this.props.history.goBack()}>Go Back</button>
                    <h2>{currentFolderName}</h2>
                </section>
                <section>
                    <div className="note-box">
                        <h2>{currentNote.name}</h2>
                        <p>Date modified on {currentNote.modified}</p>
                        <button type="button" >Delete Note</button>
                    </div>
                    <p>{currentNote.content}</p>
                </section>
            </>
        )
    }
}

export default Folder;