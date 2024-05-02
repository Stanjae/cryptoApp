import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CurrencyExchange, Feed, Home, MenuOpen, MonetizationOn } from '@mui/icons-material';
import { IconButton, styled } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

const navlinks = [
    {title:'Home', url:'/', ico:<Home color='secondary' sx={{fontSize:'37px'}}/>},
    {title:'Crypto', url:'/cryptocurrencies', ico:<MonetizationOn color='secondary'  sx={{fontSize:'37px'}}/>},
    {title:'Exchanges', url:'/exchanges', ico:<CurrencyExchange color='secondary'  sx={{fontSize:'37px'}}/>},
    {title:'News', url:'/news', ico:<Feed color='secondary'  sx={{fontSize:'37px'}}/>}

];

const CustomNavLink = styled(NavLink)(({theme})=>({
    color:theme.palette.secondary.main,
    textDecoration:'none',
    '& .hover':{
        'backgroundColor':theme.palette.success,
    }
})
)

export default function MobileDrawer() {
  const [open, setOpen] = React.useState(false);
  const {pathname} = useLocation()

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
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
  );

  return (
    <div>
     <Box sx={{ display: "flex" }}>
          <IconButton onClick={toggleDrawer(true)}
            size="large"
            sx={{ pl: "15px" }}
          >
            <MenuOpen sx={{ color: "#fff" }} fontSize="large" />
          </IconButton>
          
        </Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
