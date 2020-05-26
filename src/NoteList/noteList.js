import React, { Component } from 'react';
import Note from '../Note/note';
import { Link } from 'react-router-dom';

class NoteList extends Component {
    static defaultProps = {
        notes: []
    }
    
    render() {
        return (
            <section>
                <ul className="note-list">
                    {this.props.notes.map(index =>
                        <Note
                            key={index.id}
                            name={index.name}
                            modifiedDate={index.modified}
                            id={index.id}
                        />
                    )}
                    <Link to='/AddNote'>
                        <button type="button">add note</button>
                    </Link>
                </ul>
            </section>

        )
    }
}

export default NoteList