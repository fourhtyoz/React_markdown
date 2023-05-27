import React from "react"

export default function Sidebar(props) {
    // function deleteNote(id) {
    //     // console.log(localStorage.notes)
    //     const storage = JSON.parse(localStorage.notes)
    //     for (let note of storage) {
    //         if (note.id === id) {
    //             const index = storage.indexOf(note)
    //             storage.splice(index, 1)
    //             localStorage.setItem('notes', JSON.stringify(storage))
    //         }
    //     }
    // }
    const noteElements = props.notes.map((note) => (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">
                    {note.body.split('\n')[0]}
                </h4>
                <button onClick={(event)=> props.deleteNote(event, note.id)}>Delete</button>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
