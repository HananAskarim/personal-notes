import React from "react";
import DeleteNote from "./DeleteNote";
import ArchiveNote from "./NoteItemArchive";

function NoteItemAction({ id, onDelete, onArchive }) {
    return (
        <div className="note-item__action">
            <DeleteNote id={id} onDelete={onDelete} />
            <ArchiveNote id={id} onArchive={onArchive} />
        </div>
    );
}

export default NoteItemAction;