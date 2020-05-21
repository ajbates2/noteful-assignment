import React from 'react';
import { Link } from 'react-router-dom'
import STORE from './STORE'

export default function Notelist({ notes = STORE.notes }) {

    return (
        <section>
            <ul className="note-list">
                {notes.map(index => {
                    return (
                        <li key={index.id} className="note-box">
                            <Link to={`/note/${index.id}`}>
                                    <h2>{index.name}</h2>
                            </Link>
                                <p>Date modified on {index.modified}</p>
                                <button type="button">Delete Note</button>
                        </li>
                    )
                })}
                <li><button type="button">Add Note</button></li>
            </ul>
        </section>
    )
}