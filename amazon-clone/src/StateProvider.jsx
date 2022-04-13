import { createContext, useReducer, useContext } from "react";

//this is a data layer
export const StateContext = createContext();
//buid a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this is how we use it inside of a components
export const useStateValue = () => useContext(StateContext);
