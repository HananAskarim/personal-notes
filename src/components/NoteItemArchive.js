import React from "react";

function NoteItemArchive({ notes, id, onArchive }) {
    return <button className="note-item__archive-button" onClick={() => onArchive(id)}>{notes.archived ? 'Pindahkan' : 'Arsipkan'}</button>
}

export default NoteItemArchive;