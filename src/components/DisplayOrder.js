import React from "react";
import { Typography, Divider, useTheme } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function DisplayOrder(props) {
  const classes = useStyles();
  if (!props.order) return <div />;

  const {
    addresseeId,
    facilityName,
    status,
    addressee,
    address,
    unit,
    message
  } = props.order;

  return (
    <div>
      <Typography paragraph>
        {addressee.firstName} {addressee.lastName} | {addresseeId}
        <br /> {facilityName} | unit: {unit}
        <br />
        {address}
      </Typography>
      <Divider />
      <Typography paragraph>{message}</Typography>
      <Divider />
      {status}
      <div>
        <Button variant="contained" color="primary" className={classes.button}>
          Approve
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Reject
        </Button>
      </div>
    </div>
  );
}
