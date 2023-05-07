import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {listConversation} from "../../../const.js";
import '../SelectionForms.css'
const ConversationSelectionList = ({ conversation, setConversation }) => {
	const handleChange = (event) => {
		setConversation(event.target.value);
	};
	
	return (
		<div className="wrapper__conversationSelectionList">
			<p className="title"> Переговорка </p>
			<Box sx={{ minWidth: 150 }}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label"> </InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="Conversation"
						value={conversation}
						label="Переговорка"
						onChange={handleChange}>
						{listConversation.map(item => <MenuItem key={item} value={item}> {item} </MenuItem>)}
					</Select>
				</FormControl>
			</Box>
		</div>
	);
};
export default ConversationSelectionList;