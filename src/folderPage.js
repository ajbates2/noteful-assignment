import React, { Component } from 'react';
import STORE from './STORE'
import NoteList from './noteList';
import FolderList from './folderList';

class FolderPage extends Component {
    
    render() {
        const currentFolder = STORE.notes.filter(notes => 
            notes.folderId === this.props.match.params.folderId
            )
        return (
            <>
                <FolderList />
                <NoteList notes={currentFolder} />
            </>
        )
    }
}

export default FolderPage;