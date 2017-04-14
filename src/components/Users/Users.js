import React from 'react'

const Users = ({ users, addUser }) => {
  return (
    <section className="Users">
      <h3>Users</h3>
      <ul>
        { users.map((user, i) => <li key={i}>{user.name}</li>) }
      </ul>
      <button onClick={ () => addUser() }>Add User</button>
    </section>
  )
}

export default Users;
