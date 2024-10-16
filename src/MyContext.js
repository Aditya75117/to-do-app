import React, { createContext, useEffect, useReducer } from 'react';

const initialState = { value: false };
const initialTab = { value: "all" };


// Combined initial state
const combinedInitialState = {
  theme: initialState,
  tab: initialTab,
};


// Combined reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_VALUE':
      return { ...state, theme: { ...state.theme, value: !state.theme.value } };
    case 'TAB_NAME':
      return { ...state, tab: { ...state.tab, value: action.payload } };
    default:
      return state;
  }
};

const MyContext = createContext(null);

const MyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, combinedInitialState, () => {
    const storedState = localStorage.getItem('myContextState');
    return storedState ? JSON.parse(storedState) : combinedInitialState;
  });
  useEffect(() => {
    localStorage.setItem('myContextState', JSON.stringify(state));
  }, [state]);
  
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };