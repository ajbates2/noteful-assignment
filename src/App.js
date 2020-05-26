import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import HomePage from './homePage'
import NotePage from './NotePage/notePage'
import './App.css';
import FolderPage from './FolderPage/folderPage';
import NoteContext from './noteContext';
import AddNote from './AddNote/addNote';
import AddFolder from './AddFolder/addFolder';

class App extends Component {

  state = {
    folders: [],
    notes: []
  }

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note =>
      note.id !== noteId
    )
    this.setState({
      notes: newNotes
    })
  }

  handleAddFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder]
    })
  }

  handleAddNote = note => {
    this.setState({
      notes: [...this.state.notes, note]
    })
  }

  componentDidMount() {
    Promise.all([
      fetch(`http://localhost:9090/notes`),
      fetch(`http://localhost:9090/folders`)
    ])
      .then(([notesResponse, foldersResponse]) => {
        if (!notesResponse.ok)
          return notesResponse.json().then(event => Promise.reject(event));
        if (!foldersResponse.ok)
          return foldersResponse.json().then(event => Promise.reject(event));

        return Promise.all([notesResponse.json(), foldersResponse.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders });
      })
      .catch(error => {
        console.error({ error });
      });
  }

render() {
  const contextValue = {
    folders: this.state.folders,
    notes: this.state.notes,
    deleteNote: this.deleteNote,
    handleAddFolder: this.handleAddFolder,
    handleAddNote: this.handleAddNote,
  }
  return (
    <div className="App">
      <header>
        <Link to='/'>
          <h1>Noteful</h1>
        </Link>
      </header>
      <main className="main-container">
        <NoteContext.Provider value={contextValue}>
          <Route exact path='/' component={HomePage} />
          <Route path='/folder/:folderId' component={FolderPage} />
          <Route path='/note/:noteId' component={NotePage} />
          <Route path='/AddNote' component={AddNote} />
          <Route path='/AddFolder' component={AddFolder} />
        </NoteContext.Provider>
      </main>
    </div>
  );
}
}

export default App;
