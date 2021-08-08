import React, {useState, useEffect} from 'react';

import './App.css';
import  { makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/';
import  Button  from '@material-ui/core/Button';
import  Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import "@fontsource/black-ops-one";
import  IconButton from '@material-ui/core/IconButton';
import  AppBar from '@material-ui/core/AppBar';
import  Toolbar from '@material-ui/core/Toolbar';
import {  Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import   Drawer from '@material-ui/core/Drawer';
import   MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';



const headersData = [
  {
    label: "Ticket",
    href: "./fan",
  },
  {
    label: "About Us",
    href: "./About",
  },
  
];


const theme = createMuiTheme({
  
    typography:{
     
      h6: {
        fontFamily:"Black ops one",
        
      },
  
     
    },
    
    palette: {
      primary: {
        main: '#0e9dd9',
      },

      secondary: {
        main: '#6114a4',  
      },

      
    },
  
  })



  const useStyles = makeStyles((theme)=>({
  
    root: {
      height: '100vh',
    },
  

    logo: {
      fontFamily: "Black ops one",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },

    menuButton: {
      fontFamily: "Roboto",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    },

    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },


    drawerContainer: {
      padding: "20px 30px",
    },

  
  }));


  



function Nav() {
    const { logo, menuButton, toolbar, drawerContainer } = useStyles();

    const [state, setState] = useState({
      mobileView: false,
      drawerOpen:false,
    });
  
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
      window.addEventListener("resize", () => setResponsiveness());
  
      return () => {
        window.removeEventListener("resize", () => setResponsiveness());
      }
    },[]);


    const displayDesktop = () => {
      return (
        <Toolbar className={toolbar}>
          {femmecubatorLogo}
          <div>{getMenuButtons()}</div>
        </Toolbar>
      );
    };


    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
  



        return (
          <Toolbar>
            <IconButton
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon />
            </IconButton>
    
            <Drawer
              {...{
                anchor: "left",
                open: drawerOpen,
                onClose: handleDrawerClose,
              }}
            >
              <div className={drawerContainer}>{getDrawerChoices()}</div>
            </Drawer>
    
            <div>{femmecubatorLogo}</div>
          </Toolbar>
        );
      };

      const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Link
              {...{
                component: RouterLink,
                to: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: href,
              }}
            >
              <MenuItem>{label}</MenuItem>
            </Link>
          );
        });
      };

      


      const femmecubatorLogo = (
        <Link href ='./'>
        <Typography variant="h6" component="h1" className={logo}>
          GIDIFUSION
        </Typography>
        </Link>
      );  


      const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
          return (
            
            
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                className: menuButton,
              }}
            >
              {label}
            </Button>
            
          );
        });
      };

   return (
     <ThemeProvider theme={theme}>
       
    
       <header className="AppHeader">
         <AppBar  className='app-b'color='secondary' position="static">
         {mobileView ? displayMobile() : displayDesktop()}
         </AppBar>
          </header>
     
    
    
    </ThemeProvider>
  );
}
export default Nav;