import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  EllipsisOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  CopyOutlined,
  SplitCellsOutlined,
} from "@ant-design/icons";
import {
  Button,
  Dropdown,
  Layout,
  Menu,
  PageHeader,
  Row,
  Tag,
  Typography,
  Drawer,
  Space,
} from "antd";
import React, { Component, useState, useReducer } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { initialState, reducer } from "./store/reducer";
// import 'antd/lib/style/themes/default.less';
// import 'antd/dist/antd.less'; // Import Ant Design styles by less entry
import "./Code.less";
// import { Profile, Login, AxiosJson, ConditionRender, ContextMind, EventCounters, ForwardBut, Homepage, Issues, LifeCycleMedia, MyContext, MyStateComp, ScooterShop, StateUp, UseHooks, UserComp} from "./components";
import ConditionRender from "./components/ConditionRender";
import ContextMind from "./components/ContextMind";
import EventCounters from "./components/EventCounters";
import ForwardBut from "./components/ForwardBut";
import Homepage from "./components/Homepage";
import Issues from "./components/Issues";
import Login from "./components/Login";
import Profile from "./components/Profile";
import LifeCycleMedia from "./components/LifeCycleMedia";
import MyContext from "./components/MyContext";
import MyStateComp from "./components/MyStateComp";
import ScooterShop from "./components/ScooterShop";
import StateUp from "./components/StateUp";
import UseHooks from "./components/UseHooks";
import UserComp from "./components/UserComp";
import AxiosJson from "./components/AxiosJson";
import { useAuth } from "./AuthContext";


