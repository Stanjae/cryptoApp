/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Typography } from '@mui/material';

export default function NewsCard({title, description, imageUrl, newsUrl, createdAt}) {
  return (
    <Card sx={{ maxWidth: 605 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography  variant="h6" component="div">
            {title}
          </Typography>
          <Typography gutterBottom fontWeight={600}  variant="caption" color="success.main">
            Created at {createdAt}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {description?.slice(0,50)} ...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button target='_blank' variant='outlined' href={newsUrl} size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
