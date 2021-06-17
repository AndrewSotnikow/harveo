import { container } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  title: {
    zIndex: "999",
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
  },
  subtitle: {
    zIndex: "999",
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
  blureStyle: {
    width: "100%",
    height: "100%",
    backdropFilter: "blur(3px)",
    position: "absolute",
    zIndex: "-1",
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  },
  animation: {
    top: "0",
    left: "0",
    width: "100%",
    height: "50%",
    position: "absolute",
    zIndex: "5",
  },

  space: {
    marginTop: "30px",
    color: "#06038d",
  },

};

export default componentsStyle;
