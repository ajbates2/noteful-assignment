import React, { Component } from 'react';
import FolderList from './FolderList/folderList'
import NoteList from './NoteList/noteList';
import NoteContext from './noteContext'
import NotefulError from './notefulError'

class HomePage extends Component {
    static contextType = NoteContext
    render() {
        return (
            <NotefulError>
                <nav>
                    <FolderList />
                </nav>
                <main>
                    <NoteList notes={this.context.notes} />
                </main>
            </NotefulError>
        )
    }
}

export default HomePage;