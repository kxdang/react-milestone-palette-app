import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import CachedIcon from "@material-ui/icons/Cached";
import chroma from "chroma-js";
import styles from "./styles/ColorPickerFormStyles";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { currentColor: "teal", newColorName: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.randomColorGenerator = this.randomColorGenerator.bind(this);
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.props.colors.every(
        ({ name }) => name.trim().toLowerCase() !== value.toLowerCase()
      )
    );

    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }

  randomColorGenerator() {
    this.setState({ currentColor: chroma.random() });
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  render() {
    const { isPaletteFull, classes } = this.props;
    return (
      <div>
        <ChromePicker
          color={this.state.currentColor}
          onChangeComplete={this.updateCurrentColor}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
          <TextValidator
            label="Color Name"
            value={this.state.newColorName}
            name="newColorName"
            className={classes.colorNameInput}
            variant="filled"
            margin="normal"
            placeholder="e.g Honey Yellow"
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Colour name is required",
              "Colour name must be unique",
              "Colour already in palette",
            ]}
          />

          <Button
            variant="contained"
            type="submit"
            color="primary"
            className={classes.addColor}
            style={{
              backgroundColor: isPaletteFull ? "grey" : this.state.currentColor,
            }}
            disabled={isPaletteFull}
          >
            {isPaletteFull ? "Palette Full" : "Add Color"}
          </Button>
          <div className={classes.randomColorBtn}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.randomColorGenerator}
              disabled={isPaletteFull}
            >
              <CachedIcon />
              {/* <span style={{ paddingLeft: `10px` }}>Random Color</span> */}
            </Button>
          </div>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
