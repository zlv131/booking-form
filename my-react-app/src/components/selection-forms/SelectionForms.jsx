import React, {useState} from 'react';
import FloorSelectionList from "./floor-selection-list/FloorSelectionList.jsx";
import ConversationSelectionList from "./conversation-selection-list/ConversationSelectionList.jsx";
import TowerSelectionList from "./tower-selection-list/TowerSelectionList.jsx";
import './SelectionForms.css';
import DatePickerForm from "../date-picker-form/DatePickerForm.jsx";
import CommentField from "../comment-field/CommentField.jsx";
import BaseButton from "../base-button/BaseButton.jsx";
import dayjs from "dayjs";
import TimePickerForm from "../time-picker-form/TimePickerForm.jsx";
const SelectionForms = () => {
	const [floor, setFloor] = useState('');
	const [tower, setTower] = useState('');
	const [conversation, setConversation] = useState('');
	const [date, setDate] = useState(dayjs('2023-05-05'));
	const [message, setMessage] = useState('');
	const [time, setTime] = useState(dayjs('2022-04-17T15:30'));
	const resetForm = () => {
		setFloor('');
		setTower('');
		setConversation('');
		setDate(dayjs(''));
		setTime(dayjs(''));
		setMessage('');
	}
	
	const sendForm = () => {
		if (floor === '' || tower === '' || conversation === '' || JSON.stringify(date) === 'null'  || JSON.stringify(time) === 'null')  return;
		
		if (message === '') {
			console.log(JSON.stringify({ floor, tower, conversation, date, time }));
		} else if (message !== '') {
			console.log(JSON.stringify({ floor, tower, conversation, date, time, message }));
		} else return;
	}
	const handleForm = (event) => {
		if (event.target.value === 'Очистить форму') {
			resetForm();
		} else if (event.target.value === 'Забронировать') {
			sendForm();
		}
	}
	
	return (
		<div className="wrapper__selectionForms">
			<form action="#" className="form">
				<div className="blockList">
					<FloorSelectionList floor={floor} setFloor={setFloor}/>
					<ConversationSelectionList conversation={conversation} setConversation={setConversation}/>
					<TowerSelectionList tower={tower} setTower={setTower}/>
				</div>
				<DatePickerForm date={date} setDate={setDate}/>
				<TimePickerForm time={time} setTime={setTime}/>
				<CommentField message={message} setMessage={setMessage}/>
				<div className="blockButton">
					<BaseButton handleForm={handleForm} title={'Очистить форму'}/>
					<BaseButton handleForm={handleForm} title={'Забронировать'}/>
				</div>
			</form>
		</div>
	);
};

export default SelectionForms;