import React, { Fragment, useEffect } from 'react';
import clsx from 'clsx';
import ReactGA from 'react-ga';
import {
  Grid,
  CssBaseline,
  Typography,
  Avatar,
  Button,
  Grow
} from '@material-ui/core';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Link as LinkIcon,
  GraphicEq as GraphicEqIcon
} from '@material-ui/icons';
import { blue, red, purple, yellow } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Apps from './Apps';
import Photos from './Photos';
import Travels from './Travels';
import agPhoto from './images/andrew-golightly.jpeg';
import logo from './images/logo.png';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh'
  },
  logo: {
    '& img': {
      maxWidth: theme.spacing(33)
    },
    textAlign: 'center',
    height: theme.spacing(33)
  },
  mainContainer: {
    backgroundColor: blue[500]
  },
  aboutContainer: {
    backgroundColor: blue[900]
  },
  skillsContainer: {
    backgroundColor: yellow[900]
  },
  empathsContainer: {
    backgroundColor: purple[800]
  },
  contactContainer: {
    backgroundColor: red[500]
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
  },
  quote: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: theme.spacing(2.2),
    marginTop: theme.spacing(8)
  }
}));

export default function App() {
  const classes = useStyles();

  useEffect(() => {
    ReactGA.initialize('UA-38230161-2');
    ReactGA.pageview(window.location.pathname);
  }, []);

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
          <div className={classes.logo}>
            <Grow in style={{ transformOrigin: '0 0 0' }} timeout={8000}>
              <img src={logo} alt="Andrew Golightly" />
            </Grow>
          </div>
          <Typography
            variant="h3"
            component="h1"
            className={classes.title}
            gutterBottom
            align="center"
          >
            Andrew Golightly
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.role}
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
            className={classes.bodyText}
            align="center"
          >
            Loves coding using JavaScript to build useful solutions. Adores
            cats. Empath.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        className={clsx(classes.container, classes.skillsContainer)}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={9} sm={8} lg={6}>
          <Typography variant="h2" gutterBottom>
            Tech skills
          </Typography>
          <Typography variant="body1" gutterBottom className={classes.bodyText}>
            Expert in JavaScript. Fullstack developer specialising in Node.js,
            React, and Firebase. Automation of business processes using apps for
            Slack.
          </Typography>
          <Button
            color="primary"
            size="large"
            startIcon={<GitHubIcon />}
            href="https://github.com/magician11/"
          >
            GitHub
          </Button>
          <Button
            color="primary"
            size="large"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/andrewgolightly11"
          >
            LinkedIn
          </Button>
        </Grid>
      </Grid>
      <Apps />
      <Grid
        container
        className={clsx(classes.container, classes.empathsContainer)}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={9} sm={8} lg={6}>
          <Typography variant="h3" gutterBottom>
            Empath Community
          </Typography>
          <Typography variant="body1" gutterBottom className={classes.bodyText}>
            Andrew started and runs a community of empaths from around the
            world. The members meet online in private chat groups, group calls,
            and sometimes in person. There is an extensive vetting process to
            join.
          </Typography>
          <Typography variant="body1" gutterBottom className={classes.bodyText}>
            Andrew also hosts a podcast of empath interviews that anyone is able
            to listen to.
          </Typography>
          <Button
            color="primary"
            size="large"
            startIcon={<LinkIcon />}
            href="https://empath.community/"
          >
            Website
          </Button>
          <Button
            color="primary"
            size="large"
            startIcon={<GraphicEqIcon />}
            href="https://anchor.fm/andrew-golightly/"
          >
            Podcast
          </Button>
        </Grid>
      </Grid>
      <Photos />
      <Travels />

      <Grid
        container
        className={clsx(classes.container, classes.contactContainer)}
        justify="center"
        alignItems="center"
      >
        <Grid item className={classes.verticallyAlign} xs={9} sm={8} lg={6}>
          <Typography variant="h3" gutterBottom className={classes.bodyText}>
            support@andrewgolightly.com
          </Typography>
          <Typography variant="h3" gutterBottom className={clsx(classes.quote)}>
            “If someone can prove me wrong and show me my mistake in any thought
            or action, I shall gladly change. I seek the truth, which never
            harmed anyone: the harm is to persist in one's own self-deception
            and ignorance.” ― Marcus Aurelius, Meditations
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
}
