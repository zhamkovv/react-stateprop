import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React from "react";
import {
  BrowserRouter,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
// import "./App.css";
import AxiosJson from "./AxiosJson";
import ConditionRender from "./ConditionRender";
import ContextMind from "./ContextMind";
import EventCounter from "./EventCouner";
import ForwardBut from "./ForwardBut";
import LifeCycleMedia from "./LifeCycleMedia";
import MyContext from "./MyContext";
import MyStateComp from "./MyStateComp";
import ScooterShop from "./ScooterShop";
import StateUp from "./StateUp";
import UseHooks from "./UseHooks";
import UserComp from "./UserComp";
import AuthGit from "./AuthGit";
import Home from "./components/Home";
import Login from "./components/Login";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Homepage = () => (
  <span name='Главная'>Выберите компонент в меню для демо его работы</span>
);

const EventCounters = () => (
  <>
    <EventCounter />
    <EventCounter value='3' />
    <EventCounter value='5' />
    <EventCounter value='njwefkbca' />
  </>
);
const listComponents = [
  <Homepage />,
  <AxiosJson />,
  <ForwardBut />,
  <MyStateComp />,
  <EventCounters />,
  <UserComp name='Events Handling with HoC props.name' />,
  <ContextMind />,
  <LifeCycleMedia />,
  <MyContext />,
  <ScooterShop />,
  <UseHooks arg={77} />,
  <ConditionRender />,
  <StateUp />,
];

const Routing = () => {
  const menu = listComponents.map((i, key) => (
    <Menu.Item key={key}>
      <NavLink to={"/" + i.type.name + "/"}>{i.type.name}</NavLink>
    </Menu.Item>
  ));

  return (
    <Layout>
      <BrowserRouter>
        <nav>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
            }}>
            <div className='logoP' />

            <Menu theme='dark' mode='inline' defaultSelectedKeys={["1"]}>
              <SubMenu key='1' icon={<UserOutlined />}></SubMenu>
              <SubMenu key='sub1' icon={<AppstoreOutlined />} title='User'>
                {menu}
              </SubMenu>

              <Menu.Item key='2' icon={<VideoCameraOutlined />}>
                nav 2
              </Menu.Item>
              <Menu.Item key='3' icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
              <Menu.Item key='4' icon={<BarChartOutlined />}>
                nav 4
              </Menu.Item>
              <Menu.Item key='5' icon={<CloudOutlined />}>
                nav 5
              </Menu.Item>
              <Menu.Item key='6' icon={<AppstoreOutlined />}>
                nav 6
              </Menu.Item>

              <Menu.Item key='7' icon={<TeamOutlined />}>
                nav 7
              </Menu.Item>
              <Menu.Item key='8' icon={<ShopOutlined />}>
                nav 8
              </Menu.Item>
            </Menu>
          </Sider>
        </nav>
        <Switch>
          <Layout className='site-layout' style={{ marginLeft: 200 }}>
            <Header className='site-layout-background' style={{ paddingRight: 24, textAlign: "right" }}>
            <AuthGit />
            </Header>
            <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
              <div
                className='site-layout-background'
                style={{ padding: 24, textAlign: "center" }}>
                {listComponents.map((i, key) => (
                  <Route path={"/" + i.type.name + "/"} key={key}>
                    <h1>{i.type.name}</h1>
                    {i}
                  </Route>
                ))}

                <br />
                Really
                
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                long
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                content
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Switch>
        {/* <Redirect from='/123' to='/HomePage/'></Redirect> */}
      </BrowserRouter>
    </Layout>
  );
};

export default Routing;
