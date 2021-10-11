import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Issues from "./Issues";
import { initialState, reducer } from "./store/reducer"; 


export const AuthContext = createContext();

function AuthGit() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Home}/>
        <Route path="/issues" component={Issues}/>
      </Switch>
    </Router>
    </AuthContext.Provider>
  );
}
export default AuthGit;
