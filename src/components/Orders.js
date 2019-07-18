import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/icons/IconButton';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  input: {
    display: 'none',
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  
  return (
<React.Fragment>

    <CssBaseline />
    <Container maxWidth="sm">
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
    
    <div>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          className={classes.button}
          aria-label="Upload picture"
          component="span"
        > Upload Image
          <PhotoCamera />
        </IconButton>
      </label>

      <Button variant="contained" size="small" className={classes.button}>
        <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
        Save Message
      </Button>

      <Button variant="contained" size="small" className={classes.button}>
        Send Message
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>

      <IconButton className={classes.button} aria-label="Delete">
        <DeleteIcon />
      </IconButton>
    </div>

    </Container>
    </React.Fragment>
  );
}