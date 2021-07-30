import React from 'react';
import './App.css';
import  { makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/Styles';
import  Typography from '@material-ui/core/Typography';

import  Paper from '@material-ui/core/Paper';
import  Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';
import "@fontsource/shadows-into-light"
import "@fontsource/merriweather-sans"

import SportsBasketballSharpIcon from '@material-ui/icons/SportsBasketballSharp';
import  Button  from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';


const theme = createMuiTheme({
  
    typography:{
      h2:{
        paddingBottom:0,
        fontFamily:"Black ops one",
        marginBottom:0,
        borderBottom:0,
        fontsize:10,
      },
  
      h4: {
        fontFamily:"Black ops one",
        marginRight:850,
      },
  
      subtitle2:{
                fontSize:40,
                marginTop:0,
                borderTop:0,
                marginBottom:20,
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
        main: '#6114a4'
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
      
    },

    wall:{
      backgroundImage: 'url(https://source.unsplash.com/-oJY05NPMFA/640x960)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contained',
      backgroundPosition: 'center',
      marginTop:0,
       paddingTop: '20px',
        overflow: "hidden",
        paddingRight: "50px",  
        paddingLeft: "20px",
    },

    paper: {
      
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingRight:'10px',
      paddingLeft:'10px',
      paddingTop: '10px',
      
    },

    flyer:{
      width:100,
      height: 100,
    },
    avatar: {
        marginTop:15,
        marginBottom: 0,
        fontSize:50,
      
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      
    },
    submit: {
      marginBottom:5,
      marginTop:5,
    },
  
    headerbutton:{
        marginLeft:10,
        
    },

    formetitle: {
      
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    
    realform: {
      width: '100%', // Fix IE 11 issue.
      
    },
    signup: {
      
    },
  }));


    






function Home() {
    const classes = useStyles();
   return (
    <ThemeProvider theme={theme}>    
    <Grid container component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
  <div className={classes.paper}>
    <Typography className={classes.avatar} variant='h2' color="primary" contained>
      GIDIFUSION
    </Typography>
    <Typography variant="subtitle2" color="secondary" align='right'>
      You Gotta Rep!
    </Typography>

    <CardMedia
    className={classes.flyer}
    image="/src/image/gidiflyer.jpg"
    title="Paella dish"
    />
      
    
   
      <NavLink to ='./Coach'>
      <Button
        
        type="submit"
        
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Register Your Team
      </Button>
      </NavLink>

      <NavLink to='./Athlete'>
      <Button
        type="submit"
      
        variant="contained"
        color="secondary"
        className={classes.submit}
      >
        Attend As A Fan
      </Button>
      </NavLink>

      
     
  </div>
</Grid>
</Grid>
</ThemeProvider>
  );
}

export default Home;