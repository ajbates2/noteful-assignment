import React, { Component } from 'react';
import Note from '../Note/note';
import NoteContext from '../noteContext'

class NotePage extends Component {
    static contextType = NoteContext
    render() {
        const currentNote = this.context.notes.find(note =>
            note.id === this.props.match.params.noteId
        );
        const currentFolderName = this.context.folders.find((folder) => 
            folder.id === currentNote?.folderId)?.name;

        if (!currentNote) {
            return (
                <section>
                    Note was deleted
                </section>
            )
        }
        return (
            <>
                <section>
                    <button type="button" onClick={() => this.props.history.goBack()}>Go Back</button>
                    <h2>{currentFolderName}</h2>
                </section>
                <Note
                    name={currentNote.name}
                    modifiedDate={currentNote.modified}
                    id={currentNote.id} />
                <p>
                    {currentNote.content}
                </p>
            </>
        )
    }
}


export default NotePage;