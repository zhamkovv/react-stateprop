import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import {
  DownOutlined,
  ExportOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Dropdown, Badge, Progress } from "antd";

// import Styled from "styled-components";
import { AuthContext } from "../AuthGit";
import "antd/dist/antd.css";

export default function Home() {
  const { state, dispatch } = useContext(AuthContext);

  if (!state.isLoggedIn) {
    return <Redirect to='/login' />;
  }

  const { avatar_url, name, public_repos, followers, following,html_url,login, } = state.user;
  console.log(state.access_token);
  console.log(state.user);
  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const { Meta } = Card;
  const Content = () => (
    <Card
      className='ant-card-dark'
      style={{ width: 320, marginTop: 12 }}
      actions={[
        <a target='_blank' href='mailto: zhamkov@gmail.com'>
          <MailOutlined key='mail' />
        </a>,
        <a target='_blank' href={html_url}>
          <GithubOutlined key='github' />
        </a>,
        <ExportOutlined onClick={() => handleLogout()} key='exit' />,
      ]}>
      <Meta
        avatar={<Avatar size='large' src={avatar_url} />}
        title={name}
        description='Студент курса'
      />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: 8,
        }}>
       <Progress
          width={150}
          gapPosition='left'
          type='dashboard'
          percent={public_repos}
          format={(percent) => `${percent} Repos`}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
          <Progress
          strokeColor='purple'
            width={70}
            type='circle'
            gapPosition='bottom'
            percent={followers+50}
            format={(percent) => `${percent} Fans`}
          />
          <Progress
            size='small'
            type='circle'
            gapPosition='right'
            width={70}
            percent={following+25}
            format={(percent) => `${percent} Idols`}
            status='exception'
          />
        </div>
      </div>
      <label>Прогресс обучения</label>
      <Progress width={80} percent={68} steps={12} strokeColor='#52c41a' />
    </Card>
  );
  return (
    <Dropdown overlay={<Content />}>
      <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
        {login} &nbsp;
        <Badge size='small' count={public_repos}>
          <Avatar src={avatar_url} />
        </Badge>
      </a>
    </Dropdown>

    // <Wrapper>
    //   <div className="container">
    //     <button onClick={()=> handleLogout()}>Logout</button>
    //     <div>
    //       <div className="content">
    //         <img src={avatar_url} alt="Avatar"/>
    //         <span>{name}</span>
    //         <span>{public_repos} Repos</span>
    //         <span>{followers} Followers</span>
    //         <span>{following} Following</span>
    //       </div>
    //     </div>
    //   </div>
    // </Wrapper>
  );
}

// const Wrapper = Styled.section`
// .container{
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   font-family: Arial;

//   button{
//     all: unset;
//     width: 100px;
//     height: 35px;
//     margin: 10px 10px 0 0;
//     align-self: flex-end;
//     background-color: #0041C2;
//     color: #fff;
//     text-align: center;
//     border-radius: 3px;
//     border: 1px solid #0041C2;

//     &:hover{
//       background-color: #fff;
//       color: #0041C2;
//     }
//   }

//   >div{
//     height: 100%;
//     width: 100%;
//     display: flex;
//     font-size: 18px;
//     justify-content: center;
//     align-items: center;

//     .content{
//       display: flex;
//       flex-direction: column;
//       padding: 20px 100px;
//       box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
//       width: auto;

//       img{
//         height: 150px;
//         width: 150px;
//         border-radius: 50%;
//       }

//       >span:nth-child(2){
//         margin-top: 20px;
//         font-weight: bold;
//       }

//       >span:not(:nth-child(2)){
//         margin-top: 8px;
//         font-size: 14px;
//       }

//     }

//   }
// }
// `;
