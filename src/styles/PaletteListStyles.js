import sizes from "./sizes";

export default {
  root: {
    backgroundColor: "#097ddb",
    height: "100vh",
    display: "flex",
    overflowY: "auto",
    alignItems: "flex-start",
    justifyContent: "center",
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
    color: "white",
    "& a": {
      color: "white",
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
};
