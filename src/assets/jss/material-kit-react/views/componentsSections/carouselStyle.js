import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme();

theme.spacing(2) // = 8 * 2

const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
};
const container = {
  ...containerFluid,
  // "@media (min-width: 576px)": {
  //   maxWidth: "80%",
  // },
  // "@media (min-width: 768px)": {
  //   maxWidth: "80%",
  // },
  // "@media (min-width: 992px)": {
  //   maxWidth: "80%",
  // },
  // "@media (min-width: 1200px)": {
  //   maxWidth: "80%",
  // },
};


const carouselStyle = {

    section: {
        padding: "70px 0",
        marginTop: theme.spacing(8),
    },
    container: {
      ...container,
        width: "100%",
    },
    marginAuto: {
        marginLeft: "auto !important",
        marginRight: "auto !important",
    },
};

export default carouselStyle;
