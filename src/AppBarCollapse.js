import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";


const styles = theme => ({
    root: {
      position: "absolute",
      right: 0
    },
    buttonBar: {
      [theme.breakpoints.down("xs")]: {
        display: "none"
      },
      margin: "10px",
      paddingLeft: "16px",
      right: 0,
      position: "relative",
      width: "100%",
      background: "transparent"
    }
  });
  
  const AppBarCollapse = props => (
    <div className={props.classes.root}>
      <ButtonAppBarCollapse>
        <MenuItem>Login</MenuItem>
        <MenuItem>Signup</MenuItem>
      </ButtonAppBarCollapse>
      <div className={props.classes.buttonBar} id="appbar-collapse">
        <Button color="inherit">Login</Button>
        <Button color="inherit">Signup</Button>
      </div>
    </div>
  );
  
  export default withStyles(styles)(AppBarCollapse);
  