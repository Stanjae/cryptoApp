/* eslint-disable react/prop-types */
import {Typography, Stack, Avatar, Card, IconButton, Button, CardActions, CardContent, CardHeader} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import millify from 'millify';
import { RemoveRedEye, TrendingDown, TrendingUp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



export default function CoinCard({itemo}) {
    const navigate = useNavigate()

  return (
    <Card className='glassmorph' sx={{ maxWidth: 600, color:'#fff'}}>
      <CardHeader
        avatar={
            <Avatar>
            <img style={{objectFit:'contain', width:'100%'}} src={itemo?.iconUrl} />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={itemo?.name}
        subheaderTypographyProps={{color:`${itemo?.color}`}}
        subheader={'Rank: '+ itemo?.rank}
      />
      <CardContent>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant='caption'>Market Cap</Typography>
        <Typography variant='body2'>{millify(itemo?.marketCap)}</Typography>
      </Stack>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant='caption'>24Hr Volume</Typography>
        <Typography variant='body2'>{millify(itemo?.["24hVolume"])}</Typography>
      </Stack>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant='caption'>{Number(itemo?.change) > 0 ? <TrendingUp color='success'/>:<TrendingDown color='error'/>}</Typography>
        <Typography variant='body2'>{millify(itemo?.change)}%</Typography>
      </Stack>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant='caption'>Price: </Typography>
        <Typography variant='body2'>~ {millify(itemo?.price)} USD</Typography>
      </Stack>
      </CardContent>
      <CardActions disableSpacing>
       <Button onClick={()=> navigate(`/cryptocurrencies/${itemo?.uuid}`)} size='small' endIcon={<RemoveRedEye/>} variant='contained'>
            View
       </Button>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
