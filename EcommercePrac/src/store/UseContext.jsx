import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [getstorrrrr, setgetstorrrrr] = useState("");

  return (
    <MyContext.Provider value={{ data, setData  , getstorrrrr , setgetstorrrrr }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
