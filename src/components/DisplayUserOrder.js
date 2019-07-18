import React from "react";
import { Typography, Divider, useTheme } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
    paper: {padding: theme.spacing(3,2)}
}));

export default function DisplayUserOrder(props) {
  const classes = useStyles();
  if (!props.order) return <div />;

  const {
    addresseeId,
    facilityName,
    status,
    addressee,
    address,
    unit,
    message,
    photos
  } = props.order;

  return (
    <div>
      <Typography paragraph>
        <strong>Recipient</strong>: {addressee.firstName} {addressee.lastName}
        <br />
        <strong>Facility Name</strong>: {facilityName}
        <br />
        <strong>Facility Address</strong>: {address}
        <br />
        <strong>Recipients Identification Number</strong>: {addresseeId}
        <br /> <strong>Recipients Unit</strong>: {unit}
        <br />
      </Typography>
      <Divider />
      <Paper className={classes.paper} dangerouslySetInnerHTML={{__html: message}}/>
      <Divider />
        <Typography paragraph><strong>Number of photos</strong>: {photos.length}</Typography>
      <Typography h1>{status}</Typography>
    </div>
  );
}
