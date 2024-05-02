import { Container, Box, Typography, Grid, Stack, Chip, Divider, Button } from "@mui/material"
import { useParams } from "react-router-dom"
import { useGetDetailCryptoQuery } from "../features/cryptoDetailApi";
import millify from "millify";
import {ArrowDropDown, ArrowDropUp} from '@mui/icons-material';
import DetailSlider from "../Components/DetailSlider";
import Loaders from "../Components/Loaders";
import CoinChart from "../Components/CoinChart";
import moment from "moment";
import { useGetRelatedNewsQuery } from "../features/relatedNews";
import NewsCard from "../Components/NewsCard";
import { useState } from "react";
import { randoimage } from "../lib/randImage";



const removeDot=(str)=> (str.includes(".") ? str.split(".")[0] : str)

const Detail = () => {
    const {id} = useParams();
    const {data, isFetching} = useGetDetailCryptoQuery(id);
    const coinData = data?.data?.coin;

    const [articles, setArticles] = useState(6)

    const randomimagere = ()=>{
      const andom = Math.floor(Math.random() * 4)
      return randoimage[andom]
    }
    const {data:relatedNews} = useGetRelatedNewsQuery(coinData?.name)

    const relatednewsdetail = relatedNews?.items?.slice(0, articles)

    console.log('rhea', coinData)

    

    if (isFetching) return <Loaders/>

  return (
    <Box  sx={{ py: "60px" }}>
      <Container className="bgmod" maxWidth={"lg"}>
        <Grid pb={2} container spacing={1} columns={{ xs: 1, md: 2 }}>
          <Grid p={2} item xs={1}>
            <Stack direction={"row"} spacing={1} alignItems={"flex-start"}>
              <img
                style={{ objectFit: "contain", width: "50px" }}
                src={coinData?.iconUrl}
                alt={coinData?.name}
              />
              <Box>
                <Typography fontWeight={700} color={'neutrals.light'} variant="h4" component={"span"}>
                  {coinData?.name}
                </Typography>
                <Typography color={'secondary.main'} ml={1} variant="body1" component={"span"}>
                {coinData?.symbol}
                </Typography>
                <Chip size={'small'} sx={{color:'#fff', bgcolor:`${coinData?.color}`, ml:1}} label={`# ${coinData?.rank}`}/>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                     <Typography my={1} color={'neutrals.light'} fontWeight={800} variant="h3">${millify(coinData?.price, {precision:3, locales:'de-DE'})}</Typography>
                     <div style={{display:'flex', alignItems:'center'}}>
                       {coinData?.change < 0 ? <ArrowDropDown color={'error'} />: <ArrowDropUp color={'success'}/>}
                        <Typography color={`${coinData?.change < 0 ? 'error':'success.main'}`} variant="h6" component={"span"}>{millify(coinData?.change, {precision:2})}%</Typography>
                     </div>
                </Stack>
               
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={1}>
                <Grid container columns={2} spacing={3}>
                    <Grid item xs={2} sm={1}>
                        <DetailSlider title={'Market Cap'} isfetching={isFetching} score={97} value={millify(coinData?.marketCap)}/>
                    </Grid>
                    <Grid item xs={1}>
                        <DetailSlider title={'24H Volume'} isfetching={isFetching} score={98} value={millify(coinData?.["24hVolume"])} />
                    </Grid>
                    <Grid item xs={1}>
                        <DetailSlider title={'Circulating Supply'} isfetching={isFetching} score={97} value={millify(coinData?.supply?.circulating)} />
                    </Grid>
                    <Grid item xs={1}>
                        <DetailSlider title={'All time High'} isfetching={isFetching} score={97} value={"$" + millify(coinData?.allTimeHigh?.price)} />
                    </Grid>
                </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ bgcolor:'#B7AFD1'}}/>

        <Grid py={2} container spacing={2} columns={{ xs: 1, md: 5 }}>
            <Grid item xs={5} md={2}>
                <Typography color={'neutrals.light'} variant={'h4'}>
                    About {coinData?.name}
                </Typography>
                <Typography fontWeight={600} gutterBottom color={'success.main'} variant={'caption'}>
                    Listed on {moment.unix(coinData?.listedAt).format('YYYY-MM-DD')}
                </Typography>
                <Typography gutterBottom py={1} color={'secondary.light'} variant={'body1'}>
                    {coinData?.description}
                </Typography>
                <Stack flexWrap={'wrap'} gap={1} py={1} direction={'row'} alignItems={'center'}>
                <Typography color={'neutrals.light'} pr={1} fontWeight={700} variant="body1">Links: </Typography>
                {coinData?.links?.map((item, index)=>(
                  <Button size="small" key={index} href={item?.url} variant="contained">{removeDot(item.name)}</Button>
                ))}
               
                  
                </Stack>
            </Grid>
            <Grid item xs={5} md={3}>
              <CoinChart arrlist={coinData?.sparkline}/>

            </Grid>

        </Grid>

        <Divider sx={{ bgcolor:'#B7AFD1'}}/>
        <Typography gutterBottom py={2} color={'neutrals.light'} variant={'h4'}>Related Articles on {coinData?.name}</Typography>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'}>
       {articles === 6 ? <Button variant="outlined" onClick={()=>setArticles(prev => prev + 6)} 
        endIcon={<ArrowDropDown />} color={'success'} textAlign={'end'}>See More</Button>
        :
        <Button variant="outlined" onClick={()=>setArticles(prev => prev - 6)} 
        endIcon={<ArrowDropDown />} color={'success'} textAlign={'end'}>See Less</Button>}
        </Stack>
        

        <Grid spacing={2} py={2} columns={12} container>
        {relatednewsdetail?.map((item, index)=>(
          <Grid sx={{transition:'all 0.5s ease'}} item key={index} xs={12} sm={6} md={4}>
            <NewsCard title={item?.title} newsUrl={item.newsUrl} description={item?.snippet} 
            createdAt={moment.unix(item?.timestamp / 1000).format('YYYY-MM-DD')} imageUrl={ randomimagere()}/>
          </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Detail