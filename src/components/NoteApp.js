import React from "react";
import { getInitialData } from "../utils/data";
import NoteAppBody from "./NoteAppBody";
import NoteAppHeader from "./NoteAppHeader";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        createdAt: new Date().toISOString(),
                        body,
                        archived: false
                    }
                ]
            }
        });
    }

    onArchiveHandler(id) {
        const updateArchive = this.state.notes.filter((note) => note.id === id).map((note) => (note.archived = !note.archived));
        this.setState({ updateArchive });
    }

    render() {
        return ( 
            <div>
                <NoteAppHeader />
                <NoteAppBody 
                    addNote={this.onAddNoteHandler} 
                    notes={this.state.notes} 
                    onDelete={this.onDeleteHandler} 
                    onArchive={this.onArchiveHandler}
                />
            </div>
        );
    }
}

export default NoteApp;