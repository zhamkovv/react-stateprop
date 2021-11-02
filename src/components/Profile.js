import {
  ExportOutlined,
  GithubOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Card, Dropdown, Progress } from 'antd';
import React, { useContext, useReducer } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext, useAuth } from "../AuthContext";
import { reducer, initialState } from '../store/reducer';

export default function Profile() {
  const { state, dispatch }  = useAuth();


  // if (!state.isLoggedIn) {
  //   return <Redirect to="/login" />;
  // }

  const {
    avatar_url,
    name,
    public_repos,
    followers,
    following,
    html_url,
    login,
  } = state.user;
  console.log(state.access_token);
  console.log(state.user);
  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  const { Meta } = Card;
  const UserPopup = () => (
    <Card
      className="ant-card-dark"
      style={{ width: 320, marginTop: 12 }}
      actions={[
        <a href="mailto: zhamkov@gmail.com">
          <MailOutlined key="mail" />
        </a>,
        <a href={html_url}>
          <GithubOutlined key="github" />
        </a>,
        <ExportOutlined onClick={() => handleLogout()} key="exit" />,
      ]}
    >
      <Meta
        avatar={<Avatar size="large" src={avatar_url} />}
        title={name}
        description="Студент курса"
      />
      <br />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 8,
        }}
      >
        <Progress
          width={150}
          gapPosition="left"
          type="dashboard"
          percent={public_repos}
          format={(percent) => `${percent} Repos`}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Progress
            strokeColor="purple"
            width={70}
            type="circle"
            gapPosition="bottom"
            percent={followers + 50}
            format={(percent) => `${percent} Fans`}
          />
          <Progress
            size="small"
            type="circle"
            gapPosition="right"
            width={70}
            percent={following + 25}
            format={(percent) => `${percent} Idols`}
            status="exception"
          />
        </div>
      </div>
      <label>Прогресс обучения</label>
      <Progress width={80} percent={68} steps={12} strokeColor="#52c41a" />
    </Card>
  );
  return (
    <Dropdown overlay={<UserPopup />}>
      <a
        href="/#"
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
      >
        {login} &nbsp;
        <Badge size="small" count={public_repos}>
          <Avatar src={avatar_url} />
        </Badge>
      </a>
    </Dropdown>
  );
}
