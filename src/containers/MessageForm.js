import React, { Component } from "react";
import OrderForm from "../components/OrderForm";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { placeOrder } from "../actions/placeOrder";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import { domain } from "../actions/constants";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType
);

const url = domain + "/api/pictures";

class MessageForm extends Component {
  componentDidMount() {
    placeOrder();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.placeOrder(this.props.formData);
  };

  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }

  render() {
    return (
      <React.Fragment>
        <form
          noValidate
          method="post"
          autoComplete="off"
          action="/api/orders"
          encType="multipart/formdata"
        >
          <OrderForm />
          <FilePond
            allowFileTypeValidation={true}
            acceptedFileTypes={["image/*"]}
            ref={ref => (this.pond = ref)}
            files={this.props.photos}
            allowMultiple={true}
            maxFiles={10}
            server={url}
            oninit={() => this.handleInit()}
            onupdatefiles={file => {
              this.setState({
                photos: file.map(fileItem => fileItem.file)
              });
            }}
          />
          <Button type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  return { orders: state.orders, formData: state.formData };
};

const mapDispatchtoProps = {
  placeOrder
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(MessageForm);
