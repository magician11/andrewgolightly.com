import React from 'react';
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Slide,
  Dialog,
  useMediaQuery,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import ZoomInIcon from '@material-ui/icons/ZoomIn';

import newZealand from './images/travels/new-zealand.jpg';
import bulgaria from './images/travels/bulgaria.jpg';
import ireland from './images/travels/ireland.jpg';
import myanmar from './images/travels/myanmar.jpeg';
import thailand from './images/travels/thailand.jpg';
import spain from './images/travels/spain.jpg';
import switzerland from './images/travels/switzerland.jpg';
import southAfrica from './images/travels/south-africa.jpg';
import italy from './images/travels/italy.jpg';
import england from './images/travels/england.jpg';

const componentHeight = 380;

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
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  mapsContainer: {
    backgroundColor: blue[300]
  },
  media: {
    height: 0,
    paddingTop: '100%'
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.74)'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Apps() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [showImage, setShowImage] = React.useState(null);

  const handleClose = () => {
    setShowImage(null);
  };

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
      <Grid item>
        <div className={classes.root}>
          <GridList
            cellHeight={componentHeight}
            className={classes.gridList}
            cols={3}
          >
            {tileData.map((tile, i) => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.location}
                  // subtitle={tile.location}
                  actionIcon={
                    matches && (
                      <IconButton
                        className={classes.icon}
                        onClick={() => setShowImage(i)}
                      >
                        <ZoomInIcon />
                      </IconButton>
                    )
                  }
                />
              </GridListTile>
            ))}
          </GridList>
          {showImage !== null && (
            <Dialog
              fullScreen
              open={showImage !== null}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
              <img
                src={tileData[showImage].img}
                alt={tileData[showImage].location}
              />
            </Dialog>
          )}
        </div>
      </Grid>
    </Grid>
  );
}
