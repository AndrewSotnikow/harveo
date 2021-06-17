const parallaxStyle = {
  parallax: {
    height: "90vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    backdropFilter: "blur(100px)",
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(100px)",
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
      backdropFilter: "blur(100px)",
    },
  },
  small: {
    height: "380px",
  },
};

export default parallaxStyle;
