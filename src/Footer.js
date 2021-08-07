import React from 'react';

import './App.css';
import  { makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/Styles';
import  Button  from '@material-ui/core/Button';
import  Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import "@fontsource/black-ops-one";
import  AppBar from '@material-ui/core/AppBar';
import  Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Link from '@material-ui/core/Link';



const theme = createMuiTheme({
typography:{
   
    caption:{
        color: 'primary'
    },
  
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
  
    
  
  

   



    GroupButtton: {
     color:'#000000',
    },

  }));
  function Copyright() {
    return (
      <Typography variant="body2" color="primary" align="center">
        {'Copyright © '}
        <Link color="primary" href="https://gidifusion.com/">
          Gidifusion
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
             <div  style={{ textDecoration: 'none', color:'#fff',flexGrow : 1 , marginBottom: 15,}}>
             
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
                          
             </div>
             </Toolbar>
         </AppBar>
          </header>
     
    </div>

    
    </ThemeProvider>
  );
}

export default Footer;