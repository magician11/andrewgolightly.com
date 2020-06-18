import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { purple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import AppCard from './AppCard';
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
import multiverseImage from './images/multiverse.jpg';
import sacredGeometryImage from './images/sacred-geometry.jpg';
import speechImage from './images/speech.jpg';
import speechDemoImage from './images/speech-to-text-demo.jpg';

const useStyles = makeStyles(theme => ({
  portfolioContainer: {
    backgroundColor: purple[500],
    padding: theme.spacing(3.3)
  },
  card: {
    padding: theme.spacing(3)
  }
}));

export default function Apps() {
  const classes = useStyles();

  return (
    <Grid container className={classes.portfolioContainer}>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom>
          Apps
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} className={classes.card}>
        <AppCard
          title="Speech AI"
          text="A British assistant to read and translate for you."
          linkText="Enter Text"
          link="https://speech.golightlyplus.com"
          image={speechImage}
        />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.card}>
        <AppCard
          title="Sacred Geometry"
          text="Creating Sacred Geometry with JavaScript"
          linkText="View"
          link="https://sacredgeometry.golightlyplus.com"
          image={sacredGeometryImage}
        />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.card}>
        <AppCard
          title="Multiverse"
          text="connecting near and far to the conversation"
          linkText="Create Events"
          link="https://multiverse.createdeepconnections.com"
          image={multiverseImage}
        />
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
      <Grid item xs={12} sm={4} className={classes.card}>
        <AppCard
          title="Speech To Text Demo"
          text="Test out speech recognition in your browser"
          linkText="Run demo"
          link="https://apps.golightlyplus.com/speech-to-text-demo/"
          image={speechDemoImage}
        />
      </Grid>
    </Grid>
  );
}
