import React, { Fragment, useEffect } from 'react';
import clsx from 'clsx';
import ReactGA from 'react-ga';
import {
  Grid,
  CssBaseline,
  Typography,
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
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
import AppCard from './AppCard';
import agPhoto from './images/andrew-golightly.jpg';
import birthdaysImage from './images/birthdays-ai.jpg';
import speakingImage from './images/syzygy-solutions.jpg';
import moviesImage from './images/movies.jpg';
import conversationsImage from './images/conversation.jpg';
import bitcoinImage from './images/bitcoin.jpg';
import nakedGirlImage from './images/naked-girl.jpg';
import styleImage from './images/style-transfer.jpg';
import matrixImage from './images/the-matrix.jpg';
import coloursImage from './images/speech-to-colours.jpg';
import synkImage from './images/synk.jpg';
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
  portfolioContainer: {
    backgroundColor: purple[500],
    padding: theme.spacing(3.3)
  },
  skillsContainer: {
    backgroundColor: yellow[900]
  },
  empathsContainer: {
    backgroundColor: purple[800]
  },
  mapsContainer: {
    backgroundColor: blue[300]
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
  card: {
    padding: theme.spacing(3)
  },
  bodyText: {
    fontSize: theme.spacing(2.2)
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
      <Grid container className={classes.portfolioContainer}>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom>
            Apps
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.card}>
          <AppCard
            title="Synk"
            text="share your travel schedule with select friends"
            linkText="Share Travels"
            link="https://synk.world/"
            image={synkImage}
          />
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
        <Grid item xs={12} sm={4} className={classes.card}>
          <AppCard
            title="Deep Connections"
            text="start a conversation with those around you"
            linkText="Download app"
            link="https://createdeepconnections.com"
            image={conversationsImage}
          />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.card}>
          <AppCard
            title="Bitcoin POS"
            text="a safe and reliable point of sale app for Bitcoin"
            linkText="Accept Bitcoin"
            link="https://bitcoin-pos.golightlyplus.com/"
            image={bitcoinImage}
          />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.card}>
          <AppCard
            title="Appropriate Photos"
            text="analyse your image for any adult content"
            linkText="Analyse images"
            link="https://apps.golightlyplus.com/appropriate-photos"
            image={nakedGirlImage}
          />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.card}>
          <AppCard
            title="Style Transfer"
            text="transforming your image into art"
            linkText="Style image"
            link="https://apps.golightlyplus.com/style-transfer/"
            image={styleImage}
          />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.card}>
          <AppCard
            title="The Matrix"
            text="a reproduction of the Matrix digital rain"
            linkText="Enter the Matrix"
            link="https://apps.golightlyplus.com/The-Matrix-digital-rain/"
            image={matrixImage}
          />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.card}>
          <AppCard
            title="Speech To Colours"
            text="use your voice to change background colours"
            linkText="Change colours"
            link="https://apps.golightlyplus.com/speech-to-colours/"
            image={coloursImage}
          />
        </Grid>
      </Grid>

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
      <Grid
        container
        className={clsx(classes.container, classes.mapsContainer)}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={10} sm={8}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="iframe"
                alt="Andrew Travels"
                height="470"
                src="https://www.google.com/maps/d/embed?mid=1TepY-cF-tV1zLyADZU3-B-qaVGc"
                title="Andrew's Travels"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Spent most of life in South Africa, New Zealand, Australia,
                  Thailand, England, and the USA. To date, visited 40 countries.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        className={clsx(classes.container, classes.contactContainer)}
        justify="center"
        alignItems="center"
      >
        <Grid item className={classes.verticallyAlign} xs={8}>
          <Typography variant="h3" gutterBottom className={classes.bodyText}>
            support@andrewgolightly.com
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
}
