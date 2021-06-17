import {container} from "assets/jss/material-kit-react.js";
import typographyStyle from "assets/jss/material-kit-react/components/typographyStyle.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import {title} from "assets/jss/material-kit-react";

const feedbackStyles = {
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
    commentGridItem:{
        width: "100%",
    },
    space: {
        marginTop: "30px",
    },
    ...imagesStyles,
    ...typographyStyle,
};
export default feedbackStyles;