import { container, primaryColor } from "assets/jss/material-kit-react.js";
import typographyStyle from "assets/jss/material-kit-react/components/typographyStyle.js";
import {defaultFont} from "assets/jss/material-kit-react";

const footerStyle = {
  ...typographyStyle,

  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px",
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
  },
  left: {
    float: "left!important",
    display: "block",
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important",
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF",
    },
  },
  container,
  list: {
    ...defaultFont,
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit",
  },
  listItem: {
    boxSizing: "border-box",
    float: "left",
    color: "inherit",
    position: "relative",
    display: "flex",
    justifyContent: "left",
    alignItems:"flex-start",
    flexDirection: "row",
    width: "auto",
    margin: "4px 0 4px 0",
    padding: "0",
  },
  listItemText: {
    padding: "0 !important",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px",
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
    float: "left",
    color: "inherit",
    position: "relative",
    boxSizing: "border-box",
  },
};

export default footerStyle;
