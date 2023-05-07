import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {listFloor} from "../../../const.js";
import '../SelectionForms.css';
const FloorSelectionList = ({ floor, setFloor }) => {
	const handleChange = (event) => {
		setFloor(event.target.value);
	};
	return (
		<div className="wrapper__floorSelectionList">
			<p className="title"> Этаж </p>
			<Box sx={{ minWidth: 150 }}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label"> </InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="floor"
						value={floor}
						label="Этаж"
						onChange={handleChange}>
						
						{listFloor.map(item => <MenuItem key={item} value={item}> {item} </MenuItem>)}
					</Select>
				</FormControl>
			</Box>
		</div>
	);
};
export default FloorSelectionList;