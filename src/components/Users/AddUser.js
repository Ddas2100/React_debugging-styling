import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef(); 
  const ageInputRef = useRef();
  const collegeInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge= ageInputRef.current.value;
    const enteredCollege= collegeInputRef.current.value;

    // if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) 
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredCollege.trim().length === 0){
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name, age, and college name(non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    // props.onAddUser(setEnteredUsername, setEnteredAge);
    // setEnteredUsername('');
    // setEnteredAge('');

    props.onAddUser(enteredName, enteredUserAge, enteredCollege);
    nameInputRef.current.value= '';      // Forcefull manipulation of React-DOM which we usually don't do
    ageInputRef.current.value= '';  // Forcefull manipulation of React-DOM which we usually don't do
    collegeInputRef.current.value= '';
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
            // value={enteredAge}
            // onChange={ageChangeHandler}          
          />
          <label htmlFor="college">College Name</label>
          <input
            id="college"
            type="text"
            ref={collegeInputRef}
            // value={enteredAge}
            // onChange={ageChangeHandler}          
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
