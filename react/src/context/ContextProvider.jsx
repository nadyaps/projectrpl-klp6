import {createContext } from 'react';
import { useState, useContext } from 'react';

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => { }, 
  setUserToken: () => { }
})

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl: null,
  })
  const [userToken, setUserToken] = useState('')

    return (
        <StateContext.Provider value = {{
          currentUser,
          setCurrentUser,
          userToken,
          setUserToken
         }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
