import  React from  'react';
import  './App.css';
import  Paper from '@material-ui/core/Paper';
import  Grid from '@material-ui/core/Grid';
import  { makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/';
import { Typography, TextField, FormLabel, FormControlLabel } from '@material-ui/core';
import  Radio from '@material-ui/core/Radio';
import  RadioGroup from '@material-ui/core/RadioGroup';
import  Button from '@material-ui/core/Button';
import  FormControl from '@material-ui/core/FormControl';
import 'fontsource-roboto';
import "@fontsource/black-ops-one";
import ConfirmationNumberSharpIcon from '@material-ui/icons/ConfirmationNumberSharp';
import InputAdornment from '@material-ui/core/InputAdornment';


const theme = createMuiTheme({
  
    typography:{
     
  
      h4: {
        fontFamily:"Black ops one",
        
      },
  
      subtitle2:{
                fontSize:30,
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
      },

        caption:{
          marginTop:40,
          color:'#e9bc05',
        }

    },
    
    palette: {
      primary: {
        main: '#0e9dd9',
      },
      secondary: {
        main: '#6114a4'
      },

      inherint:{
        main:'#e9bc05'
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
      marginTop:0,
       paddingTop: '20px',
        overflow: "hidden",
        paddingRight: "20px",  
        paddingLeft: "20px",
      },
  
    paper: {
      
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
   
    form: {
      width: '100%', // Fix IE 11 issue.
      marginBottom:20,
    },
    submit: {
      marginBottom:90,
      marginTop:20,
      
    },
  
   
    
    
    
  }));

 




function Fan() {

     const classes = useStyles();
    const paperStyle={padding:'30px 20px',   paddingLeft: "15px", paddingRight: "15px", width:"100%", maxWidth:400, margin: '20px auto', marginBottom:250, marginTop:100,}
    
    return(
        <ThemeProvider theme={theme}>
        <Grid  className={classes.image}> 
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Typography variant='h4'color="primary">
                        GIDIFUSION
                        </Typography>
                
                <Typography variant='subtitle2' color="secondary"> Fan Sign Up!</Typography>
                <Typography varaint='caption' color='inherint'>Please Fill This Form To Sign Up For The Event And Get Your Tickets</Typography>
                </Grid>
                <form>
                    <TextField fullWidth 
                    name='name'
                    variant='outlined'
                    type= 'text'
                    label='Name'
                    placeholder='Enter Your Name'
                    
                    />
                    <TextField fullWidth 
                    name='email'
                    variant='outlined'
                    type= 'email'
                    label='Email'
                    placeholder='Enter A Valid Email'
                    
                    />

                    <FormControl component='fieldset'>
                        <FormLabel component='legend'>Reping?</FormLabel>
                            <RadioGroup aria-label='Reping' name='Reping' style={{display:'initial'}}>
                                <FormControlLabel value='Mainland' color='Primary' control={<Radio/>} label='Mainland'/>

                                <FormControlLabel value='Isalnd' control={<Radio/>} label='Island'/>

                            </RadioGroup>
                    </FormControl>


                    
                    
                      <TextField
                      id="ticketqty"
                      label="TICKETS"
                      type="number"
                      
                      InputLabelProps={{
                        shrink: true,
                      }}

                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            < ConfirmationNumberSharpIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                    />
                  


                    <TextField fullWidth 
                    name='phonenumber'
                    variant='outlined'
                    type= 'tel'
                    label='Phone Number'
                    placeholder='08000000000'
                    
                    />

                    
                      <Button className={classes.submit} type='submit' variant='contained' color='primary' fullWidth >Sign UP</Button>
                     
                </form>
                
              
               
            </Paper>
        </Grid>
        </ThemeProvider>
    )

}



export default Fan;