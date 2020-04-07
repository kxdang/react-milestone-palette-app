import sizes from "./sizes";
import chroma from "chroma-js";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-6px",
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%",
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    padding: "10px",
    bottom: "0px",
    color: (props) =>
      chroma(props.color).luminance() <= 0.08
        ? "rgba(255,255,255,0.8)"
        : "rgba(0,0,0,0.7)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      color: "white",
      transform: "scale(1.5)",
    },
  },
};

export default styles;
