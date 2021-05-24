import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDefaultLoad, setIsDefaultLoad] = useState(true);
  const [alert, setAlert] = useState(false);

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        loading,
        setLoading,
        isDefaultLoad,
        setIsDefaultLoad,
        alert,
        setAlert,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
