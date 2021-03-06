import  React from  'react';
import  './App.css';
import  Paper from '@material-ui/core/Paper';
import  Grid from '@material-ui/core/Grid';
import  { makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/';
import { Typography} from '@material-ui/core';

import  Button from '@material-ui/core/Button';
import 'fontsource-roboto';
import "@fontsource/black-ops-one";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Athlete from "./Athlete";
import Team from   "./Team";
import Addplayer from './Addplayer';



const theme = createMuiTheme({
  
    typography:{
      h2:{
        paddingBottom:0,
        fontFamily:"Black ops one",
        marginBottom:0,
        borderBottom:0,
        fontsize:5,
        
        
      },
  
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
  
            label:{
                fontsize:1,
                color:'inherint'
            },
      body1:{
              marginBottom:30,
              marginTop:30,
              fontFamily: 'merriweather sans',
              fontSize: 16,
      },
        
            caption:{
              marginTop:30,
              align:'Center',
              
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
  
    stepper: {
      height: '100vh',
    },

    dropdown: {
      display: 'flex',
    },

    
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: 5,
    },
    instructions: {
      marginTop: 5,
      marginBottom: 5,
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
  

    formetitle: {
      
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    
    realform: {
      width: '100%', // Fix IE 11 issue.
      
    },
  

    teamMembers:{
      marginBottom: 20,
    }
  }));



  
 

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Athlete/>
        )
      case 1:
        return (
          <Team/>
        )
      case 2:
        return (
          <Addplayer/>
        )
      default:
        return 'Unknown stepIndex';
    }
  }

  function Coach() {
    const [state, setState] = React.useState({
        checkedB: true,
      });
  
 
    const classes = useStyles();
    const paperStyle={padding:'30px 20px]',   paddingLeft: "15px", paddingRight: "15px", width:"100%", maxWidth:400, margin: '20px auto', marginBottom:250, marginTop:100,}
    const gdStyle={ margin: '10px auto', marginBottom:100, marginTop:100, paddingBottom:100, paddingTop:100}

  

      function getSteps() {
        return ['Create Coach Profile', 'Create Team', 'Add Players'];
      }

    
        
        const [activeStep, setActiveStep] = React.useState(0);
        const steps = getSteps();
      
        const handleNext = () => {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        };
      
        const handleBack = () => {
          setActiveStep((prevActiveStep) => prevActiveStep - 1);
        };
      
        const handleReset = () => {
          setActiveStep(0);
        }
      
    return(
        <ThemeProvider theme={theme}>
        <Grid className={classes.image}>
          
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center' style={gdStyle}>
                    <Typography variant='h4'color="primary"  contained>
                        GIDIFUSION
                        </Typography>
                
                <Typography variant='subtitle2' color="secondary">Team Sign Up!</Typography>
                <Typography varaint='caption'>Please Fill This Form To Participate in The Competition</Typography>

                <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  
                </Grid>
               
               
                </Paper>
        </Grid>
        </ThemeProvider>
    )

}



export default Coach;