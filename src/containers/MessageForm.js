import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import { FilePond, registerPlugin } from "react-filepond";
import React, { Component } from "react";

import { Button } from "@material-ui/core";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import OrderForm from "../components/OrderForm";
import { connect } from "react-redux";
import { domain } from "../actions/constants";
import { placeOrder } from "../actions/placeOrder";
import { Redirect } from "react-router";
import { formDataChange } from "../actions/formDataChange";

//allows file pond to display previews, and validates image file types

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginFileEncode
);

const url = domain + "/api/pictures";

class MessageForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.placeOrder(this.props.formData);
  };

  //shows file pond instance is running

  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }

  render() {
    const { user, formDataChange } = this.props;

    if (user.token) {
    return (
      <React.Fragment>
        <form
          noValidate
          method="post"
          autoComplete="off"
          action="/api/orders"
          encType="multipart/formdata"
        >
          <OrderForm formDataChange={formDataChange} />
          <FilePond
            allowFileTypeValidation={true}
            acceptedFileTypes={["image/*"]}
            allowFileEncode
            ref={ref => (this.pond = ref)}
            files={this.props.photos}
            allowMultiple={true}
            maxFiles={10}
            server={url}
            oninit={() => this.handleInit()}
            onprocessfile={(error, files) => {
              const f = files.serverId;
              console.log(error, f);
              formDataChange(["photos", f]);
            }}
          />
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
  placeOrder,
  formDataChange
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(MessageForm);
