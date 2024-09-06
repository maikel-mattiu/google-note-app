import React, { useState } from "react"
import { Container } from "react-bootstrap"
import NoteList from "./NoteList"
import AddNote from "./AddNote"
import FileUpload from "./FileUpload"
import SearchBar from "./SearchBar"

function App() {
	const [notes, setNotes] = useState([])
	const [filteredNotes, setFilteredNotes] = useState([])

	const addNote = (title, content) => {
		const newNote = { id: Date.now(), title, content }
		const newNotes = [...notes, newNote]
		setNotes(newNotes)
		setFilteredNotes(newNotes)
	}

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id)
		setNotes(newNotes)
		setFilteredNotes(newNotes)
	}

	const filterNotes = (query) => {
		if (!query) {
			setFilteredNotes(notes)
		} else {
			const filtered = notes.filter(
				(note) =>
					note.title.toLowerCase().includes(query.toLowerCase()) ||
					note.content.toLowerCase().includes(query.toLowerCase())
			)
			setFilteredNotes(filtered)
		}
	}

	return (
		<Container className="mt-5">
			<h1 className="text-center">Google Keep Clone</h1>
			<SearchBar filterNotes={filterNotes} />
			<AddNote addNote={addNote} />
			<FileUpload />
			<NoteList
				notes={filteredNotes}
				deleteNote={deleteNote}
			/>
		</Container>
	)
}

export default App
