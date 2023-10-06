import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [buttonColor, setButtonColor] = useState('');

  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true);
    } 
    setEnteredValue(event.target.value);
    setButtonColor(''); // Clear the button color when input changes
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      setButtonColor('lightcoral'); // Change button color when input is invalid
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
    setButtonColor(''); // Clear the button color after submission
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
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
    </form> 
  );
};

export default CourseInput;
