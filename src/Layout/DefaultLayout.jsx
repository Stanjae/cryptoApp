import { NavLink, Outlet, useLocation} from 'react-router-dom'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useState } from 'react';
import { Home, MonetizationOn, CurrencyExchange, Feed, Close} from '@mui/icons-material';
import { Box, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Paper, styled} from '@mui/material'
import MobileDrawer from '../Components/MobileDrawer';


const navlinks = [
    {title:'Home', url:'/', ico:<Home color='secondary' sx={{fontSize:'37px'}}/>},
    {title:'Crypto', url:'/cryptocurrencies', ico:<MonetizationOn color='secondary'  sx={{fontSize:'37px'}}/>},
    {title:'Exchanges', url:'/exchanges', ico:<CurrencyExchange color='secondary'  sx={{fontSize:'37px'}}/>},
    {title:'News', url:'/news', ico:<Feed color='secondary'  sx={{fontSize:'37px'}}/>}

]

const CustomNavLink = styled(NavLink)(({theme})=>({
    color:theme.palette.secondary.main,
    textDecoration:'none',
    '& .hover':{
        'backgroundColor':theme.palette.success,
    }
})
)
const DefaultLayout = () => {
    const [toogle, setToogle] = useState(true)
    const {pathname} = useLocation()


  return (
    <div className='bgmod'  style={{}}>
    <Box
      width={"100%"}
      sx={{ display: "flex", position:'relative', height:'100&' }}
    >
      <Box
        height={"100%"}
        px={{ md: "10px" }}
        sx={{
          width: `${toogle ? "6%" : "12%"}`,
          left: 0,
          top: 0,
          display:{md: "block", xs:'none'},
          overflow: "hidden",
          transition: "all",
          transitionTimingFunction: "ease-in-out",
          transitionDuration: "600ms",
        }}
        borderRight={"1px solid #B7AFD1"}
        position={{ md: "fixed" }}
      >
        <Box sx={{ display: "flex" }}>
          <IconButton
            onClick={() => setToogle((prev) => !prev)}
            size="large"
            sx={{ pl: "15px" }}
          >
            {toogle ? <MenuOpenIcon sx={{ color: "#fff", transition:'all', transitionTimingFunction:'ease-in-out', transitionDuration:'600ms' }} fontSize="large" />:
            <Close sx={{ color: "#fff",  transition:'all', transitionTimingFunction:'ease-in-out', transitionDuration:'600ms' }} fontSize="large"/>}
          </IconButton>
        </Box>
        <Box sx={{ py: "20px" }}>
          <List component="nav" aria-label="main navigation">
          {navlinks.map((item, index) => (
            <CustomNavLink to={item.url} key={index}>
                <ListItemButton sx={{borderRadius:'10px', mb:'10px'}} selected={item.url === pathname}>
                    <ListItemIcon>{item.ico}</ListItemIcon>
                    <ListItemText sx={{ml:'-1px'}} color='primary' primary={item.title} />
                </ListItemButton>
            </CustomNavLink>
            
          ))}
           
          </List>
        </Box>
      </Box>

      <Box
        sx={{
          transition: "all",
          transitionTimingFunction: "ease-in-out",
          transitionDuration: "600ms",
          height:'100%',
        }}
        marginLeft={{md:`${toogle ? "6%" : "12%"}`, xs:0}}
        width={{md:`${toogle ? "94%" : "88%"}`, xs:'100%'}}
      >
      {/* mobile nav */}
      <Paper sx={{width:'100%', bgcolor:'transparent', display:{md:'none', xs:'block'}}} elevation={2}>
        <MobileDrawer/>
      </Paper>
        <Outlet />
      </Box>
    </Box>
    
    </div>
  );
}

export default DefaultLayout