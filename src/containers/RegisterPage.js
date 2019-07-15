import { connect } from "react-redux";
import React from "react";
import RegisterForm from "../components/RegisterForm";

import { postUser } from "../actions";
import {Redirect} from "react-router";

function RegisterPage(props) {
    const {onSubmit, user} = props;
    if(user.token){
        return (<Redirect to="/send"/>)
    }
  return (
    <React.Fragment>
      <RegisterForm onSubmbit={onSubmit} />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
    user: state.auth.user
});
const mapDispatchToProps = {
  onSubmit: postUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);
