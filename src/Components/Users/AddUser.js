import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser= props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enterredAge, setEnterredAge] = useState('');
    const [error, setError] = useState(); // Initial value of useState will be undefined since we have to control the modal 

    const addUserHandler= (event) => {
        event.preventDefault();
        // Form Validation
        if(enteredUsername.trim().length === 0 || enterredAge.trim().length === 0) {
            setError ({
                title: 'Invalid Input', // Error has been set here as an object
                message: 'Please Enter a Valid Username and Age (Non-empty values)'
            })
            return;
        }
        if(+enterredAge < 1) {
            setError ({
                title: 'Invalid Age',
                message: 'Please Enter a Valid Age (Non-negative/Greater than zero)'
            })
            return;
        }

        props.onAddUser(enteredUsername,enterredAge);
        setEnteredUsername(''); // input username will become blank upon clicking button
        setEnterredAge(''); // input age will become blank upon clicking button
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnterredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null); // Null is treated as falsy value; so, the below error message condition won't be rendered
    }

    return (
        <div>
            {/* If error comes, right or Below parts of && will be shown */}
            {error && (             
                <ErrorModal 
                    title= {error.title} 
                    message= {error.message} 
                    onConfirm={errorHandler}/>
                )} 
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label> {/*htmlFor is used instead of for since this name is already captured by JS */}
                    <input 
                        id='username' 
                        type='text' 
                        value={enteredUsername} // input username will become blank upon clicking button
                        onChange={usernameChangeHandler}/>
                    <label htmlFor='age'>Age (Years)</label>
                    <input 
                        id='age' 
                        type='number' 
                        value={enterredAge} // input age will become blank upon clicking button
                        onChange={ageChangeHandler}/>
                    <Button type='submit'>Add User</Button> 
                </form>
            </Card>
        </div>
    );
};

export default AddUser;