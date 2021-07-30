import React from 'react';

import './App.css';
import  { makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/Styles';
import  Button  from '@material-ui/core/Button';
import  Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import "@fontsource/black-ops-one";

import  AppBar from '@material-ui/core/AppBar';
import  Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Link from '@material-ui/core/Link';



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


    caption:{
        color: 'primary'


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
      main: '#000000',
      
    },
    secondary: {
      main: '#e9bc05',
      
      
    },

    
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
      
      paddingBottom: 10,
    },



    GroupButtton: {
     color:'#000000',
    },

  }));
  function Copyright() {
    return (
      <Typography variant="body2" color="primary" align="center">
        {'Copyright © '}
        <Link color="primary" href="https://material-ui.com/">
          TsurgeNg
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  function Footer() {
    const classes = useStyles();
   return (
     <ThemeProvider theme={theme}>
       
     <div className="Footer" >
       <header className="AppHeader">
         <AppBar  className='app-b'color='secondary' position="static">
           <Toolbar>
             <NavLink to ='/' style={{ textDecoration: 'none', color:'#fff',flexGrow : 1 , marginBottom: 15,}}>
             
             <Box mt={5} align="center" display='block' justifyContent='center' color='primary'>
                          <div>
                          <Typography variant='caption' color="primary" align='center'>Powered By Tsurge</Typography>
                          </div>
                          <ButtonGroup color="primary">
                          <Button position='absolute'  color='primary'>
                          <IconButton href='https://www.twitter.com/TsurgeNg/' color='primary' ><TwitterIcon/></IconButton>
                          <IconButton href='https://www.instagram.com/tsurge.ng/'color='primary'><InstagramIcon/></IconButton>
                          <IconButton href='mailto:info@gidifusion.com'color='primary'><EmailIcon/></IconButton>

                          </Button>
                          </ButtonGroup>
                          <Copyright color='primary' />
                          </Box>
                          
             </NavLink>
             </Toolbar>
         </AppBar>
          </header>
     
    </div>

    
    </ThemeProvider>
  );
}

export default Footer;