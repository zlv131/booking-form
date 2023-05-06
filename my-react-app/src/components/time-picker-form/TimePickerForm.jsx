import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import './TimePickerForm.css';
export default function TimePickerForm({ time, setTime }) {
	return (
		<div className="wrapper__timePickerForm">
			Время
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DemoContainer sx={{ maxWidth: 200, }} components={['TimePicker', 'TimePicker']}>
					<TimePicker
						label=""
						value={time}
						onChange={(newValue) => setTime(newValue)}
					/>
				</DemoContainer>
			</LocalizationProvider>
		</div>
	);
}