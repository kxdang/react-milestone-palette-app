import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Slider from "rc-slider";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";

import "rc-slider/assets/index.css";
import styles from "./styles/NavbarStyles";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }

  closeSnackbar() {
    this.setState({ open: false });
  }
  render() {
    const { level, changeLevel, showSlider, classes } = this.props;
    const { format } = this.state;
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">React Palette App</Link>
        </div>

        {showSlider && (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
                railStyle={{ height: "8px" }}
                activeDotStyle={{
                  backgroundColor: "#7fcd91",
                  outline: "none",
                  border: "2px solid #7fcd91",
                  boxShadow: "none",
                  width: "13px",
                  height: "13px",
                  marginLeft: "-7px",
                  marginTop: "-3px",
                }}
                dotStyle={{
                  backgroundColor: "#7fcd91",
                  outline: "none",
                  border: "2px solid #7fcd91",
                  boxShadow: "none",
                  width: "13px",
                  height: "13px",
                  marginLeft: "-7px",
                  marginTop: "-3px",
                }}
                handleStyle={{
                  backgroundColor: "#7fcd91",
                  outline: "none",
                  border: "2px solid #7fcd91",
                  boxShadow: "none",
                  width: "13px",
                  height: "13px",
                  marginLeft: "-7px",
                  marginTop: "-3px",
                }}
              />
            </div>
          </div>
        )}

        <div className={classes.selectContainer}>
          <Select onChange={this.handleFormatChange} value={format}>
            <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.open}
          autoHideDuration={2000}
          message={
            <span id="message-id">
              Format Changed to {format.toUpperCase()}
            </span>
          }
          ContentProps={{ "aria-describedby": "message-id" }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);
