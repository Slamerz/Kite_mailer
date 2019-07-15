import React, { Component } from "react";
import OrderForm from "../components/OrderForm";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { placeOrder } from "../actions/placeOrder";
import { Redirect } from "react-router";

//need file pond and import message form, and contact info as components
//use states, photo ids, file pond res assign to state
class MessageForm extends Component {
  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }

  componentDidMount() {
    placeOrder();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.placeOrder(this.props.formData);
  };

  render() {
    const { user } = this.props;

    if (user.token) {
      return (
        <React.Fragment>
          <form
            noValidate
            autoComplete="off"
            action="/api/pictures"
            encType="multipart/formdata"
          >
            <OrderForm />
            <br />
            <input type="file" name="photos" multiple />
            <br />
            <Button type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </form>
        </React.Fragment>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStatetoProps = state => ({
  orders: state.orders,
  formData: state.formData,
  user: state.auth.user
});

const mapDispatchtoProps = {
  placeOrder
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(MessageForm);
