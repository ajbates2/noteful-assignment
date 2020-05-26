import React, { Component } from 'react';
import NoteList from '../NoteList/noteList';
import FolderList from '../FolderList/folderList';
import NoteContext from '../noteContext';

class FolderPage extends Component {
    static contextType = NoteContext
    render() {
        const filteredNotes = this.context.notes.filter(note => 
            note.folderId === this.props.match.params.folderId
        )
        return (
            <>
                <FolderList />
                <NoteList notes={filteredNotes}/>
            </>
        )
    }
}

export default FolderPage;