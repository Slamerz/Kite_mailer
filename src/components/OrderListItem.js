import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem,
  Divider,
  ListItemText,
  ListItemIcon,
  Link
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ReportIcon from "@material-ui/icons/Report";
import ApproveIcon from "@material-ui/icons/CheckBox";
import MailIcon from "@material-ui/icons/Mail";
import { Link as RouterLink } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    display: "flex"
  },
  inline: {
    display: "inline"
  }
}));

function ItemStatusIcon(props) {
  switch (props.status) {
    case "pending": {
      return <MailIcon />;
    }
    case "approved": {
      return <ApproveIcon />;
    }
    case "rejected": {
      return <ReportIcon />;
    }
    default: {
      return <MailIcon />;
    }
  }
}

export default function OrderListItem(props) {
  const classes = useStyles();
  const { status, facilityName, addressee, id } = props.order;
  return (
    <React.Fragment>
      <Link component={RouterLink} to={"/orders/" + id}>
        <ListItem alignItems="flex-start" button>
          <ListItemIcon>
            <ItemStatusIcon status={status} />
          </ListItemIcon>
          <ListItemText
            primary={facilityName}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {`To ${addressee.firstName} ${addressee.lastName}`}
                </Typography>
                <br />
                {"created on " + new Date(Date.now()).toLocaleDateString()}
              </React.Fragment>
            }
          />
        </ListItem>
      </Link>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
}
