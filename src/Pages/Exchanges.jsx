import {Box, Container, Divider, Typography} from '@mui/material'

const Exchanges = () => {
  const d = false
  return (
    <div className='bgmod' style={{paddingTop:'60px',  height:`${d ? '':'100vh'}`}}>
      <Container maxWidth={'lg'}>
        <Typography gutterBottom color={'neutrals.light'} variant="h3" fontWeight="600" >Exchanges </Typography>
        <Divider sx={{ bgcolor:'#B7AFD1'}}/>
      </Container>
    </div>
  )
}

export default Exchanges