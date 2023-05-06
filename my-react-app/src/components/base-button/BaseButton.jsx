import * as React from 'react';
import Button from '@mui/material/Button';
export default function BaseButton({ title, handleForm }) {
	return (
		<div className="wrapper__button">
				<Button onClick={handleForm} color="info" value={title} variant="contained"> {title} </Button>
		</div>
	);
}