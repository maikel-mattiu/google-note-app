/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"
import { Card, Button } from "react-bootstrap"
import { Trash2 } from "react-feather"

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
					<Trash2
						size={16}
						style={{ marginRight: "8px" }}
					/>
					Delete
				</Button>
			</Card.Body>
		</Card>
	)
}

export default Note
