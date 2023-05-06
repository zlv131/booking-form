import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './DatePIckerForm.css'
export default function DatePickerForm({ date, setDate }) {
	
	return (
		<div className="wrapper__datePickerForm">
			Дата
			<LocalizationProvider  dateAdapter={AdapterDayjs}>
				<DemoContainer sx={{ maxWidth: 200, }} components={['DatePicker', 'DatePicker']}>
					<DatePicker
						label=""
						value={date}
						onChange={(newValue) => setDate(newValue)}
					/>
				</DemoContainer>
			</LocalizationProvider>
		</div>
	);
}