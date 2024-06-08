import {createContext } from 'react';
import { useState, useContext } from 'react';

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => { }, 
  setUserToken: () => { },
})

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => JSON.parse(localStorage.getItem('USER_CREDENTIALS')) || {})
  const [ _setUserCredentials] = useState(localStorage.getItem('USER_CREDENTIALS') || '')
  const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '')

  const setUserToken = (token) => {
    if (token){
      localStorage.setItem('TOKEN', token)
    } else {
      localStorage.removeItem('TOKEN')
    }
    _setUserToken(token);
  }

  const setUserCredentials = (payload) => {
    if (!payload) {
      localStorage.removeItem('USER_CREDENTIALS')
    } else {
      localStorage.setItem('USER_CREDENTIALS', JSON.stringify(payload))
    }
    _setUserCredentials(payload)
  }


    return (
        <StateContext.Provider value = {{
          currentUser,
          setCurrentUser,
          userToken,
          setUserToken,
          setUserCredentials,
         }}>
            {children}
        </StateContext.Provider>
        
    )
}

export const useStateContext = () => useContext(StateContext);
