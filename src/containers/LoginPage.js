import { connect } from "react-redux";
import React from "react";
import LoginForm from "../components/LoginForm";

import { postAuth } from "../actions/auth";
import { Redirect } from "react-router";

function LoginPage(props) {
  const { onSubmit, user } = props;

  if (user.token) {
    return <Redirect to="/send" />;
  }
  return (
    <React.Fragment>
      <LoginForm onSubmit={onSubmit} />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = {
  onSubmit: postAuth
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
