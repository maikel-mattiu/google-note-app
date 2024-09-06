import React from "react"
import { Form } from "react-bootstrap"

function SearchBar({ filterNotes }) {
	const handleSearch = (e) => {
		filterNotes(e.target.value)
	}

	return (
		<Form className="mb-4">
			<Form.Group controlId="formSearch">
				<Form.Control
					type="text"
					placeholder="Search notes"
					onChange={handleSearch}
				/>
			</Form.Group>
		</Form>
	)
}

export default SearchBar
