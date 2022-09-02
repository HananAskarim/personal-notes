import React from "react";
import NoteItemBody from "./NoteItemBody";
import ActionNote from "./NoteItemAction";

function NoteItem({ title, createdAt, body, id, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <NoteItemBody title={title} createdAt={createdAt} body={body} />
            <ActionNote id={id} onDelete={onDelete} onArchive={onArchive} />
        </div>
    );
}

export default NoteItem;