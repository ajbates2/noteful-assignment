import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import NoteContext from '../noteContext';

export default function FolderList() {
    return (
        <NoteContext.Consumer>
            {(context) => (
                <ul className="folder-list">
                    {context.folders.map(index => {
                        return (
                            <li key={index.id}>
                                <NavLink
                                    className="folder-box"
                                    to={`/folder/${index.id}`}>
                                    {index.name}
                                </NavLink>
                            </li>
                        )
                    })}
                    <Link to='/AddFolder'>
                        <button type="button">Add Folder</button>
                    </Link>
                </ul>
            )}
        </NoteContext.Consumer>
    )
}
