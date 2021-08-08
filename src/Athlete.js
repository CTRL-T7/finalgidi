import  React from  'react';
import  './App.css';

import  {  createMuiTheme} from '@material-ui/core';
import { Typography, TextField, FormLabel,  FormControlLabel } from '@material-ui/core';
import  Radio from '@material-ui/core/Radio';
import  RadioGroup from '@material-ui/core/RadioGroup';

import  FormControl from '@material-ui/core/FormControl';
import 'fontsource-roboto';
import "@fontsource/black-ops-one";
import Checkbox from '@material-ui/core/Checkbox';








const theme = createMuiTheme({
  
    typography:{
      
        
            caption:{
              marginTop:30,
              align:'left',
              
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







  
   




function Athlete() {
   
 
    
  
  

    const [state, setState] = React.useState({
      checkedB: true,
    });

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    
   
  
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
        
        
          
            
                
                    
                
               
                
                <form >

               

                    <TextField fullWidth
                    name='Teamname'
                    variant='outlined'
                    type= 'text'
                    label='Coach  Name'
                    placeholder='Enter Full Name'
                    
                    />
                    <TextField fullWidth 
                    name='email'
                    variant='outlined'
                    type= 'email'
                    label=' Coach Email'
                    placeholder='Enter A Valid Email'
                    
                    />

                   



                      
                    <FormControl component='fieldset'>
                        <FormLabel component='legend'>Reping?</FormLabel>
                            <RadioGroup  aria-label='Reping' name='Reping' style={{display:'initial', marginBottom:'0px' , paddingBottom:'0px'}}>
                                <FormControlLabel value='Mainland' control={<Radio/>} label='Mainland'/>

                                <FormControlLabel value='Island' control={<Radio/>} label='Island'/>

                            </RadioGroup>
                    </FormControl>
                    
                   

                   

                    <TextField fullWidth 
                    name='phonenumber'
                    variant='outlined'
                    type= 'tel'
                    label='Phone Number'
                    placeholder='08000000000'
                    
                    />



        <FormControlLabel
          control={
          <Checkbox
           
          checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
            align='left'
            required
          />
        }
        label= { <Typography variant='caption'> I agree and will abide by all the rules of the Gidifusion Tournament. I recognize the possibility of physical injury associated 
        with participating in Gidifusion sponsored activities and in consideration for Gidifusion providing these activities, 
        do release Gidifusion and its staff members from all liability for any injuries sustained while on Gidifusion 
        property and/or participating in Gidifusion activities. </Typography>}
      />
                    
            </form>

               


               
               
            
        
      
    )

}



export default Athlete;