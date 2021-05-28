import React, { createContext, useState } from 'react';

export const RepoContext = createContext();

const RepoContextProvider = (props) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <RepoContext.Provider
      value={{
        repos,
        setRepos,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </RepoContext.Provider>
  );
};

export default RepoContextProvider;
