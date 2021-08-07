import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { FormControl, Typography, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InputAdornment from "@material-ui/core/InputAdornment";
import Tooltip from "@material-ui/core/Tooltip";


export default class Dynamic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directors_array: ["director-0"]
    };
  }

  appendInput_director() {
    var newInput = `director-${this.state.directors_array.length}`;
    console.log(this.state.directors_array.concat([newInput]));
    this.setState(prevState => ({
      directors_array: prevState.directors_array.concat([newInput])
    }));
  }

  render() {
    console.log(this.state.directors_array);
    return (
      <div>
        {this.state.directors_array.map((input, index) => (
          <Grid  item>
            <Grid  item>
              <FormControl fullWidth margin="dense">
                <TextField
                  variant="outlined"
                  
                  id={input + "-name"}
                  label="Athlete Name"
                  name={input + "-name"}
                  size="medium"
                  className="name"
                />
              </FormControl>
            </Grid>
            <Grid  item>
              <FormControl fullWidth margin="dense">
                <TextField
                  variant="outlined"
                  required
                  type="email"
                  id={input + "-email"}
                  label=" Athlete Email "
                  name={input + "-email"}
                  size="medium"
                  className="email"
                />
              </FormControl>
            </Grid>
            <Grid  item>
              <FormControl fullWidth margin="dense">
                <TextField
                  variant="outlined"
                  required
                  type="tel"
                  id={input + "-mobile"}
                  label="Mobile Number"
                  name={input + "-mobile"}
                  size="medium"
                  className="mobile"
                  
                  
                  InputProps={{
                    endAdornment: index + 1 ===
                      this.state.directors_array.length && (
                      <InputAdornment position="bottom">
                        <Tooltip title="Add Athlete">
                          <Fab
                            color="primary"
                            size="small"
                            onClick={() => this.appendInput_director()}
                          >
                            <AddIcon/>
                          </Fab>
                        </Tooltip>
                      </InputAdornment>
                    )
                  }}

                  
                />
              </FormControl>
            </Grid>
          </Grid>
        ))}
      </div>
    );
  }
}