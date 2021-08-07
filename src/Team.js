import  React from  'react';
import  './App.css';
import  Paper from '@material-ui/core/Paper';
import  Grid from '@material-ui/core/Grid';
import  { makeStyles, createMuiTheme} from '@material-ui/core/Styles';
import {  TextField } from '@material-ui/core';








  


function Team() {
   
 
  

   
   
return(
   
            
            
            
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

               


               
               
            
    )

}



export default Team;