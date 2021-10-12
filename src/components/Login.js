import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../AuthGit";
import { Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";
var token;
export default function Login() {
  const { state, dispatch } = useContext(AuthContext);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });

  const { client_id, redirect_uri } = state;

  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
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
        `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=1d4fda97aeeb51b5e056009a329bb5fddbec5fe7&code=${code}&redirect_uri=http://localhost:3000/login`,
        // {
        //   method: "POST",
        //   mode: "no-cors",
        //   headers: {
        //      "Credentials": "include",
        //      "Access-Control-Allow-Origin": "*",
        //     // "Accept": "application/json",
        //   },
        // }
      )
      .then(function(response) {  
        return response.text();  
      })  
      .then(function(text) {  
        console.log('Request successful', text);  
      })  
      .catch(function(error) {  
        console.log('Request failed', error)  
      });
      //   .then((response) => response.text())
      //   .then((data) => {console.log(data);})
      
        // .then((response) => {
        //   console.log(response.headers.get("Content-Type"));
        //   console.log(response.headers.get("Date"));

        //   console.log(response.status);
        //   console.log(response.statusText);
        //   console.log(response.type);
        //   console.log(response.url);
        // })
        // .then((data) => console.log(data))
        //       .then((response) => {
        //         let params = new URLSearchParams(response);
        //         const access_token = params.get("access_token");
        //         // token = access_token;
        //         // localStorage.setItem("token", JSON.stringify(access_token));
        //  console.log(access_token);
        //         // Request to return data of a user that has been authenticated
        //         return fetch(`https://api.github.com/user`, {
        //           mode: "no-cors",
        //           credentials: "include",
        //           headers: {
        //             "Access-Control-Allow-Origin": "*",
        //             "Content-type": "application/json",
        //             "Accept": "application/json",
        //             "Authorization": `Bearer ${access_token}`,
        //           },
        //         });
        //       })
        // .then((response) => response.json())
        // .then((response) => {
        //   return response.status(200).json(response);
        // })
        // .catch((error) => {
        //   return error.status(400).json(error);
        // })
        // .then((data) => {
        //   dispatch({
        //     type: "LOGIN",
        //     payload: { user: data, isLoggedIn: true },
        //   });
        // })
        // .catch((error) => {
        //   setData({
        //     isLoading: false,
        //     errorMessage: "Sorry! Login failed",
        //   });
        // });
    }
  }, [state, dispatch, data]);

  if (state.isLoggedIn) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <span>{data.errorMessage}</span>
      {data.isLoading ? (
        <Button
          type='dashed'
          icon={<GithubOutlined />}
          href={`https://github.com/login/oauth/authorize?scope=user,repo&client_id=9abf3f859cae4e342f7c&redirect_uri=http://localhost:3000/login`}
          onClick={() => {
            setData({ ...data, errorMessage: "" });
          }}
          loading>
          Войти через GitHub
        </Button>
      ) : (
        <Button
          type='dashed'
          icon={<GithubOutlined />}
          href={`https://github.com/login/oauth/authorize?scope=user,repo&client_id=9abf3f859cae4e342f7c&redirect_uri=http://localhost:3000/login`}
          onClick={() => {
            setData({ ...data, errorMessage: "", isLoading: true });
          }}>
          Войти через GitHub
        </Button>
      )}
    </>
  );
}

// const Wrapper = Styled.section`
//   .container {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//     font-family: Arial;

//     > div:nth-child(1) {
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//       box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
//       transition: 0.3s;
//       width: 25%;
//       height: 45%;

//       > h1 {
//         font-size: 2rem;
//         margin-bottom: 20px;
//       }

//       > span:nth-child(2) {
//         font-size: 1.1rem;
//         color: #808080;
//         margin-bottom: 70px;
//       }

//       > span:nth-child(3) {
//         margin: 10px 0 20px;
//         color: red;
//       }

//       .login-container {
//         background-color: #000;
//         width: 70%;
//         border-radius: 3px;
//         color: #fff;
//         display: flex;
//         align-items: center;
//         justify-content: center;

//         > .login-link {
//           text-decoration: none;
//           color: #fff;
//           text-transform: uppercase;
//           cursor: default;
//           display: flex;
//           align-items: center;
//           height: 40px;

//           > span:nth-child(2) {
//             margin-left: 5px;
//           }
//         }

//         .loader-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 40px;
//         }

//         .loader {
//           border: 4px solid #f3f3f3;
//           border-top: 4px solid #3498db;
//           border-radius: 50%;
//           width: 12px;
//           height: 12px;
//           animation: spin 2s linear infinite;
//         }

//         @keyframes spin {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//       }
//     }
//   }
// `;
