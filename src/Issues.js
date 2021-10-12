// import "antd/dist/antd.css";
// import axios from "axios";
// import React,{
//   useContext,
//   useState,
// } from "react";
// import { Redirect } from "react-router-dom";
// // import Styled from "styled-components";
// import { AuthContext } from "./AuthGit";
// import "./App.css";

// export default function Issues() {
//   const { state, dispatch } = useContext(AuthContext);

//   const [idata, setIdata] = useState([]);
//   if (!state.isLoggedIn) {
//     return <Redirect to='/login' />;
//   }
  
// // ААААААААААААААААААаааа все просто но тупо.... где емучий аксесс токен сраный запарилт бляха.... надо отдохнуть
// //   headers: {
// //     Authorization: `token ${access_token}`,
// //   },


//   const getIssues = async () => {
//     axios
//       .get("https://api.github.com/issues")
//       .then((response) => setIdata(response.data));
//     console.log(idata);
//     return idata;
//   };
//   console.log(getIssues);
//   return getIssues();
// }

// //     const { results, setResults } = useState([]);
// //     let response = await axios.get(
// //         "https://api.github.com/issues",
// //         {
// //             headers: {
// //                 "Authorization": access_token,
// //             },
// //         }
// //     )
// //     setResults({
// //         results: response.data
// //     })
// //     console.log(response.data);
// //     return response.data
// // }

// // const AuthGit =() => {
// //     return (
// //     <Popover content={Auth} title="Title">
// //       <Button type="primary">Hover me</Button>
// //     </Popover>
// //     )
// //   }

// // const withPage = (Component) => {
// //     const WrapperPage = (props) => (
// //       <>
// //         <h1>{Component.name}</h1>
// //         <div>
// //           {Component}
// //           {Component.props}
// //         </div>
// //       </>
// //     );
// //     return WrapperPage;
// //   };
// // const HomepageComponent = withPage(Homepage);
// //   const getDisplayName = (WrappedComponent) => {
// //     return WrappedComponent.displayName || WrappedComponent.name || "Component2";
// //   };

// //   const Name2 = getDisplayName(HomepageComponent);
// //   console.log(listComponents);
// //   console.log(listComponents[3].type.name);
// //   console.log(Name2);
// //   activeStyle={{ fontWeight: "bold" }}
// // <div className='App'>
// //       <header className='App-header'>
// //         <img src={logo} className='App-logo' alt='logo' />
// //         <h1>Components Feed</h1>
// //       </header>
// //       <div className='App'>
// //         <BrowserRouter>
// //           <nav>
// //             <div className='App-menu'>{menu}</div>
// //           </nav>
// //           <Switch>
// //
// //           </Switch>
// //           <Redirect from='/123' to='/HomePage/'></Redirect>
// //         </BrowserRouter>
// //       </div>
// //     </div>

// // import React from 'react';
// // import ReactDOM from 'react-dom';

// // import { LikeOutlined } from '@ant-design/icons';
// // import { Countdown, Statistic, Row, Col, Space, Modal, Button } from 'antd';

// // import 'antd/dist/antd.css';
// // import './style.css';
// // const { Countdown } = Statistic;
// // const deadline = 1630130604387 - 1000 * 60*3; // Moment is also OK

// // function onFinish() {
// //   console.log('finished!');
// // }

// // function onChange(val) {
// //   if (4.95 * 1000 < val && val < 5 * 1000) {
// //     console.log('changed!');
// //   }
// // }

// // class App extends React.Component {
// //   state = {
// //     loading: false,
// //     visible: false
// //   };

// //   showModal = () => {
// //     this.setState({
// //       visible: true
// //     });
// //   };

// //   handleOk = () => {
// //     this.setState({ loading: true });
// //     setTimeout(() => {
// //       this.setState({ loading: false, visible: false });
// //     }, 3000);
// //   };

// //   handleCancel = () => {
// //     this.setState({ visible: false });
// //   };

// //   render() {
// //     const { visible, loading } = this.state;
// //     return (
// //       <>
// //         <div className="space-align-container">
// //           <div className="space-align-block">
// //             <Space align="center">
// //               <span className="mock-block">
// //                 <Button type="primary" onClick={this.showModal}>
// // Успел? Сколько времени до 9 утра?                </Button>
// //               </span>
// //             </Space>
// //           </div>
// //         </div>
// //         <Modal
// //           visible={visible}
// //           title={"До лекции осталось в мс с 23.55 вчера: " + deadline}
// //           onOk={this.handleOk}
// //           onCancel={this.handleCancel}
// //           footer={[
// //             <Button key="back" onClick={this.handleCancel}>
// //               В мс это {deadline}
// //             </Button>,
// //             <Button
// //               key="submit"
// //               type="primary"
// //               loading={loading}
// //               onClick={this.handleOk}
// //             >
// //               Ладно, 5!
// //             </Button>,
// //             <Button
// //               key="link"
// //               href="https://google.com"
// //               type="primary"
// //               loading={loading}
// //               onClick={this.handleOk}
// //             >
// //              Ишь ты, ладно, 5+!!!
// //             </Button>
// //           ]}
// //         >
// //           <Row gutter={16}>
// //             <Col span={12}>
// //             <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
// //               <Statistic
// //                 title="Feedback"
// //                 value={1128}
// //                 prefix={<LikeOutlined />}
// //               />
// //             </Col>
// //             <Col span={12}>
// //               <Statistic title="Unmerged" value={93} suffix="/ 100" />
// //             </Col>
// //           </Row>
// //         </Modal>
// //       </>
// //     );
// //   }
// // }


    // "body-parser": "^1.19.0",
    // "concurrently": "^5.1.0",
    // "dotenv": "^8.2.0",
    // "express": "^4.17.1",
    // "form-data": "^3.0.0",
    // "mdi-react": "^7.0.0",
    // "nodemon": "^2.0.13",


//     ,
//   "devDependencies": {
//     "joi": "^17.2.1",
//     "nodemon": "^2.0.13"
//   }