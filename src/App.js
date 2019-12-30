import React, { Fragment } from 'react';
import clsx from 'clsx';
import { Grid, CssBaseline, Typography, Avatar } from '@material-ui/core';
import { blue, red, purple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import AppCard from './AppCard';
import agPhoto from './images/andrew-golightly.jpg';
import birthdaysImage from './images/birthdays-ai.jpg';
import speakingImage from './images/syzygy-solutions.jpg';
import moviesImage from './images/movies.jpg';

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
  portfolioContainer: {
    backgroundColor: purple[500],
    padding: theme.spacing(3)
  },
  contactContainer: {
    backgroundColor: red[500]
  },
  text: {
    color: blue[50]
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
  card: {
    padding: theme.spacing(3)
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
            align="center"
          >
            Andrew Golightly
          </Typography>
          <Typography
            variant="subtitle1"
            className={clsx(classes.role, classes.text)}
            align="center"
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
            align="center"
          >
            Loves coding using JavaScript to build useful solutions. Adores
            cats. Empath.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        className={clsx(classes.portfolioContainer, classes.container)}
      >
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom className={classes.text}>
            Apps
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.card}>
          <AppCard
            title="Birthdays AI"
            text="keeping track of birthdays for you"
            linkText="Setup birthdays"
            link="https://birthdays.ai"
            image={birthdaysImage}
          />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.card}>
          <AppCard
            title="Syzygy Solutions"
            text="search for images with your voice"
            linkText="Search images"
            link="https://syzygy.solutions"
            image={speakingImage}
          />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.card}>
          <AppCard
            title="Chiang Mai Movies"
            text="movie times with Rottentomato data for Maya Mall"
            linkText="View movies"
            link="https://chiangmaimovies.com"
            image={moviesImage}
          />
        </Grid>
      </Grid>
      <Grid
        container
        className={clsx(classes.container, classes.contactContainer)}
        justify="center"
        alignItems="center"
      >
        <Grid item className={classes.verticallyAlign} xs={8}>
          <Typography
            variant="h3"
            gutterBottom
            className={clsx(classes.bodyText, classes.text)}
          >
            support@andrewgolightly.com
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
}
