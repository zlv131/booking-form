import './App.css'
import Header from "./components/header/Header.jsx";
import SelectionForms from "./components/selection-forms/SelectionForms.jsx";
import React from "react";
import DatePickerForm from "./components/date-picker-form/DatePickerForm.jsx";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <SelectionForms/>
      </div>
    </div>
  )
}

export default App
