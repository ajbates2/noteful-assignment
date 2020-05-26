import React, { Component } from 'react';
import FolderList from './FolderList/folderList'
import NoteList from './NoteList/noteList';
import NoteContext from './noteContext'

class HomePage extends Component {  
    static contextType = NoteContext
    render() {
        return (
            <>
                <FolderList />
                <NoteList notes={this.context.notes}/>
            </>
        )
    }
}

export default HomePage;