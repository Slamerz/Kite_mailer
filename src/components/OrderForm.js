import { TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

export default function OrderForm() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <TextField
        label="Addressee ID #"
        margin="normal"
        className={classes.textField}
      />
      <TextField
        label="Facility Name"
        margin="normal"
        className={classes.textField}
      />
      <TextField
        label="Addressee First Name"
        margin="normal"
        className={classes.textField}
      />
      <TextField
        label="Addressee Last Name"
        margin="normal"
        className={classes.textField}
      />
      <TextField
        label="Addressee Address"
        margin="normal"
        className={classes.textField}
      />
      <TextField
        label="Unit ID"
        margin="normal"
        className={classes.textField}
      />
    </React.Fragment>
  );
}
