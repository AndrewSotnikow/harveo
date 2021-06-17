import {container} from "assets/jss/material-kit-react.js";
import typographyStyle from "assets/jss/material-kit-react/components/typographyStyle.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import {title} from "assets/jss/material-kit-react";

const aboutStyles = {
    "@media (max-width: 1140px)": {
        photo: {
            width: "86%", margin: "0 auto", paddingRight: "8%"
        },
    },
    "@media (max-width: 768px)": {
        photo: {
            width: "116%", margin: "0 auto", paddingRight: "8%"
        },
    },
    "@media (min-width: 1200px)": {
        photo: {
            width: "75%", margin: "0 auto", paddingRight: "8%"
        },
    },
    section: {
        padding: "70px 0",
        paddingTop: "0",
    }, gridItem: {
        width: "25%",
    },
    container,
    title: {
        ...title,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
    },
    space: {
        paddingTop: "70px",
    },
    typo: {
        paddingLeft: "25%",
        marginBottom: "40px",
        position: "relative",
        width: "100%",
        color: "red",
    },
    note: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        bottom: "10px",
        color: "#c0c1c2",
        display: "block",
        fontWeight: "400",
        fontSize: "13px",
        lineHeight: "13px",
        left: "0",
        marginLeft: "20px",
        position: "absolute",
        width: "260px",
    },
    gridContainer: {
        marginRight: "0",
        marginLeft: "0",
        width: "100%",
    },
    group: {
        marginTop: "70px",
    },

    ...imagesStyles,
    ...typographyStyle,
};
console.log(aboutStyles);
export default aboutStyles;