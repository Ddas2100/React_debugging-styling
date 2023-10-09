import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() { 
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
    });
  };
  return (
    <div>
      <AddUser onAddUser = {addUserHandler} />
      <UsersList users = {usersList}/>
    </div>
  );
}

export default App;

// We neither have access to UsersList inside AddUser.js, nor have access to AddUser inside UsersList.js.
// But App.js component has both the UsersList and AddUsers components. Therefore, "lift the state up" 
// concept has been used here, since App.js is the nearest component where other two components have the
// access. 