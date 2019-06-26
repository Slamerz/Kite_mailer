import React, { Component } from "react";
import { connect } from "react-redux";



class LoginForm extends Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
      <div className="loginbackground">
        <h1 style={{ "font-family": "times new roman" }} class="loginheader">
          Qwitter
        </h1>
        <div class="loginformholder">
          <form onSubmit={this.handleLogin}>
            <label class="userlabel" htmlFor="username">
              Username: &nbsp;
            </label>
            <input
              class="inputlogin"
              type="text"
              name="username"
              placeholder="Enter your username"
              autoFocus
              required
              onChange={this.handleChange}
              />
            <br />
            <label class="userlabel" htmlFor="password">
              Password: &nbsp;
            </label>
            <input
              class="inputlogin"
              type="password"
              name="password"
              required
              onChange={this.handleChange}
              />
            <br />
            <Button class="loginbutton" type="submit" disabled={isLoading}>
              Login
            </Button>
            <br />
            <br />
          </form>
          <div class="registerbutton">
            <CollapseLoginButton />
          </div>
        </div>
        {isLoading && <Spinner name="circle" color="blue" />}
        {err && <p style={{ color: "red" }}>{err}</p>}
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError
  }),
  { login }
)(LoginForm);
