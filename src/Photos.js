import React from 'react';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Slide,
  Dialog,
  useMediaQuery
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ZoomInIcon from '@material-ui/icons/ZoomIn';

import trigWalk from './photos/the-trig-walk.jpg';
import waihiBeach from './photos/waihi-beach.jpg';

const componentHeight = 380;

const tileData = [
  {
    img: trigWalk,
    title: 'The Trig Walk',
    location: 'Waihi Beach, New Zealand',
    cols: 1
  },
  {
    img: waihiBeach,
    title: 'Sunrise',
    location: 'Waihi Beach, New Zealand',
    cols: 2
  }
];
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  media: {
    height: 0,
    paddingTop: '100%'
  },
  gridList: {
    height: componentHeight
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
    <div className={classes.root}>
      <GridList
        cellHeight={componentHeight}
        className={classes.gridList}
        cols={3}
      >
        {tileData.map((tile, i) => (
          <GridListTile key={tile.img} cols={matches ? tile.cols : 3}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={tile.location}
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
          <img src={tileData[showImage].img} alt={tileData[showImage].title} />
        </Dialog>
      )}
    </div>
  );
}
