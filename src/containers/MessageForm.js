import React, { Component } from "react";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import OrderForm from "../components/OrderForm";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

//need file pond and import message form, and contact info as components
//use states, photo ids, file pond res assign to state
class MessageForm extends Component {
  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <form noValidate autoComplete="off">
          <OrderForm />
          <FilePond
            ref={ref => (this.pond = ref)}
            // files={this.state.photos}
            allowMultiple={true}
            maxFiles={10}
            server="/api/pictures"
            oninit={() => this.handleInit()}
            onupdatefiles={fileItems => {
              // Set current file objects to this.state
              this.setState({
                photos: fileItems.map(fileItem => fileItem.file)
              });
            }}
          />
          <Button type="submit">Submit</Button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  return { orders: state.orders };
};

export default connect(
  mapStatetoProps,
  null
)(MessageForm);
