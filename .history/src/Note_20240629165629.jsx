import React from "react"
import { Card, Button } from "react-bootstrap"

function Note({ note, deleteNote }) {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{note.title}</Card.Title>
				<Card.Text>{note.content}</Card.Text>
				<Button
					variant="danger"
					onClick={() => deleteNote(note.id)}
				>
					Delete
				</Button>
			</Card.Body>
		</Card>
	)
}

export default Note
