import React from 'react'

const NoteContext = React.createContext({
    folders: [],
    notes: [],
    deleteNote: () => {},
    handleAddFolder: () => {},
    handleAddNote: () => {},
})

export default NoteContext;