import React, { Fragment } from 'react';
import clsx from 'clsx';
import { Grid, CssBaseline, Typography, Avatar } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import agPhoto from './images/andrew-golightly.jpg';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh'
  },
  mainContainer: {
    backgroundColor: blue[500]
  },
  aboutContainer: {
    backgroundColor: blue[900]
  },
  text: {
    color: blue[50],
    textAlign: 'center'
  },
  title: {
    padding: theme.spacing(1),
    letterSpacing: theme.spacing(1)
  },
  role: {
    padding: theme.spacing(1),
    letterSpacing: theme.spacing(1) / 2
  },
  verticallyAlign: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  photo: {
    width: theme.spacing(33),
    height: theme.spacing(33),
    margin: theme.spacing(4)
  },
  bodyText: {
    fontSize: theme.spacing(2.2)
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <Grid
        container
        className={clsx(classes.mainContainer, classes.container)}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography
            variant="h3"
            component="h1"
            className={clsx(classes.title, classes.text)}
            gutterBottom
          >
            Andrew Golightly
          </Typography>
          <Typography
            variant="subtitle1"
            className={clsx(classes.role, classes.text)}
          >
            Chief Technology Officer
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        className={clsx(classes.aboutContainer, classes.container)}
        justify="center"
        alignItems="center"
      >
        <Grid item className={classes.verticallyAlign} xs={8} md={5} lg={3}>
          <Avatar
            alt="Andrew Golightly"
            src={agPhoto}
            className={classes.photo}
          />
          <Typography
            variant="body1"
            gutterBottom
            className={clsx(classes.bodyText, classes.text)}
          >
            Loves coding using JavaScript to build useful solutions. Adores
            cats. Empath.
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
}
