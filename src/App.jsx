//import { useState } from 'react'

//import { useDispatch, useSelector } from 'react-redux';
//import { decrement, increment } from './features/counterSlice';
import { CssBaseline, createTheme} from '@mui/material';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import DefaultLayout from './Layout/DefaultLayout';
import Error from './Components/Error';
import { ThemeProvider } from '@emotion/react';
import Coins from './Pages/Coins';
import Exchanges from './Pages/Exchanges';
import News from './Pages/News';
import Loaders from './Components/Loaders';
import Detail from './Pages/Detail';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9474DC',
      dark:'#7668BD'

    },
    secondary:{
      light:'#B7AFD1',
      main:'#5E5B78',
      dark:'#313349'
    },
    success:{
      main:'#07b97c',
      dark:'#11694d'
    },
    neutrals:{
      light:'#fff',
      dark:'#191923'
    },
    greyvariant:{
      light:'#5C5C5B',
      dark:'#3C3C3C'
    }

  },
});

const router = createBrowserRouter([
  {path:'/', element:<DefaultLayout/>, errorElement:<Error/>, children:[
    {index:true, element:<Home/>},
    {path:'/cryptocurrencies', element:<Coins/>},
    {path:'/cryptocurrencies/:id', element:<Detail/>},
    {path:'/exchanges', element:<Exchanges/>},
    {path:'/news', element:<News/>}
  ]}
])

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
     <RouterProvider fallbackElement={<Loaders/>} router={router}/>
    </ThemeProvider>
  )
}

export default App
