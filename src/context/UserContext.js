import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
