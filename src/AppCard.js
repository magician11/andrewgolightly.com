import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  CardMedia,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    // maxWidth: 345,
  },
  media: {
    height: theme.spacing(22)
  }
}));

export default function AppCard(props) {
  const classes = useStyles();
  const { title, text, image, link, linkText } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={link}>
          {linkText}
        </Button>
      </CardActions>
    </Card>
  );
}
