/* eslint-disable react/prop-types */
import {CardActionArea, Skeleton, Typography, Card, CardContent} from '@mui/material';

export default function HomeCard({title, figure, isFetching}) {
  return (
    <Card elevation={0} className='glassmorph'
    sx={{py:'13px',  maxWidth: "100%", borderRadius:'10px'}}>
      <CardActionArea>
        <CardContent>
          <Typography color={'neutrals.light'} gutterBottom variant="body2" component="div">
            {title}
          </Typography>
          <Typography variant="h4" fontSize={'28px'} color="neutrals.light">
            {isFetching ? <Skeleton animation='wave'/> : figure}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}