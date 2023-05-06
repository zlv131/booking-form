import * as React from 'react';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';
import './CommentField.css';
import {useState} from "react";
export default function CommentField({ message, setMessage }) {
	const handleChange = (event) => {
		setMessage(event.target.value)
	}
	
	return (
		<div className="wrapper__commentField">
			Комментарий
			<Box
				sx={{
					margin: '5px 0px 0px 0px',
					maxWidth: 400,
				}}
			>
				<Textarea minRows={5}
				          maxRows={5}
				          value={message}
				          name="Outlined"
				          onChange={handleChange}
				          placeholder="Type in here…"
				          variant="outlined" />
			</Box>
		</div>
	);
}