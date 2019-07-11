import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

function LinkTab(props) {
  return <Tab component={Link} {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs variant="fullWidth" onChange={handleChange}>
            <LinkTab label="Messages" to="/messages" />
            <LinkTab label="Orders" to="/orders" />
            {/* <LinkTab label="Contacts" to="/contacts" /> */}
            <LinkTab label="Logout" to="/logout" />
          </Tabs>
        </AppBar>
      </div>
    </React.Fragment>
  );
}
