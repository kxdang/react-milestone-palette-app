import sizes from "./sizes";
import bg from "./bg.svg";

export default {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out",
    },
  },
  root: {
    height: "100vh",
    display: "flex",
    overflowY: "auto",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#FAFAFA",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    /* background by SVGBackgrounds.com */
  },
  heading: {
    fontSize: "2rem",
    color: "#5c676b",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%",
    },
    [sizes.down("xl")]: {
      width: "75%",
    },
  },
  nav: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    color: "#5c676b",
    "& a": {
      color: "#5c676b",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "1.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
    },
  },
  button: {
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  create: {
    margin: 0,
    marginTop: "3px",
  },
};
