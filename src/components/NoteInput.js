import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            limitChar: 50
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState((prevState) => {
            const charMax = 50;
            const inputTitle = event.target.value.slice(0, charMax);
            const lengthTitleInput = inputTitle.length;
            return {
                ...prevState,
                title: inputTitle,
                limitChar: charMax - lengthTitleInput,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <div className="note-input">
                <div className="note-input__title">
                    <h2>Buat Catatan</h2>
                </div>
                <div className="note-input__title__char-limit">
                    Sisa Terakhir : {this.state.limitChar}
                </div>
                <form className="note-input__body" onSubmit={this.onSubmitEventHandler}>
                    <input type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea placeholder="Tuliskan catatanmu di sini.." rows={12} value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Buat Note</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;