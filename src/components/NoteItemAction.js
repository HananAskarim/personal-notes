import React from "react";
import DeleteNote from "./DeleteNote";
import NoteItemArchive from "./NoteItemArchive";

function NoteItemAction({ notes, id, onDelete, onArchive }) {
    return (
        <div className="note-item__action">
            <DeleteNote id={id} onDelete={onDelete} />
            <NoteItemArchive notes={notes} id={id} onArchive={onArchive} />
        </div>
    );
}

export default NoteItemAction;