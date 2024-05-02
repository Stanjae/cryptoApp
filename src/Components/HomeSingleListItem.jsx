/* eslint-disable react/prop-types */

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {ListItemAvatar, Paper, Skeleton} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import millify from 'millify';


export default function SingleCryptoList({item, isFetching}) {
  return (
    <Paper  className='glassmorph' elevation={2}>
        <ListItem >
        <ListItemAvatar>
        {isFetching ? (
            <Skeleton animation="wave">
            <Avatar>
            <img style={{objectFit:'contain'}} src={item?.iconUrl} />
          </Avatar>
            </Skeleton>
        ):
        (
         <Avatar>
            <img style={{objectFit:'contain', width:'100%'}} src={item?.iconUrl} />
          </Avatar>   
        )}
          
        </ListItemAvatar>
        <ListItemText sx={{color:`${item?.color}`}} primary={item?.name} secondary={`~ ${millify(item?.price)} USD`} />
      </ListItem>
    </Paper>
      
  );
}