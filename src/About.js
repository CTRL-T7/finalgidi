import  React from  'react';
import  './App.css';
import  Paper from '@material-ui/core/Paper';
import  Grid from '@material-ui/core/Grid';
import  { makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/Styles';
import { Typography, } from '@material-ui/core';


const theme = createMuiTheme({
  
    typography:{
      h5:{
        paddingBottom:0,
        fontFamily: 'Black ops one',
        marginBottom:0,
        borderBottom:0,
        fontsize:5,
        color:'#ffffff'
        
        
      },
  
      h3: {
        fontFamily:'Black ops one',
        marginTop:10,
        marginBottom: 20,
        fontWeight: 500,
        fontsize:100,
        color: 'primary',
      
        
      },
  
      subtitle2:{
                fontSize:30,
                marginTop:0,
                borderTop:0,
                marginBottom:40,
                paddingTop:0,
                fontFamily:'shadows Into light'
      },
  

      subtitle1:{
        fontStyle: 'italic',

      },

      body1:{
              marginBottom:30,
              marginTop:20,
              fontFamily: 'shadows Into light',
              fontSize: 17,
              color: '#6114a4',
              fontWeight:'300'
      },
        
            caption:{
              marginTop:30,
              align:'Center',
              
            }

    },

    
    
    palette: {
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#FBF608',
      },
      
    },
    
  })






const useStyles = makeStyles((theme)=>({
    
  
  image: {
    backgroundImage: 'url(https://source.unsplash.com/-oJY05NPMFA/640x960)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: 0,
    paddingTop: '20px',
    overflow: "hidden",
    paddingRight: "20px",  
    paddingLeft: "20px",

    
  },


  aboutpaper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginRight: 5,
    marginLeft:5,
    
    
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

 

 
function About() {
  const classes = useStyles();
    const paperStyle= {backgroundColor: 'white', paddingTop:'10px 5px', paddingLeft: "10px", paddingRight: "10px", width: "350px", height:'230px', marginBottom:50, marginTop:50,
     maxWidth: 400, marginLeft: "12px", marginRight: "12px",  paddingBottom:'10px'}
    const gdStyle={ margin: '10px auto', paddingTop:"10px"} 
    
    return(
        <ThemeProvider theme={theme} >


             <Grid  className={classes.image}>


             
             <Typography variant='h3' fontWeight="fontWeightBold" color="secondary" outlined align="center">
                   ABOUT US
             </Typography>            


            
                <div className={classes.aboutpaper}> 

                 
            
             
                     
                <Paper elevation={20} boxshadow={40}  style={paperStyle}>


                
                  
                <Grid align='center' style={gdStyle}>

                        <Typography variant='body1' fontWeight="fontWeightBold">                        
                                

                                    WHO WE ARE...<br/>
                                      Tsurge is a  youthful enthusiastic team
                                        We have a passion for making series of high spirited events in Lagos.
                                        With a mammoth desire of procuring and producing a grand fusion of talents
                                        and networking.
                        </Typography>
                        </Grid>
                        </Paper>
                        
                        <Paper elevation={20} style={paperStyle}>

                        <Grid align='center' style={gdStyle}>

                        <Typography>
                                WHAT WE ARE DOING...<br/>
                                  Gidifusion our maiden event and a branch in our family tree was sprung out
                                    with an intention to unravel basketball players or individuals with a disposed
                                    liking to basketball, in every hinge and hiding in Lagos.
                        </Typography>

                        </Grid>

                        </Paper>


                        <Paper elevation={20} style={paperStyle}>

                        <Grid align='center' style={gdStyle}>
                          <Typography>
                        <p> OUR MISSION...<br/>  
                                  Our sole mission is to make this fun, energetic, talent sourcing and leave an
                                    accreditation memory in everyone. Most especially the youths who are our
                                    central target.</p>

                                
                              </Typography>
                        </Grid> 
                       
                        </Paper>
                        </div>

                       
                         </Grid>
                
                </ThemeProvider>
    );           
    }

export default About;