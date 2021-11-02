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
import React, { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AuthGit from "./AuthGit";
import AxiosJson from "./AxiosJson";
// import 'antd/lib/style/themes/default.less';
// import 'antd/dist/antd.less'; // Import Ant Design styles by less entry
import "./Code.less";
// import { ConditionRender,
//   ContextMind,
//   EventCounters,
//   ForwardBut,
//   Homepage,
//   Issues,
//   LifeCycleMedia,
//   MyContext,
//   MyStateComp,
//   ScooterShop,
//   StateUp,
//   UseHooks,
//   UserComp}
// import ConditionRender, from "./ConditionRender";
// import ContextMind, from "./ContextMind";
// import EventCounters, from "./EventCounters";
// import ForwardBut, from "./ForwardBut";
// import Homepage, from "./Homepage";
// import Issues, from "./Issues";
// import LifeCycleMedia, from "./LifeCycleMedia";
// import MyContext, from "./MyContext";
// import MyStateComp, from "./MyStateComp";
// import ScooterShop, from "./ScooterShop";
// import StateUp, from "./StateUp";
// import UseHooks, from "./UseHooks";
// import UserComp, from "./UserComp";

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

const listComponents = [
  <Homepage />,
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

const Routing = () => {
  const menu = listComponents
    .filter((item) => {
      return item.type.name !== "Homepage";
    })
    .filter((item) => {
      return item.type.name !== "Issues";
    })
    .map((i, key) => (
      <Menu.Item key={"1" + key}>
        <NavLink to={"/" + i.type.name}>{i.type.name}</NavLink>
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
            <Menu theme='dark' mode='inline' defaultSelectedKeys={["sub1"]}>
              <Menu.Item key='0' icon={<ShopOutlined />}>
                <NavLink to='/'>Homepage</NavLink>
              </Menu.Item>
              <Menu.Item key='1' icon={<BarChartOutlined />} title='Issues'>
                <NavLink to='/issues'>Issues</NavLink>
              </Menu.Item>
              <SubMenu
                key='sub1'
                icon={<AppstoreOutlined />}
                title='Components'>
                {menu}
              </SubMenu>
            </Menu>
          </Sider>
        </nav>

        <Switch>
          {/* <Redirect from='/' to='/HomePage/'></Redirect> */}
          <Route path="/login">
  {state.isloggedIn ? <Redirect to="/issues" /> : <Login/>}
</Route>
          <Layout className='site-layout' style={{ marginLeft: 200 }}>
            <Header
              className='site-layout-background'
              style={{ paddingRight: 24, textAlign: "right" }}>
              <AuthGit />
            </Header>
            {listComponents.map((i, key) => {

              var io = require("!!raw-loader!./" + i.type.name + ".js");
              import(`./${i.type.name}`);
              const [drawer, setDrawer] = useState(false);
              var path = (i.type.name === "Homepage") ? "/" : `/${i.type.name}`;
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
                      {/* <Playground
                        noRender={true}
                        collapsableCode
                        initiallyExpanded={false}
                        codeText={io.default.toString()}
                        scope={{React, i}}
                      /> */}
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
                    Ant Design ©2018 Created by Ant UED
                  </Footer>
                </Route>
              );
            })}
          </Layout>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
};

export default Routing;
