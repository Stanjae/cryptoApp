import { Box, Container, Typography, Divider, Grid, Stack, Pagination, CircularProgress } from "@mui/material"
import {useGetCryptoNewsQuery} from '../features/cryptoNewsApi'
import NewsCard from "../Components/NewsCard";
import { useState } from "react";
import Loaders from "../Components/Loaders";


const News = () => {
  const {data, isFetching} = useGetCryptoNewsQuery();

  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const newsData = data?.data
  console.log('news data: ',data)

  const count = (newsData?.length / 10) - 1

  const previous = (page === 1 ? page * 0 : page * 10)
  const next = (page * 10) + 10

  if(isFetching) return <Loaders/>

  return (
    <Box sx={{py:'60px', height:`${newsData ? '':'100vh'}`}}>
      <Container maxWidth={'lg'}>
        <Typography gutterBottom color={'neutrals.light'} variant="h3" fontWeight="600" >News </Typography>
        <Divider sx={{ bgcolor:'#B7AFD1'}}/>
        <Grid py={2} container columns={4} spacing={2}>
        {newsData?.slice(previous, next)?.map((item, index)=>(
          <Grid key={index} xs={4} sm={2} md={1} item>
              <NewsCard title={item.title} createdAt={item?.createdAt?.split("+")[0]} description={item.description} imageUrl={item.thumbnail} newsUrl={item.url}/>
          </Grid>
        ))} 
        {isFetching || !newsData && <Grid xs={4} item> <CircularProgress color="success" /></Grid> }
        </Grid>
        <Stack p={2} direction={'row'} spacing={2} justifyContent={'center'}>
          <Pagination onChange={handleChange} page={page} count={count} shape="rounded" color="primary"/>
        </Stack>
      </Container>
    </Box>
  )
}

export default News