import React, { Fragment } from 'react';
import { Grid, CssBaseline, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: blue[500],
    height: '100vh'
  },
  title: {
    padding: theme.spacing(1),
    letterSpacing: theme.spacing(1),
    textAlign: 'center',
    color: blue[50]
  },
  role: {
    padding: theme.spacing(1),
    letterSpacing: theme.spacing(1) / 2,
    textAlign: 'center',
    color: blue[50]
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <Grid
        container
        className={classes.container}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography
            variant="h3"
            component="h1"
            className={classes.title}
            gutterBottom
          >
            Andrew Golightly
          </Typography>
          <Typography variant="subtitle1" className={classes.role}>
            Chief Technology Officer
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
}
