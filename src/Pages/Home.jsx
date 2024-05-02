import HomeCard from '../Components/HomeCard'
import {MoreVert, BarChart, ArrowOutward} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import bgLines from '../assets/lines.png'
import cusChart from '../assets/cuschart.png'
import {  useGetCryptosQuery } from '../features/cryptoApi';
//import Loaders from '../Components/Loaders';
import millify from 'millify';
import SingleCryptoList from '../Components/HomeSingleListItem';
import { Container, FormControlLabel, Grid, Stack, Switch, Typography, Button, ButtonGroup, IconButton, Paper, Chip } from '@mui/material'
import Box from '@mui/material/Box'

const Home = () => {
    const navigate = useNavigate()
    const {data, isFetching} =  useGetCryptosQuery(5);

    const globalStats = data?.data?.stats
    const topCoins = data?.data?.coins

    console.log(data)
  return (
    <Box sx={{py:'60px', backgroundImage:`url(${bgLines})`, backgroundRepeat:'no-repeat', 
    backgroundSize:'500px', backgroundPositionY:'180%', backfaceVisibility:'visible' }}>
        <Container sx={{ display:'flex', gap:'10px', flexDirection:{xs:'column', md:'row'} }} maxWidth={'lg'}>
            <Box sx={{width:{xs:'100%', md:'auto'}}}>
                <Typography sx={{fontWeight:'700'}} fontSize={{xs:'50px', md:'70px'}} color={'neutrals.light'} variant='h2'>
                    CashFlow App Dashboard
                </Typography>
                <Box sx={{my:4}}>
                    <FormControlLabel sx={{color:'neutrals.light'}} value="start"
                    control={<Switch color="success" />}
                    label="View Balances in BTC"
                    labelPlacement="start"
                    />
                </Box>
                <Stack direction={'row'} spacing={3}>
                    <Button size='large' onClick={()=> navigate('/cryptocurrencies')} variant={'outlined'}>Get Started</Button>
                    <Button size='large' onClick={()=> navigate('/news')}  sx={{color:'neutrals.light'}} color='success' variant={'contained'}>Latest News</Button>
                </Stack>
            </Box>
            <Box  sx={{width:{xs:'100%', md:'auto'}}}>
                <Grid container columns={{ xs: 12, sm:12}} spacing={{ xs: 1, sm: 2,}}>
                    <Grid item xs={12} sm={6}>
                        <HomeCard isFetching={isFetching} figure={globalStats?.total} title={'Total Cryptocurrencies'}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <HomeCard isFetching={isFetching} figure={globalStats?.totalExchanges} title={'Total Exchanges'}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <HomeCard isFetching={isFetching} figure={millify(globalStats?.totalMarketCap)} title={'Total Market Cap'}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <HomeCard isFetching={isFetching} figure={millify(globalStats?.total24hVolume)} title={'Total 24h Volume'}/>
                    </Grid>
                </Grid>
                <Stack my={3} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography color={'neutrals.light'} variant='h6'>Top 5 CryptoCurrencies in the World</Typography>
                    <Link style={{textDecoration:'none', color:'#07b97c'}} to={'/cryptocurrencies'}>
                        <Typography fontWeight={600} variant='body1'>See More</Typography>
                    </Link>
                </Stack>
                <Box>
                    <Grid container columns={{ xs: 12, sm:12}} spacing={{ xs: 1, sm: 3,}}>
                    {topCoins && topCoins?.map((coin, index)=>(
                        <Grid item key={index} xs={12} sm={6}>
                            <SingleCryptoList isFetching={isFetching} item={coin}/>
                        </Grid> 
                    ))}
                       
                    </Grid>
                </Box>

                <Stack my={3} direction={'row'} justifyContent={'space-between'}>
                    <Typography color={'neutrals.light'} variant='h6'>New Listings and Potential Airdrop</Typography>
                    <ButtonGroup  aria-label="Basic button group">
                        <IconButton aria-label="delete"><BarChart sx={{color:'neutrals.light'}} /></IconButton>
                        <IconButton aria-label="delete"><MoreVert sx={{color:'neutrals.light'}} /></IconButton>
                    </ButtonGroup>
                </Stack>
                <Box sx={{p:2, borderRadius:3, background:' linear-gradient(102deg, #9474DC,#7668BD,#B7AFD1);'}}>
                    <Stack spacing={2} alignContent={'center'} direction={{md:'row', xs:'column'}}>
                        <Paper className='glassmorph' sx={{textAlign:{md:'left', xs:'center'}, p:2.5}} >
                            <Chip size='small' sx={{bgcolor:'neutrals.light', color:'neutrals.dark', fontSize:'15px'}} label="Borrowed + 25%" />
                            <Typography color={'neutrals.light'} sx={{my:1}} fontWeight={600} component={'div'} variant='h4'>360.40
                                <Typography ml={1} variant='body1' component={'span'}>USD</Typography>
                            </Typography>
                            <Typography color={'secondary.light'}>~ 0.0080 BTC</Typography>
                            <Button endIcon={<ArrowOutward/>} sx={{bgcolor:'neutrals.dark', my:1}} variant='contained'>Borrow</Button>
                        </Paper>
                        <Paper elevation={0} sx={{textAlign:{md:'left', xs:'center'}, p:2.5, bgcolor:'transparent'}} >
                            <Chip size='small' sx={{bgcolor:'neutrals.light', color:'neutrals.dark', fontSize:'15px'}} label="Minted + 25%" />
                            <Typography color={'neutrals.light'} sx={{my:1}} fontWeight={600} component={'div'} variant='h4'>1080
                                <Typography ml={1} variant='body1' component={'span'}>USD</Typography>
                            </Typography>
                            <Typography color={'secondary.light'}>~ 0.0024 BTC</Typography>
                            <Button endIcon={<ArrowOutward/>} sx={{bgcolor:'neutrals.dark', my:1}} variant='contained'>Lend</Button>
                        </Paper>
                        <Paper elevation={0} sx={{display:'flex', justifyContent:'center', flexGrow:'1' , bgcolor:'transparent'}} >
                            <img style={{width:'60%', mx:'auto', display:'block', objectFit:'contain' }} src={cusChart}/>
                        </Paper>
                    </Stack>


                    
                </Box>
            </Box>
        </Container>

    </Box>
  )
}

export default Home