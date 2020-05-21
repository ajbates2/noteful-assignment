import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import HomePage from './homePage'
import NotePage from './notePage'
import './App.css';
import FolderPage from './folderPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link to='/'>
            <h1>Noteful</h1>
          </Link>
        </header>
        <main className="main-container">
          <Route exact path='/' component={HomePage} />
          <Route path='/folder/:folderId' component={FolderPage} />
          <Route path='/note/:noteId' component={NotePage} />
        </main>
      </div>
    );
  }
}

export default App;
