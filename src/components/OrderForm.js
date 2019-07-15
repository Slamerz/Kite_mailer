import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { formDataChange } from "../actions/formDataChange";

class OrderForm extends Component {
  render() {
    return (
      <React.Fragment>
        <TextField
          label="Addressee ID #"
          margin="normal"
          // className={classes.textField}
          style={{ width: 200, marginLeft: 2, marginRight: 2 }}
          name="addresseeId"
          onChange={e =>
            this.props.formDataChange([e.target.name, e.target.value])
          }
        />
        <TextField
          label="Facility Name"
          margin="normal"
          // className={classes.textField}
          style={{ width: 200, marginLeft: 2, marginRight: 2 }}
          name="facilityName"
          onChange={e =>
            this.props.formDataChange([e.target.name, e.target.value])
          }
        />
        <TextField
          label="Addressee First Name"
          margin="normal"
          // className={classes.textField}
          style={{ width: 200, marginLeft: 2, marginRight: 2 }}
          name="firstName"
          onChange={e =>
            this.props.formDataChange([e.target.name, e.target.value])
          }
        />
        <TextField
          label="Addressee Last Name"
          margin="normal"
          // className={classes.textField}
          style={{ width: 200, marginLeft: 2, marginRight: 2 }}
          name="lastName"
          onChange={e =>
            this.props.formDataChange([e.target.name, e.target.value])
          }
        />
        <TextField
          label="Addressee Address"
          margin="normal"
          // className={classes.textField}
          style={{ width: 200, marginLeft: 2, marginRight: 2 }}
          name="address"
          onChange={e =>
            this.props.formDataChange([e.target.name, e.target.value])
          }
        />
        <TextField
          label="Unit ID"
          margin="normal"
          // className={classes.textField}
          style={{ width: 200, marginLeft: 2, marginRight: 2 }}
          name="unit"
          onChange={e =>
            this.props.formDataChange([e.target.name, e.target.value])
          }
        />
        <TextField
          label="Include a Message"
          margin="normal"
          // className={classes.textField}
          style={{ width: 200, marginLeft: 2, marginRight: 2 }}
          name="message"
          onChange={e =>
            this.props.formDataChange([e.target.name, e.target.value])
          }
        />
        <br />
        <br />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = { formDataChange };

export default connect(
  null,
  mapDispatchToProps
)(OrderForm);
