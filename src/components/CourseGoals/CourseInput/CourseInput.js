import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [buttonColor, setButtonColor] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true);
      setErrorMessage(false); // Hide error message when input changes
    } 
    setEnteredValue(event.target.value);
    setButtonColor(''); // Clear the button color when input changes
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      setButtonColor('lightcoral'); // Change button color when input is invalid
      setErrorMessage(true); // Show error message
      setTimeout(() => {
        setErrorMessage(false) 
      },3000); // Hide error message after 3 seconds
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
    setButtonColor(''); // Clear the button color after submission
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input style={{
          borderColor: !isValid ? 'red' : '#ccc', 
          background: !isValid ? 'salmon' : 'transparent'
        }} 
        type="text" 
        value={enteredValue}
        onChange={goalInputChangeHandler} />
      </div> 
      <Button type="submit" style={{ backgroundColor: buttonColor }}>
        Add Goal
      </Button>
      {errorMessage && (
        <p style={{ color: 'red' }}>Please enter a valid goal!</p> // Error Message below add goal button
      )}
    </form> 
  );
};

export default CourseInput; 
