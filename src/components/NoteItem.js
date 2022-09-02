import React from "react";
import NoteItemBody from "./NoteItemBody";

function NoteItem({ title, createdAt, body }) {
    return (
        <div className="note-item">
            <NoteItemBody title={title} createdAt={createdAt} body={body} />
        </div>
    );
}

export default NoteItem;