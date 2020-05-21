import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import STORE from './STORE'

class FolderList extends Component {
    render() {
        return (
            <ul className="folder-list">
                {STORE.folders.map(index => {
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
                <li><button type="button">Add Folder</button></li>
            </ul>
        )
    }
}

export default FolderList;