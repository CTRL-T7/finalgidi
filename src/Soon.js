import  React from  'react';
import  './App.css';
import  { makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/Styles';
import { Typography,} from '@material-ui/core';
import 'fontsource-roboto';
import "@fontsource/black-ops-one";
import "@fontsource/shadows-into-light"
import  Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme)=>({
image: {
    backgroundImage: 'url(https://source.unsplash.com/-oJY05NPMFA/640x960)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop:0,
     paddingTop: '20px',
      overflow: "hidden",
      paddingRight: "20px",  
      paddingLeft: "50px",
    },

  }));

    const theme = createMuiTheme({

      typography:{
        h2:{
          paddingBottom:0,
          fontFamily:"Black ops one",
          marginBottom:200,
          borderBottom:200,
          fontsize:5,
          marginLeft: 250,
          marginRight: 50,
          
        },


        h5:{
          paddingBottom:0,
          fontFamily:"shadows into light ",
          marginBottom:0,
          
          fontsize:5,
          marginLeft: 250,
          marginRight: 50,
          
        },

        

      }
      })

  


    function Soon() {
   
 
        const classes = useStyles();
        return(
          <ThemeProvider theme={theme}>
              <Grid className={classes.image}>
                
                  <Typography variant='h2'>
                  <h2>
                    COMING SOON
                  </h2>
                </Typography>
              </Grid>
          </ThemeProvider>

)

}
export default Soon;