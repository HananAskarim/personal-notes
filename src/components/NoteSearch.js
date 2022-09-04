import React from "react";

function NoteSearch({ searchTitle, onSearchChange }) {
    return (
        <div className="note-search">
            <input type="text" placeholder="Cari catatanmu.." value={searchTitle} onChange={(event) => onSearchChange(event)}></input>
        </div>
    )
}

export default NoteSearch;