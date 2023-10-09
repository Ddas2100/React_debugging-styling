import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
    return ( 
        <Card className={classes.users}>
            <ul>
                {/*To transfom user data to JSX elements, whih are rendered to the DOM. Map is used here to
                create a new array from calling a function for every array object of Users*/}
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))} 
            </ul>
        </Card>
    );
};

export default UsersList;