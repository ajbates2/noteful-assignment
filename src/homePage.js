import React, { Component } from 'react';
import FolderList from './folderList'
import NoteList from './noteList';

class HomePage extends Component {
    render() {
        return (
            <>
                
                <FolderList />
                <NoteList />
            </>
        )
    }
}

export default HomePage;