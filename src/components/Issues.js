import {
  NotificationOutlined,
  SearchOutlined,
  LockOutlined,
  DislikeOutlined,
  LikeOutlined,
  InfoOutlined,
  EyeOutlined,
  SyncOutlined,
  FlagOutlined as CheckOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import {
  notification,
  Empty,
  Table,
  Row,
  Col,
  Divider,
  Badge,
  Button,
  Tag,
  Avatar,
  Input,
  Comment,
  Tooltip,
  Form,
  Drawer,
  Space,
  Typography,
} from "antd";
import axios from "axios";
import React, { Component, useContext, useEffect, useReducer } from "react";
import { Redirect } from "react-router-dom";
import Highlighter from "react-highlight-words";
import moment from "moment";
import { AuthContext, useAuth } from "../AuthContext";
import EditableTags from "./EditableTags";
import "../Code.less";
import Editor from "./Editor";
import { reducer, initialState } from "../store/reducer";

const { Paragraph } = Typography;
// var access_token = JSON.parse(localStorage.getItem("token"));
// var isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

// function checkAuth() {
//   const { state, dispatch } = useContext(AuthContext);

//   if (!state.isLoggedIn) {
//     return <Redirect to="/login" />;
//   }

//   const {
//     avatar_url,
//     name,
//     public_repos,
//     followers,
//     following,
//     html_url,
//     login,
//   } = state.user;
//   console.log(state.access_token);
//   console.log(state.user);
//   const handleLogout = () => {
//     dispatch({
//       type: 'LOGOUT',
//     });
//   };
// }
// if (!isLoggedIn || !access_token) {
//   return <Redirect to='/login' />;
// }

// const user = JSON.parse(localStorage.getItem("user"));

const DescriptionItem = ({ title, content }) => (
  <div className='site-description-item-profile-wrapper'>
    <span className='site-description-item-profile-p-label'>{title}</span>
    {content}
  </div>
);

const Issues = () => {
  return (
    <AuthContext.Consumer>
      {({ state }) => {
        console.log(state);
        return <Issue props={state} />;
      }}
    </AuthContext.Consumer>
  );
};
//   return isLoggedIn, token
// };
// auth();
class Issue extends Component {
  // static contextType = AuthContext;
  // static access_token = () => { let { state } = this.context;
  // let { token } = state;
  // console.log(token)
  // return token;}
  //   constructor(props){
  //     super(props)
  //     // this.access_token = this.context.state.token;
  // // }
  constructor(props) {
    super(props);
    const { isLoggedIn, user, token } = this.props.props;
  }
  //   console.log(this.props.props);
  //   this.state = {
  //     data: [],
  //     labels: [],
  //     comments: [],
  //     submitting: false,
  //     value: "",
  //     pagination: {
  //       current: 1,
  //       pageSize: 3,
  //     },
  //     searchText: "",
  //     searchedColumn: "",
  //     drawerVisible: false,
  //     drawerIssue: [],
  //     loading: true,
  //     childrenDrawer: false,
  //     isLoggedIn: isLoggedIn,
  //     token: token,
  //     user: user,
  //   };
  // }

  state = {
    data: [],
    labels: [],
    comments: [],
    submitting: false,
    value: "",
    pagination: {
      current: 1,
      pageSize: 3,
    },
    searchText: "",
    searchedColumn: "",
    drawerVisible: false,
    drawerIssue: [],
    loading: true,
    childrenDrawer: false,
    isLoggedIn: false,
    token: "",
    user: {},
  };
  // access_token = state.token;
  componentDidMount() {
    // let tokenz = this.context.state.token;
    // console.log(tokenz + "Бляха");
    // // this.setState(=> ({tokenz}));
    // this.setState(() => ({
    //   loading: true,
    // }));
    this.checkLogin();
    // this.checkAuth;
    const { pagination } = this.state;
    // tokenz
    //   ? this.fetch({ pagination }, tokenz)
    //   : (
    this.fetch({ pagination });
    //     ,
    //     this.openNotification(
    //       "Вы не авторизованы!",
    //       "Для добавления авторизуйтесь через аккаунт GitHub"
    //     ));
    // let tokenz = this.context.state.token;
    // console.log(tokenz+"Бляха");
    // this.setState(() => ({user: this.context.state.user, isLoggedIn: this.context.state.isLoggedIn, token: tokenz}));
    // const { pagination } = this.state;
    // this.fetch({ pagination }, tokenz);
  }

  // componentDidUpdate() {
  //   // let { state }= this.context;
  //   console.log(this.context + "Бляха2");
  //   // this.checkLogin();
  // // }
  //   const { pagination } = this.state;
  //   this.fetch({ pagination })
  // }
  checkLogin = () => {
    let { props } = this.props;
    let { isLoggedIn, token, user } = props;
    this.setState({
      isLoggedIn: isLoggedIn,
      user: this.props.props.user,
      token: this.props.props.token,
    });
  };
  //     // let { loginStore } = this.props;
  //     // const { isLoggedIn, user, token } = this.props;

  //     console.log("Did Mount this.props in checkLogin");
  //     console.log(this.props.props);
  //     const { isLoggedIn, token, user } = this.props.props;
  // console.log(isLoggedIn, user, token);

  //     console.log("Before set props to state");
  //     console.log(this.state);

  //     console.log("After set props to state");
  //     console.log(this.state);
  //     // !isLoggedIn
  //     //   ? (() =>
  //     //       this.openNotification([
  //     //         "Вы не авторизованы!",
  //     //         "Для добавления авторизуйтесь через аккаунт GitHub"
  //     //       ]),
  //     //     setTimeout(() => <Redirect to='/login' />, 5000))
  //     //   : () =>
  //     //       this.openNotification(
  //     //         "Вы авторизованы!",
  //     //         "Для добавления через аккаунт GitHub"
  //     //       );

  //     // let { state } = this.context;
  //     // () => this.setState({
  //     //     user: state.user,
  //     //     isLoggedIn: state.isLoggedIn,
  //     //     token: state.token,
  //     //   })
  //     // (state) => this.setState({ user: state.user, isLoggedIn: state.isLoggedIn, token: state.token});
  //   };

  checkAuth = () => {
    // const { isLoggedIn, token, user } = this.props.props;
    // this.props.props.isLoggedIn === false
    //   ? (this.openNotification(
    //         "Вы не авторизованы!",
    //         "Для добавления авторизуйтесь через аккаунт GitHub"
    //       ),
    //     setTimeout(() => <Redirect to='/login' />, 5000))
    //   : () =>
    //       this.openNotification(
    //         "Вы авторизованы!",
    //         "Для добавления через аккаунт GitHub"
    //       );
  };

  // componentDidUpdate(prevProps) {
  //    () => { if (this.props.props == !this.prevProps.props) return true};
  // }
  // ---------------------------------------------------------ISSUE_SEARCH-------------------ISSUE_SEARCH-------------------ISSUE_SEARCH
  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
            console.log(this.searchInput);
          }}
          placeholder={`Поиск ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='middle'
            style={{ width: 100 }}>
            Искать
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size='middle'
            style={{ width: 80 }}>
            Сброс
          </Button>
          <Button
            type='link'
            size='middle'
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}>
            Фильтр
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#3fcbcd" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          this.searchInput.select();
        }, 50);
      }
    },
    render: (text) =>
      (this.state.searchedColumn || null) === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#3fcbcd", padding: 0 }}
          searchWords={this.state.searchText}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };
  //-------------------------------------------------------------------------------------------------------

  handleTableChange = (pagination, sorter, filters) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
      pagination,
    });
  };

  //-----------------------------------------DRAWER-------------------DRAWER---------------------DRAWER----------------
  showDrawer = (row) => {
    this.getComments(row.comments_url);
    this.setState({
      drawerVisible: true,
      drawerIssue: row ? row : [],
    });
  };

  onClose = () => {
    {
      console.log(this.state.drawerIssue.assignees);
    }
    this.setState({
      drawerVisible: false,
      drawerIssue: [],
    });
  };

  //----------------------------------CHILDREN_DRAWER-------------------CHILDREN_DRAWER-------------------CHILDREN_DRAWER----------------
  showPostcomment = () => {
    this.setState({ childrenDrawer: true });
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    this.postComment(this.state.drawerIssue.comments_url, {
      body: this.state.value,
    });
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  //-----------------------------------------FETCH-------------------FETCH---------------------FETCH----------------

  fetch = (params = { pagination }) => {
    let tokens = this.state.token || this.props.props.token || token;
    axios
      .get("https://cors-anywhere.herokuapp.com/https://api.github.com/issues?filter=all&state=all", {
        headers: {
          Authorization: `Token ${tokens}`,
          Accept: "application/vnd.github.v3+json",
        },
      })
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({
          data: data,
          labels: Array.from(
            new Set(
              data
                .map((i) => i.labels)
                .flat()
                .map((label) => label.name)
            )
          ),

          pagination: {
            ...params.pagination,
            total: data.length,
          },
          loading: false,
          
        });
      })
      .catch((err) => {
        // this.setState({
        //   ...this.state,
        //   data: [],
        //   labels: [],
        //   pagination: {
        //     ...params.pagination,
        //     total: 0,
        //   },
        //   loading: false,
        // });
        this.catchError(err, "loading");
      });
  };

  fetchPublic = (params = { pagination }) => {
    // let tokens = this.context.state.client_id;
    axios
      .get(`https://api.github.com/repos/zhamkovv/stateprop/issues`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      })
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({
          ...this.state,
          data: data,
          labels: Array.from(
            new Set(
              data
                .map((i) => i.labels)
                .flat()
                .map((label) => label.name)
            )
          ),
          pagination: {
            ...params.pagination,
            total: data.length,
          },
          loading: false,
        });
      })
      .catch((err) => {
        // this.setState(() => ({
        //   ...this.state,
        //   data: [],
        //   labels: [],
        //   pagination: {
        //     ...params.pagination,
        //     total: 0,
        //   },
        //   loading: false,
        // }));
        this.catchError(err, "loading");
      });
  };

  getComments = (url) => {
    axios
      .get(url, {
        headers: {
          authorization: "Token " + this.state.token,
          Accept: "application/json",
        },
      })
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          comments: data,
          submitting: false,
        });
      })
      .catch((err) => this.catchError(err, "submitting"));
  };

  postComment = (url, change) => {
    axios
      .post(`https://cors-anywhere.herokuapp.com/${url}`, change, {
        headers: {
          authorization: "Token " + this.state.token,
          Accept: "application/json",
        },
      })
      .then((result) => result.data)
      .then((data) => {
        this.setState({
          submitting: false,
          value: "",
          comments: [...this.state.comments, data],
          drawerIssue: {
            ...this.state.drawerIssue,
            comments: this.state.drawerIssue.comments + 1,
          },
          childrenDrawer: false,
        });
        this.fetch(this.state.pagination);
        this.openNotification(`Успешно обновлено!`, change);
      })
      .catch((err) => this.catchError(err, "submitting"));
  };

  lockIssue = (url, method, data) => {
    axios(`https://cors-anywhere.herokuapp.com/${url}`, {
      method: method,
      headers: {
        Authorization: `Token ${this.state.token}`,
        Accept: "application/vnd.github.v3+json",
      },
      data: data,
    })
      .then((response) => {
        console.log(response);
        this.setState({
          drawerIssue: [
            {
              // ...this.state.drawerIssue,
              active_lock_reason: change["lock_reason"],
              locked: change["lock_reason"] ? 1 : 0,
            },
          ],
        });
        // this.fetch(this.state.pagination);
        this.openNotification(
          `Изменен признак блокировки`,
          data || "Снята блокировка"
        );
      })
      .catch((err) => this.catchError(err, "submitting"));
    // .then(console.log(this.state));
  };

  patchIssue = (url, change) => {
    axios
      .patch(`https://cors-anywhere.herokuapp.com/${url}`, change, {
        headers: {
          authorization: "Token " + this.state.token,
          Accept: "application/json",
        },
      })
      .then((result) => result.data)
      .then((data) => {
        this.setState({
          drawerIssue: data,
          submitting: false,
        });
        //  this.fetch(this.state.pagination);
        this.openNotification(`Успешно обновлен статус! `, change);
      })
      .catch((err) => this.catchError(err, "submitting"));
  };

  //-----------------------------------------CATCH ERROR-------------------CATCH ERROR------------------CATCH ERROR-------------
  catchError = (err, s) => {
    err = err || null;
    s = s ? { [`${s}`]: false } : null;
    console.log(s);
    this.setState(s);

    if (err && err.response && err.response.status === 401) {
      // this.checkAuth();
      this.openNotification("Ошибка 401", "Авторизационна ошибка");
    }
    if (err && err.response && err.response.status === 403) {
      // this.checkAuth();
      this.openNotification(
        "Ошибка 403",
        "Скорее всего ошибка с демо прокси-сервером для CORS запросов. Перейдите по ссылке <a href='https://cors-anywhere.herokuapp.com/corsdemo' target='_blank'>https://cors-anywhere.herokuapp.com/corsdemo</a>"
      );
    }
    if (err.response) {
      // Request made and server responded

      this.openNotification(`Ошибка ответа ${err.response.status}`, {
        Data: err.response.data,
        Headers: err.response.headers,
      });
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.request) {
      // The request was made but no response was received
      this.openNotification(`Request error`, JSON.stringify(err.request));
      console.log(JSON.stringify(err.request));
    } else {
      // Something happened in setting up the request that triggered an Err
      this.openNotification("Unknown Error", JSON.stringify(err));
      console.log("Unknown Error^" + JSON.stringify(err));
    }
  };
  //---------------------------------------------------------------NOTIFICATION----------------------------------------
  openNotification = ({ message, desc }) => {
    notification.open({
      message: message ? message.toString() : "Залупа1",
      description: desc ? desc.toString() : "Залупа2",
      placement: "bottomLeft",
      duration: 10,
      icon: <InfoOutlined style={{ color: "#108ee9" }} />,
    });
  };

  render() {
    // let { loginStore } = this.props;
    const { props } = this.props;
    // const isLoggedInS = loginStore.isLoggedIn;
    // console.log("Render got it store from props Consumer:" + { loginStore });
    // console.log("Before setprops to state" + Object.entries(this.state).flat(3).toString());
    // () => this.setState({ isLoggedIn: this.props.isLoggedIn, user: this.props.user, token: this.props.token });
    //       console.log("After setprops to state");
    console.log(this.state);
    console.log(props);
    //   const access_token = token;
    // const { isLoggedIn, token } = state;
    // console.log(isLoggedIn, token);

    // let { isLoggedIn, token } = this.context.state;
    // const access_token  = this.context.state.token || '5b1fea7a96f8135b957f';
    // this.setState ({...this.state, token: access_token} );
    // console.log(access_token);
    // console.log(this.state);
    // () => this.setState({...state, user: () => this.context.state.user, isLoggedIn: this.context.state.isLoggedIn, token: ()=>this.context.state.token});

    const {
      data,
      pagination,
      loading,
      drawerVisible,
      drawerIssue,
      comments,
      submitting,
      labels,
      value,
      childrenDrawer,
      isLoggedIn,
      token,
      user,
    } = this.state;

    // var {} = this.state;
    //  const { user,
    //     isLoggedIn,
    //     token,} = this.context.state;
    // this.setState({user,isLoggedIn, token})
    const columns = [
      {
        title: "",
        dataIndex: "number",
        sorter: (a, b) => a.number - b.number,
      },
      {
        title: "",
        dataIndex: "state",
        filters: [
          { text: "Open", value: "open" },
          { text: "Closed", value: "closed" },
          { text: "Locked", value: "Locked" },
        ],
        onFilter: (value, record) =>
          record.state.indexOf(value) === 0 ||
          (value === "Locked" && record.active_lock_reason),
        render: (state, row) => (
          <>
            {state === "open" ? (
              <Tooltip
                title={moment(row.created_at).format("YYYY-MM-DD в HH:mm")}>
                <Tag color='success'>Open</Tag>
              </Tooltip>
            ) : (
              <Tooltip
                title={moment(row.closed_at).format("YYYY-MM-DD в HH:mm")}>
                <Tag color='error'>Closed</Tag>
              </Tooltip>
            )}
            {row.active_lock_reason ? (
              <Tag color='default'>
                <LockOutlined /> {row.active_lock_reason}
              </Tag>
            ) : (
              ""
            )}
          </>
        ),
      },
      {
        title: "Issue",
        dataIndex: "title",
        key: "title",
        sorter: (a, b) => a.title.localeCompare(b.title),
        ...this.getColumnSearchProps("title"),
        render: (title, row) => (
          <>
            {title}
            {row.active_lock_reason ? (
              <Tag color='default'>
                <LockOutlined /> {row.active_lock_reason}
              </Tag>
            ) : (
              ""
            )}
          </>
        ),
        width: "30%",
      },
      {
        title: "Labels",
        dataIndex: "labels",
        key: "labels",
        // ...this.getColumnSearchProps('row.labels.name'),
        render: (labels) => (
          <EditableTags tags={labels.map((i) => i.name)}></EditableTags>
        ),
        filters: !this.state.labels
          ? ""
          : this.state.labels.map((name) => ({
              text: `${name}`,
              value: `${name}`,
            })),
        filterSearch: true,
        onFilter: (value, record) =>
          record.labels
            .map((i) => i.name)
            .toString()
            .includes(value),
      },
      // {
      //   title: 'Date',
      //   dataIndex: 'created_at',
      //   // filters: [
      //   //   { text: 'Open', value: 'open' },
      //   // ],
      // },

      {
        title: "Created",
        dataIndex: "user",
        sorter: true,
        render: (u, row) => (
          <Comment
            author={<a href={u.html_url}>{u.login}</a>}
            avatar={<Avatar src={u.avatar_url} />}
            datetime={
              <Tooltip
                title={moment(row.created_at).format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment(row.created_at).fromNow()}</span>
              </Tooltip>
            }
          />
        ),
      },
      {
        title: "",
        colSpan: 1,
        dataIndex: "comments",
        render: (comments, row) => (
          <Space size='small'>
            <Button
              type='secondary'
              icon={<EyeOutlined />}
              onClick={() => this.showDrawer(row)}
            />
            <Badge size='middle' count={comments} showZero>
              <Button
                type='secondary'
                icon={<NotificationOutlined />}
                onClick={() => this.showDrawer(row)}
                // disabled={comments === 0}
              />
            </Badge>
            <Button
              type='secondary'
              path={row.html_url}
              icon={<GithubOutlined />}
            />
            {row.state === "open" ? (
              <Button type='primary' icon={<CheckOutlined />}>
                Close
              </Button>
            ) : (
              <Button type='primary' ghost icon={<SyncOutlined />}>
                Open
              </Button>
            )}
          </Space>
        ),
      },
    ];

    // Drawer Content -----------------------------------ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    var dbody = "Form mazfka";
    var title = "Title mzjkf";

    const actions = (like, dis) => [
      <Tooltip key='comment-basic-like' title='Like'>
        <span>
          {/* {createElement(action === 'liked' ? LikeFilled : LikeOutlined)} */}
          <span className='comment-action'>
            <LikeOutlined /> {like}
          </span>
        </span>
      </Tooltip>,
      <Tooltip key='comment-basic-dislike' title='Dislike'>
        <span>
          {/* {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)} */}
          <span className='comment-action'>
            <DislikeOutlined /> {dis}
          </span>
        </span>
      </Tooltip>,
      <span
        key='comment-basic-reply-to'
        onClick={() => this.setState({ childrenDrawer: true })}>
        Reply to
      </span>,
    ];

    drawerIssue.length == 0
      ? ""
      : ((title = drawerIssue.title),
        (dbody = (
          <>
            <Row style={{ margin: "0 0 12px" }}>
              <Col span={24} align='left'>
                <Space>
                  <Button
                    type='secondary'
                    path={drawerIssue.html_url}
                    icon={<GithubOutlined />}>
                    GitHub
                  </Button>
                  <Badge size='small' count={drawerIssue.comments} showZero>
                    <Button
                      type='dashed'
                      icon={<NotificationOutlined />}
                      onClick={() => this.setState({ childrenDrawer: true })}
                      disabled={drawerIssue.comments === 0}>
                      New comment
                    </Button>
                  </Badge>
                </Space>
              </Col>
            </Row>
            <Divider style={{ margin: "24px 0px 12px 0px" }} size='small' />
            <Row>
              <Col span={12}>
                <DescriptionItem
                  title='Assignee'
                  content={
                    drawerIssue.assignees && drawerIssue.assignees.length > 0
                      ? drawerIssue.assignees.map((drawerIssue) => (
                          <a href={drawerIssue.html_url}>
                            <Avatar src={drawerIssue.avatar_url} />
                            {drawerIssue.login}
                          </a>
                        ))
                      : "No one assigned"
                  }
                />
              </Col>
              <Col span={12}>
                <DescriptionItem
                  title='Status'
                  content={
                    <>
                      {drawerIssue.state === "open" ? (
                        <Tooltip
                          title={moment(drawerIssue.created_at).format(
                            "YYYY-MM-DD в HH:mm"
                          )}>
                          <Tag color='success'>Open</Tag>
                        </Tooltip>
                      ) : (
                        <Tooltip
                          title={moment(drawerIssue.closed_at).format(
                            "YYYY-MM-DD в HH:mm"
                          )}>
                          <Tag color='error'> Closed </Tag>
                        </Tooltip>
                      )}
                      {drawerIssue.active_lock_reason ? (
                        <Tooltip
                          title={moment(drawerIssue.closed_at).format(
                            "YYYY-MM-DD в HH:mm"
                          )}>
                          <Tag color='default'>
                            <LockOutlined /> Lock for{" "}
                            {drawerIssue.active_lock_reason}
                          </Tag>
                        </Tooltip>
                      ) : (
                        ""
                      )}
                    </>
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem
                  title='Created'
                  content={
                    <Tooltip
                      title={moment(drawerIssue.created_at).format(
                        "YYYY-MM-DD HH:mm:ss"
                      )}>
                      <span>{moment(drawerIssue.created_at).fromNow()}</span>
                    </Tooltip>
                  }
                />
              </Col>
              <Col span={12}>
                <DescriptionItem
                  title='Updated'
                  content={
                    <Tooltip
                      title={moment(drawerIssue.updated_at).format(
                        "YYYY-MM-DD HH:mm:ss"
                      )}>
                      <span>{moment(drawerIssue.updated_at).fromNow()}</span>
                    </Tooltip>
                  }
                />
              </Col>
            </Row>
            <Divider style={{ margin: "24px 0" }} />
            <Row>
              <Col span={24} style={{ lineHeight: 1.68, margin: "0px 0 0" }}>
                {drawerIssue.body}
              </Col>
            </Row>
            <Row>
              <Col span={23} offset={1} style={{ margin: "24px 0 24px" }}>
                <EditableTags
                  tags={
                    drawerIssue.labels
                      ? drawerIssue.labels.map((i) => i.name)
                      : ""
                  }></EditableTags>
              </Col>
            </Row>
            <Divider orientation='left' style={{ margin: "0px 0 0px" }}>
              Comments
            </Divider>
            {comments.length > 0 ? (
              comments.map((i) => (
                <Comment
                  key={i.id}
                  actions={actions(i.reactions["+1"], i.reactions["-1"])}
                  author={<a>{i.user.login}</a>}
                  avatar={<Avatar src={i.user.avatar_url} alt={i.user.name} />}
                  content={<p>{i.body}</p>}
                  datetime={
                    <Tooltip
                      title={moment(i.created_at).format(
                        "YYYY-MM-DD HH:mm:ss"
                      )}>
                      <span>{moment(i.created_at).fromNow()}</span>
                    </Tooltip>
                  }
                />
              ))
            ) : (
              <Empty
                image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                imageStyle={{
                  height: 45,
                }}
                description={
                  <span>No comments yet, you're can be first!</span>
                }></Empty>
            )}
            <Row>
              <Col span={24} style={{ lineHeight: 1.68, margin: "0px 0 0" }}>
                <Button type='primary' onClick={() => this.showPostcomment()}>
                  Comment now!
                </Button>
              </Col>
            </Row>
            <Drawer
              title='Comment this out!'
              width='42%'
              closable={true}
              onClose={() => this.setState({ childrenDrawer: false })}
              visible={childrenDrawer}>
              <Comment
                avatar={<Avatar src={user.avatar_url} alt={user.login} />}
                content={
                  !isLoggedIn ? (
                    <Paragraph type='secondary'>
                      Login into ypur GitHub account to coment this
                    </Paragraph>
                  ) : (
                    <Editor
                      onChange={() => this.handleChange}
                      onSubmit={() => this.handleSubmit}
                      submitting={submitting}
                      value={value}
                    />
                  )
                }
              />
            </Drawer>
          </>
        )));

    return (
      <>
        <Table
          columns={columns}
          rowKey={(record) => record.node_id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={() => this.handleTableChange()}
          size='middle'
        />
        {
          (this.state.isLoggedIn || "пустошь в стейте") + (
          this.props.props.isLoggedIn || "пустошь в пропсах контекста")
        }
        <Drawer
          onClose={() => this.onClose()}
          visible={drawerVisible}
          title={title}
          placement='right'
          closable={true}
          width='42%'
          footer={
            <Row style={{ margin: "24px 0" }}>
              <Col span={12}>
                <Button
                  size='large'
                  type='secondary'
                  path={drawerIssue.html_url}
                  onClick={() => this.onClose()}>
                  Cancel
                </Button>
              </Col>
              <Col span={12} align='right'>
                <Space size='middle' justify='end' align='start'>
                  {drawerIssue.state === "open" ? (
                    <Button
                      size='large'
                      type='primary'
                      icon={<CheckOutlined />}
                      loading={submitting}
                      onClick={() => {
                        this.setState({ submitting: true });
                        drawerIssue.locked
                          ? ""
                          : this.lockIssue(`${drawerIssue.url}/lock`, "PUT", {
                              lock_reason: "resolved",
                            });
                        this.patchIssue(drawerIssue.url, { state: "closed" });
                      }}>
                      Close & Lock
                    </Button>
                  ) : (
                    <Button
                      type='dashed'
                      icon={<SyncOutlined />}
                      loading={submitting}
                      onClick={() => {
                        this.setState({ submitting: true });
                        drawerIssue.locked
                          ? this.lockIssue(`${drawerIssue.url}/lock`, "DELETE")
                          : "";
                        this.patchIssue(drawerIssue.url, { state: "open" });
                      }}>
                      Unlock & Open
                    </Button>
                  )}
                </Space>
              </Col>
            </Row>
          }>
          {dbody}
        </Drawer>
      </>
    );
  }
}
// return <TableIssues/>
// Issue.contextType = AuthContext;

export default Issues; // // const AuthGit =() => {
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

//     const { results, setResults } = useState([]);
//     let response = await axios.get(
//         "https://api.github.com/issues",
//         {
//             headers: {
//                 "Authorization": access_token,
//             },
//         }
//     )
//     setResults({
//         results: response.data
//     })
//     console.log(response.data);
//     return response.data
// }