const { Paragraph } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const menu = (
  <Menu>
    <Menu.Item>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='http://www.alipay.com/'>
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='http://www.taobao.com/'>
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='http://www.tmall.com/'>
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => (
  <Dropdown key='more' overlay={menu}>
    <Button
      style={{
        border: "none",
        padding: 0,
      }}>
      <EllipsisOutlined
        style={{
          fontSize: 20,
          verticalAlign: "top",
        }}
      />
    </Button>
  </Dropdown>
);

const routes = [
  {
    path: "index",
    breadcrumbName: "First-level Menu",
  },
  {
    path: "first",
    breadcrumbName: "Second-level Menu",
  },
  {
    path: "second",
    breadcrumbName: "Third-level Menu",
  },
];

// listComponents.map((i, key) => import(`./components ${i.type.name}`));

const IconLink = ({ src, text }) => (
  <a className='example-link'>
    <img className='example-link-icon' src={src} alt={text} />
    {text}
  </a>
);
const content = (
  <>
    <Paragraph>
      Ant Design interprets the color system into two levels: a system-level
      color system and a product-level color system.
    </Paragraph>
    <Paragraph>
      Ant Design&#x27;s design team preferred to design with the HSB color
      model, which makes it easier for designers to have a clear psychological
      expectation of color when adjusting colors, as well as facilitate
      communication in teams.
    </Paragraph>
    <div>
      <IconLink
        src='https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg'
        text='Quick Start'
      />
      <IconLink
        src='https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg'
        text=' Product Info'
      />
      <IconLink
        src='https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg'
        text='Product Doc'
      />
    </div>
  </>
);

const ContentHead = ({ children, extraContent }) => (
  <Row>
    <div style={{ flex: 1 }}>{children}</div>
    <div className='image'>{extraContent}</div>
  </Row>
);

// function AuthGit() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <AuthContext.Provider
//       value={{
//         state,
//         dispatch
//       }}
//     >
//     <Router>
//       <Switch>
//       <Route path="/login" component={Login}/>
//         <Route path="/" component={Home}/>
//         <Route path="/issues" component={Issues}/>
//       </Switch>
//     </Router>
//     </AuthContext.Provider>
//   );
// }

const App = () => {
    // const [state, dispatch] = useReducer(reducer, initialState);

  const { state, dispatch } = useAuth();
  const { isLoggedIn, access_token, user } = state;
console.log(state);
  const listComponents = [
    <Homepage />,
    // <Login />,
    <Issues />,
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
  const menu = listComponents
    .filter((item) => {
      return item.type.name !== "Homepage";
    })
    .filter((item) => {
      return item.type.name !== "Issues";
    })
    .map((i) => (
      <Menu.Item key={i.type.name.toString()}>
        <NavLink to={"/" + i.type.name}>{i.type.name}</NavLink>
      </Menu.Item>
    ));

  return (
     <Layout>
        <Router>
          <nav>
            <Sider
              style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
              }}>
              <div className='logoP' />
              <Menu theme='dark' mode='inline' defaultSelectedKeys={["Homepage"]}>
                <Menu.Item key='Homepage' icon={<ShopOutlined />}>
                  <NavLink to='/'>Homepage</NavLink>
                </Menu.Item>
                <Menu.Item key='Issues' icon={<BarChartOutlined />} title='Issues'>
                  <NavLink to='/issues'>Issues</NavLink>
                </Menu.Item>
                <SubMenu
                  key='Components'
                  icon={<AppstoreOutlined />}
                  title='Components'>
                  {menu}
                </SubMenu>
              </Menu>
            </Sider>
          </nav>
          {/* <Route exact path="/login">
  {state.isloggedIn ? <Redirect to="/issues" /> : <Login/>}
</Route> */}
          <Switch>
          {/* <Route exact path="/login">
          {state.isLoggedIn === true ? <Redirect to="/issues" /> : "" }
          </Route> */}
            {/* <Redirect from='/' to='/HomePage/'></Redirect> */}
            {/* <Switch>
      <Route path="/login" component={Login}/>
        <Route path="/" component={Home}/>
             </Switch> */}

 
            <Layout className='site-layout' style={{ marginLeft: 200 }}>
              <Header
                className='site-layout-background'
                style={{ paddingRight: 24, textAlign: "right" }}>
                {state.isLoggedIn ? <Profile/> : <Login />}
              </Header>
              {listComponents.map((i, key) => {
                var io = require("!!raw-loader!./components/" +
                  i.type.name +
                  ".js");
                const [drawer, setDrawer] = useState(false);
                // const Comp = (i) => class Welcome extends React.Component {
                //   render() {
                //     return i;
                //   }
                // };
                var path = i.type.name === "Homepage" ? "/" : `/${i.type.name}`;
                return (
                  <Route exact path={path} key={key}>
                    <PageHeader
                      title={i.type.name}
                      className='site-page-header'
                      subTitle='This is a subtitle'
                      tags={<Tag color='blue'>Running</Tag>}
                      extra={[
                        <Button
                          key='3'
                          onClick={() => setDrawer(!drawer)}
                          icon={<SplitCellsOutlined />}>
                          Source react.JS
                        </Button>,
                        <Button key='2'>Operation</Button>,
                        <Button key='1' type='primary'>
                          Primary
                        </Button>,
                        <DropdownMenu key='more' />,
                      ]}
                      avatar={{
                        src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
                      }}
                      breadcrumb={{ routes }}>
                      <ContentHead
                        extraContent={
                          <img
                            src='https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg'
                            alt='content'
                            width='100%'
                          />
                        }>
                        {content}
                        <Drawer
                          title={i.type.name}
                          placement='left'
                          closable={true}
                          onClose={() => setDrawer(!drawer)}
                          visible={drawer}
                          width={500}
                          key={i.type.name}
                          extra={
                            <Space>
                              <Button
                                type='primary'
                                onClick={() => onCopy()}
                                icon={<CopyOutlined />}>
                                Копировать
                              </Button>
                            </Space>
                          }>
                          <Paragraph
                            type='text'
                            copyable
                            className='component-documentation'>
                            <CodeMirror
                              className='playground'
                              value={io.default}
                              options={{
                                readOnly: true,
                                theme: "monokai",
                                mode: "javascript",
                              }}
                            />
                          </Paragraph>
                        </Drawer>
                      </ContentHead>
                    </PageHeader>
                    <Content
                      style={{ margin: "24px 16px 0", overflow: "initial" }}>
                      <div
                        className='site-layout-background'
                        style={{ padding: 24, textAlign: "center" }}>
                        {i}
                        <br />
                        Really
                        <br />
                        <br />
                        content
                      </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                      React.js Course by Stanislav Pavenko ©2018 @Zhamkovv
                      Project
                    </Footer>
                  </Route>
                );
              })}
            </Layout>
            <Route path="/issues" component={Issues}/>
  


          </Switch>
        </Router>
      </Layout>
  );
};

export default App;
// import React from "react";

// import "./App.css";
// import logo from "./logo.svg";

// import MyStateComp from "./MyStateComp";
// import EventCounter from "./EventCouner";
// import UserComp from "./UserComp";
// import ForwardBut from "./ForwardBut";
// import ContextMind from "./ContextMind";
// import Routing from "./Routing";

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header hh1'>
//         <img src={logo} className='App-logo' alt='logo' />
//         <ForwardBut />
//         <MyStateComp />
//       </header>
//             <Routing />

//       <h1>Events Handling</h1>
//       <div className='Content'>
//         <EventCounter />
//         <EventCounter value='3' />
//         <EventCounter value='5' />
//         <EventCounter value='njwefkbca' />
//       </div>
//       <UserComp name='Events Handling with HoC props.name' />
//       <div className='Content'>
//         <h1>Context Mind</h1>
//         <ContextMind />
//       </div>
//     </div>
//   );
// }

// export default App
