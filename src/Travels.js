import React from 'react';
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  useMediaQuery,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

import newZealand from './images/travels/new-zealand.jpg';
import bulgaria from './images/travels/bulgaria.jpg';
import ireland from './images/travels/ireland.jpg';
import myanmar from './images/travels/myanmar.jpeg';
import thailand from './images/travels/thailand.jpg';
import spain from './images/travels/spain.jpg';
import switzerland from './images/travels/switzerland.jpg';
import southAfrica from './images/travels/south-africa.jpg';
import italy from './images/travels/italy.jpg';
import portugal from './images/travels/portugal.jpg';
import england from './images/travels/england.jpg';
import unitedStates from './images/travels/united-states.jpg';
import canada from './images/travels/canada.jpg';
import japan from './images/travels/japan.jpg';
import poland from './images/travels/poland.jpg';
import finland from './images/travels/finland.jpg';
import estonia from './images/travels/estonia.jpg';
import germany from './images/travels/germany.jpg';

const tileData = [
  {
    img: newZealand,
    location: 'New Zealand'
  },
  {
    img: southAfrica,
    location: 'South Africa'
  },
  {
    img: italy,
    location: 'Italy'
  },
  {
    img: bulgaria,
    location: 'Bulgaria'
  },
  {
    img: ireland,
    location: 'Ireland'
  },
  {
    img: myanmar,
    location: 'Myanmar'
  },
  {
    img: thailand,
    location: 'Thailand'
  },
  {
    img: spain,
    location: 'Spain'
  },
  {
    img: england,
    location: 'England'
  },
  {
    img: switzerland,
    location: 'Switzerland'
  },
  {
    img: portugal,
    location: 'Portugal'
  },
  {
    img: unitedStates,
    location: 'USA'
  },
  {
    img: japan,
    location: 'Japan'
  },
  {
    img: canada,
    location: 'Canada'
  },
  {
    img: finland,
    location: 'Finland'
  },
  {
    img: poland,
    location: 'Poland'
  },
  {
    img: estonia,
    location: 'Estonia'
  },
  {
    img: germany,
    location: 'Germany'
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  mapsContainer: {
    backgroundColor: blue[300],
    paddingTop: theme.spacing(3)
  },
  media: {
    height: 0,
    paddingTop: '100%'
  },
  gridList: {
    width: theme.spacing(138),
    height: theme.spacing(88)
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.74)'
  }
}));

export default function Apps() {
  const classes = useStyles();
  const theme = useTheme();
  const aboveSmall = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid
      container
      className={classes.mapsContainer}
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
      <Grid item xs={10}>
        <div className={classes.root}>
          <GridList
            cellHeight={444}
            className={classes.gridList}
            cols={aboveSmall ? 2 : 1}
          >
            {tileData.map((tile, i) => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar title={tile.location} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Grid>
    </Grid>
  );
}
