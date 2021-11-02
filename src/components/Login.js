import React, { useState, useEffect, useContext, useReducer } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { reducer } from '../store/reducer';

let access_token = "";
export default function Login() {
  const {state, dispatch}  = useAuth();
  const [data, setData] = useState({ errorMessage: "", isLoading: false });

  // const { client_id, resdirect_uri } = state;
const goAuthScope = () => {
  setData({ ...data, errorMessage: "", isLoading: !data.isLoading });

  // fetch(`https://cors-anywhere.herokuapp.com/+https://github.com/login/oauth/authorize?scope=user,repo&client_id=5b1fea7a96f8135b957f&redirect_uri=http://localhost:3000/login`,
  //   {
  //     method: "GET",
  //     // mode: "cors",
  //     headers: {
  //       // credentials: "",
  //       // Accept: "application/json",
  //     },
  //   }
  // )
  //   .then((response) => console.log(response.json()))
  //   .catch(err => console.log(err));
}

  useEffect(() => {

    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    console.log("Login comp render");
    const hasCode = url.includes("?code=");
    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      setData({ ...data, isLoading: true });

      const code = newUrl[1];

      console.log(code);
      // const proxy_url = state.proxy_url;

      // Use code parameter and other parameters to make POST request to proxy_server
      fetch(
        `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?client_id=5b1fea7a96f8135b957f&client_secret=9159f4ff027cfc356b99708e5a5f21ea057e9fc4&code=${code}&redirect_uri=http://localhost:3000/login`,
        {
          method: "POST",
          // mode: "cors",
          headers: {
            credentials: "include",
            Accept: "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          access_token = response.access_token;
          // token = access_token;
          // localStorage.setItem("token", JSON.stringify(access_token));
          console.log(access_token);
          // Request to return data of a user that has been authenticated
          return fetch(`https://api.github.com/user`, {
            headers: {
              Authorization: `token ${access_token}`,
            },
          });
        })
        .then((response) => response.json())
        // .then((response) => {
        //   return response.status(200).json(response);
        // })
        // .catch((error) => {
        //   return error.status(400).json(error);
        // })
        .then((data) => {
          dispatch({
            type: "LOGIN",
            payload: { user: data, isLoggedIn: true, token: access_token },
          }); })

        .catch((error) => {
          setData({
            isLoading: false,
            errorMessage: "Sorry! Login failed ",
          });
        });
    }
    // state.isloggedIn ?  : ''
  }, [state, dispatch, data]);

  return (
    <>
      <span>{data.errorMessage}</span>
      <Button
        type='primary'
        icon={<GithubOutlined />}
        target='_top'
        rel='noreferrer noopener'
        href={`https://github.com/login/oauth/authorize?scope=user,repo&client_id=5b1fea7a96f8135b957f&redirect_uri=http://localhost:3000/login`}
        onClick={() => goAuthScope}
        loading={data.isLoading}>
        {data.isLoading ? "Секундочку..." : "Войти через GitHub"}
      </Button>
      {/* ) : (
        <Button
          type="dashed"
          icon={<GithubOutlined />}
          href={`https://github.com/login/oauth/authorize?scope=user,repo&client_id=5b1fea7a96f8135b957f&redirect_uri=http://localhost:3000/login`}
          onClick={() => {
            setData({ ...data, errorMessage: '', isLoading: true });
          }}
        >
          Войти через GitHub
        </Button>
      )} */}
    </>
  );
}
