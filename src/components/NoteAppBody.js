import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

function NoteAppBody({ notes, addNote, onDelete, onArchive }) {
    let notesActive = null;
    let notesArchived = null;
    notesActive = notes.filter((note) => note.archived === false);
    notesArchived = notes.filter((note) => note.archived === true);
    return (
        <div className="note-app__body">
            <NoteInput addNote={addNote} />

            <h2>Catatan Aktif</h2>
            {notesActive.length > 0 ? (
                <NoteList notes={notesActive} onDelete={onDelete} onArchive={onArchive} />                
            ) : (<p className="notes-list__empty-message">Tidak ada catatan</p>)}

            <h2>Arsip</h2>
            {notesArchived.length > 0 ? (
                <NoteList notes={notesArchived} onDelete={onDelete} onArchive={onArchive} />
            ) : (<p className="notes-list__empty-message">Tidak ada catatan</p>)}
        </div>
    );
}

export default NoteAppBody;