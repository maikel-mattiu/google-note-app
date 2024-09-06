/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { Container } from "react-bootstrap"
import NoteList from "./NoteList"
import AddNote from "./AddNote"

function App() {
	const [notes, setNotes] = useState([])

	const addNote = (title, content) => {
		const newNote = { id: Date.now(), title, content }
		const newNotes = [...notes, newNote]
		setNotes(newNotes)
	}

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id)
		setNotes(newNotes)
	}

	return (
		<Container className="mt-5">
			<h1 className="text-center">Google Keep Clone</h1>
			<AddNote addNote={addNote} />
			<NoteList
				notes={notes}
				deleteNote={deleteNote}
			/>
		</Container>
	)
}

export default App
