import { connect } from "react-redux";
import React, { Component } from "react";
import RegisterForm from "../components/RegisterForm";
import NavBar from "../components/NavBar";
import {postUser} from "../actions";



class RegisterPage extends Component {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <RegisterForm onSub={this.props.onSub} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = {
  onSub: postUser
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
