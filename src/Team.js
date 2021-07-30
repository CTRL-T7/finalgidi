import  React from  'react';
import  './App.css';
import  Paper from '@material-ui/core/Paper';
import  Grid from '@material-ui/core/Grid';
import  { makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/Styles';
import { Typography, TextField, FormLabel,  FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';







const useStyles = makeStyles((theme)=>({
  
  root: {
    height: '100vh',
  },

  dropdown: {
    display: 'flex',
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

  teamMembers:{
    marginBottom: 20,
  }
}));

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









function Team() {
   
 
    const classes = useStyles();
    const paperStyle={padding:'30px 20px',   paddingLeft: "15px", paddingRight: "15px", width:"100%", maxWidth:400, margin: '20px auto', marginBottom:250, marginTop:100,}
    const gdStyle={ margin: '10px auto',}

    const teamRoles = [
      
      { position: 'Center', price: 5000 },
      { position: 'Power Forward', price: 5000 },
      { position: 'Small Forward', price: 5000 },
      { position: 'Shooting Guard', price: 5000 },
      { position: 'Point Guard', price: 5000 },
    ]

    const [state, setState] = React.useState({
      checkedB: true,
    });

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };


    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
  

    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

return(
    <ThemeProvider theme={theme}>
    <Grid className={classes.image}>
      
        <Paper elevation={20} style={paperStyle}>
            <Grid align='center' style={gdStyle}>
                
            
            
            </Grid>
            <form >


<TextField fullWidth
name='Teamname'
variant='outlined'
type= 'text'
label='Team Name'
placeholder='Enter Team Name'

/>
<TextField fullWidth 
name='email'
variant='outlined'
type= 'email'
label=' Team Email'
placeholder='Enter A Valid Email'

/>


                </form>

               


               
               
            </Paper>
        </Grid>
        </ThemeProvider>
    )

}



export default Team;