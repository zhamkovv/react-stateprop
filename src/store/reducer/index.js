export const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  token: JSON.parse(localStorage.getItem("token")) || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  // client_id: '9abf3f859cae4e342f7c',
  // redirect_uri: 'http://localhost:3000/login',
  // client_secret: '1d4fda97aeeb51b5e056009a329bb5fddbec5fe7',
  // proxy_url: 'https://github.com/login/oauth/access_token'
  // REACT_APP_CLIENT_ID=9abf3f859cae4e342f7c
  // REACT_APP_CLIENT_SECRET=e07aadd540ac3e23c7c534d808d174302b21ce33
  // REACT_APP_REDIRECT_URI=/login
  // REACT_APP_PROXY_URL=https://github.com/login/oauth/access_token
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn))
      localStorage.setItem("user", JSON.stringify(action.payload.user))
       localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user,
        token: action.payload.token,
      };
    }
    case "LOGOUT": {
      localStorage.clear()
      return {
        // ...state,
        isLoggedIn: false,
        user: null,
        token: null
      };
    }
    default:
      return state;
  }
};