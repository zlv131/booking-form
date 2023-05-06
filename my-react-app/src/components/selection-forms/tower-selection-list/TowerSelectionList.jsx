import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../SelectionForms.css';
const TowerSelectionList = ({ tower,  setTower}) => {
	
	const handleChange = (event) => {
		setTower(event.target.value);
	};
	
	return (
		<div className="wrapper__towerSelectionList">
			<p className="title"> Башня </p>
			<Box sx={{ minWidth: 150 }}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label"> </InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="tower"
						value={tower}
						label="Этаж"
						onChange={handleChange}>
						
						<MenuItem value={"A"}> A </MenuItem>
						<MenuItem value={"B"}> B </MenuItem>
					</Select>
				</FormControl>
			</Box>
		
		
		</div>
	);
};

export default TowerSelectionList;