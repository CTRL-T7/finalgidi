import React, {useState, useEffect} from 'react';

import './App.css';
import  { makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/Styles';
import  Button  from '@material-ui/core/Button';
import  Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import "@fontsource/black-ops-one";
import  IconButton from '@material-ui/core/IconButton';
import  AppBar from '@material-ui/core/AppBar';
import  Toolbar from '@material-ui/core/Toolbar';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import   Drawer from '@material-ui/core/Drawer';
import   MenuItem from '@material-ui/core/MenuItem';
import ConfirmationNumberSharpIcon from '@material-ui/icons/ConfirmationNumberSharp';




const theme = createMuiTheme({
  
    typography:{
      h2:{
        paddingBottom:0,
        fontFamily:"Black ops one",
        marginBottom:0,
        borderBottom:0,
      },
  
      h4: {
        fontFamily:"Black ops one",
        
      },
  
      subtitle2:{
                fontSize:50,
                marginTop:0,
                borderTop:0,
                marginBottom:40,
                paddingTop:0,
                fontFamily:'shadows Into light'
      },
  
      body1:{
              marginBottom:30,
              marginTop:30,
              fontFamily: 'merriweather sans',
              fontSize: 16,
      }
    
    },
    
    palette: {
      primary: {
        main: '#0e9dd9',
      
        
      },
      secondary: {
        main: '#6114a4',
        
        
        
      },

      stationary:{
        main:'#e9bc05',
      }
    },
  
  })



  const useStyles = makeStyles((theme)=>({
  
    root: {
      height: '100vh',
    },
  
    image: {
      backgroundImage: 'url(https://source.unsplash.com/-oJY05NPMFA/640x960)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      marginTop:15,
    },
    paper: {
      
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
        marginTop:15,
        marginBottom: 0,
        
      
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      
    },
    submit: {
      marginBottom:10,
      marginTop:5,
    },
  
    headerbutton:{

        marginLeft:10,
    },

    ticketbutton:{

      color:'#000',
      backgroundColor:'#FBF608',
      fontWeight:'bold',
    },

    formetitle: {
      
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    realform: {
      width: '100%', // Fix IE 11 issue.
      
    },
    Appheader: {
      
    },



    title: {
    
    },

  }));


  



function Nav() {
    const classes = useStyles();

    const [state, setState] = useState({
      mobileView: false,
    });
  
    const { mobileView } = state;
  
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

   return (
     <ThemeProvider theme={theme}>
       
     <div className="Nav" >
       <header className="AppHeader">
         <AppBar  className='app-b'color='secondary' position="static">
           <Toolbar>
          <IconButton
            color='inherit'
            aria-label='Menu'
            className={classes.toggleDrawer}
            >
          
          </IconButton>
             <NavLink to ='/' style={{ textDecoration: 'none', color:'#fff',flexGrow : 1}}>
             <Typography variant='h4' color='seconadry' className={classes.appTitle}>
                 GIDIFUSION
             </Typography>
             </NavLink>
             
             <NavLink to ='./Fan'>
             <Button 
              
             variant= 'contained'
             size='small'
             className={classes.ticketbutton} >
                
               Ticket
               < ConfirmationNumberSharpIcon />
             </Button>
             </NavLink>

             <NavLink to ='./About'>
             <Button 
             color='primary' 
             variant= 'contained'
             size='small'
             className={classes.headerbutton} >
               About Us
             </Button>
             </NavLink>

           </Toolbar>
         </AppBar>
          </header>
     
    </div>
    
    </ThemeProvider>
  );
}
export default Nav;