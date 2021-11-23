import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import { UsersList } from './components/Users/UsersList';


function App() {

  const [users, setUsers] = useState([])

  const onNewUserAdded = user => {
    setUsers(prevUsers => {
      return [ user , ...prevUsers]
    }) 
  }


  return (
    <div>
      <AddUser onNewUser={onNewUserAdded}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
