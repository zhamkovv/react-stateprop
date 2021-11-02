import React, { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./store/reducer";

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export const AuthContext = createContext();
// const [ state, dispatch ] = useReducer(reducer, initialState);

const AuthProvider = ({props, children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   const [state, setS] = useState(state.isLoggedIn);

    useEffect(() => {
      // Pull saved login state from localStorage / AsyncStorage
    }, [state, dispatch]);

  //   const login = () => {
  //     sleep(2000).then(() => setLoggedIn(true));
  //   };

  //   const logout = () => {
  //     sleep(2000).then(() => setLoggedIn(false));
  // //   };
  const authContextValue = { state, dispatch };
  return <AuthContext.Provider value={authContextValue} {...props}>{children}</AuthContext.Provider>
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

// import React, {createContext} from "react";
// import { initialState } from "./store/reducer";

// // export const state = {
// //     isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
// //     token: JSON.parse(localStorage.getItem("token")) || null,
// //     user: JSON.parse(localStorage.getItem("user")) || null,
// //     client_id: '9abf3f859cae4e342f7c',
// //     redirect_uri: 'http://localhost:3000/login',
// //     // client_secret: '1d4fda97aeeb51b5e056009a329bb5fddbec5fe7',
// //     // proxy_url: 'https://github.com/login/oauth/access_token'
// //     // REACT_APP_CLIENT_ID=9abf3f859cae4e342f7c
// //     // REACT_APP_CLIENT_SECRET=e07aadd540ac3e23c7c534d808d174302b21ce33
// //     // REACT_APP_REDIRECT_URI=/login
// //     // REACT_APP_PROXY_URL=https://github.com/login/oauth/access_token
// //   };

//   export default AuthContext = createContext({ state: {
//     isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
//     token: JSON.parse(localStorage.getItem("token")) || null,
//     user: JSON.parse(localStorage.getItem("user")) || null,
//     client_id: '9abf3f859cae4e342f7c',
//     redirect_uri: 'http://localhost:3000/login',
//     // client_secret: '1d4fda97aeeb51b5e056009a329bb5fddbec5fe7',
//     // proxy_url: 'https://github.com/login/oauth/access_token'
//     // REACT_APP_CLIENT_ID=9abf3f859cae4e342f7c
//     // REACT_APP_CLIENT_SECRET=e07aadd540ac3e23c7c534d808d174302b21ce33
//     // REACT_APP_REDIRECT_URI=/login
//     // REACT_APP_PROXY_URL=https://github.com/login/oauth/access_token
//   } });
