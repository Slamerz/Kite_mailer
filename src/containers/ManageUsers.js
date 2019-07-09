import { connect } from "react-redux";
import React, { Component } from "react";
import { fetchUsers } from "../actions";
import UsersPage from "../components/UsersPage";

class ManageUsers extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    const { users, usersLoading, usersError, match } = this.props;
    if (usersError) {
      return <div> ERROR! {usersError.error}</div>;
    }
    if (usersLoading) {
      return <div> Loading...</div>;
    }
    if (users) return <UsersPage users={users} match={match} />;
    else return <div />;
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  usersLoading: state.users.loading,
  usersError: state.users.error
});

export default connect(mapStateToProps)(ManageUsers);
