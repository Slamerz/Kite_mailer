import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class NavBarComp extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { open: false };
  }

  toggle() {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  }

  render() {
    console.log(this.props.dispatch);
    return (
      <Navbar className="navbar" theme="primary">
        <Button tag={Link} to="/homepage">
          {" "}
          Home{" "}
        </Button>
        <SearchBar />
        <NavBarBut>Go!</NavBarBut>
        <Dropdown
          open={this.state.open}
          toggle={this.toggle}
          className="d-table"
        >
          <DropdownToggle> Settings </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => this.props.logout()}>
              {" "}
              Logout{" "}
            </DropdownItem>
            <DropdownItem tag={Link} to="/edit-profile">
              {" "}
              Edit Profile{" "}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Navbar>
    );
  }
}



// export default NavBarComp;
export default connect(
  null,
)(NavBarComp);
