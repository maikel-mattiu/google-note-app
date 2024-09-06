/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react"
import { Row, Col } from "react-bootstrap"
import Note from "./Note"

function NoteList({ notes, deleteNote }) {
	return (
		<Row>
			{notes.map((note) => (
				<Col
					key={note.id}
					sm={6}
					md={4}
					lg={3}
					className="mb-4"
				>
					<Note
						note={note}
						deleteNote={deleteNote}
					/>
				</Col>
			))}
		</Row>
	)
}

export default NoteList
