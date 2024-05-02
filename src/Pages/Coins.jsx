import { Box, Container, Grid, Stack, TextField, Paper, Pagination} from '@mui/material'
import {useState, useEffect} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetTotalCryptosQuery } from '../features/cryptoApi';
import CoinCard from '../Components/CoinCard';
import Loaders from '../Components/Loaders';





const Coins = () => {
  const {data, isLoading, isFetching} = useGetTotalCryptosQuery(200);
  const [filteredData, setFilteredData] = useState(data?.data?.coins);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const loading = open && !isLoading;

  const [paginate, setPaginate] = useState(1)

  const degree = Math.ceil(filteredData?.length / 20)
  

  const handleChange = (event, value) => {
    setPaginate(value);
  };

  const previous = (paginate === 1 ? paginate * 0 : (paginate * 20) -20)
  const next = (paginate === 1 ? paginate + 20 : ( paginate * 20) )

  useEffect(()=>{
    if(query?.length === 0){
      setFilteredData(data?.data?.coins);
      return
    }
    const searchedData = data?.data?.coins?.filter(itemi => itemi?.name?.toLowerCase().includes(query?.toLowerCase()) ? itemi : null);
    setFilteredData(searchedData)
  },[query, data])

  console.log('U deserve it daddy!!')

  if (isFetching || isLoading) return <Loaders/>


 


  return (
    <Box sx={{py:'60px', height:`${data ? '':'100vh'}`}}>
    <Container maxWidth='lg'>
      <Paper>
        <Autocomplete
        sx={{ width: 300 }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option?.name == value?.name}
        getOptionLabel={(option) => option?.name}
        options={filteredData || [{name:''}]}
        onChange={(event, newValue) => {
          setQuery(newValue?.name);
        }}
        onInputChange={(event, newInputValue) => {
          setQuery(newInputValue);
        }}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            color='success'
            value={query}
            label="Search CryptoCurrencies"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
      </Paper>

      <Grid container py={2} columns={{xs:2, md:4}} spacing={{xs:2, md:3}}>
      {filteredData?.slice(previous, next)?.map((itemo, index)=>(
        <Grid key={index} item xs={2} md={1}>
          <CoinCard itemo={itemo}/>
        </Grid>
      ))} 
      </Grid>
    
      <Stack p={2} direction={'row'} spacing={2} justifyContent={'center'}>
          <Pagination onChange={handleChange} page={paginate} count={degree} shape="rounded" color="primary"/>
        </Stack>
    </Container>

    </Box>
  )
}

export default Coins