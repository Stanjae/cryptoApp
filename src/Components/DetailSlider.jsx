/* eslint-disable react/prop-types */
import { Skeleton } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const MAX = 100;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: '',
  },
  {
    value: MAX,
    label: '',
  },
];

export default function DetailSlider({title, value, score, isfetching}) {

  return (
    <Box sx={{ }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', color:'#fff' }}>
        <Typography
          variant="body2"
          color={'secondary.light'}
        >
          {title}
        </Typography>
        
        <Typography
          variant="body2"
         color={'neutrals.light'}
        >
          {isfetching ? <Skeleton variant='text' animation={'wave'}/> :value}
        </Typography>
      </Box>
      <Slider
        marks={marks}
        step={10}
        color='primary'
        value={score}
        size="small"
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        disabled
      />
      
    </Box>
  );
}
