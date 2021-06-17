import {container} from "assets/jss/material-kit-react.js";
import typographyStyle from "assets/jss/material-kit-react/components/typographyStyle.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import {title} from "assets/jss/material-kit-react";
import cardBodyStyle from "assets/jss/material-kit-react/components/cardBodyStyle.js";
import cardHeaderStyle from "assets/jss/material-kit-react/components/cardHeaderStyle.js";
import cardStyle from "assets/jss/material-kit-react/components/cardStyle.js";
import cardFooterStyle from "assets/jss/material-kit-react/components/cardFooterStyle";

const infoStyles = {
    ...imagesStyles,
    ...typographyStyle,
    ...cardFooterStyle,
    ...cardBodyStyle,
    ...cardHeaderStyle,
    ...cardStyle,
    "@media (max-width: 576px)": {
        imageContainer: {
            display: "none",
        },
        infoGridItem: {
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "25%",
        },
        title: {
            textAlign: "center",
        },
    },

    "@media (min-width: 576px)": {
        infoGridItem: {
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "25%",
        },
        title: {
            textAlign: "center",
        },
    },
    "@media (max-width: 768px)": {
        imageContainer: {
            display: "none",
        },
    },
    "@media (min-width: 768px)": {
        infoGridItem: {
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "25%",
        },
        title: {
            textAlign: "center",
        },
        icons: {
            width: "50px",
            height: "50px",
            margin: "10px",
        },
    },

    "@media (min-width: 992px)": {
        infoGridItem: {
            display: "flex",
            justifyContent: "left",
            alignItems: "flex-start",
            flexDirection: "row",
            width: "100%",
            minHeight: "25%",
        },
    },
    "@media (min-width: 1200px)": {
        infoGridItem: {
            display: "flex",
            justifyContent: "left",
            alignItems: "flex-start",
            flexDirection: "row",
            width: "100%",
            height: "25%",
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
    titleIcons: {
        ...title,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
        color: "#3C4858",
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
        width: "64px",
        height: "64px",
        margin: "16px",
        float: "left",
        position: "relative",
        boxSizing: "border-box",
        color: "#06038d",
    },
    gridContainer: {
        marginRight: "0",
        marginLeft: "0",
        width: "100%",
    },
    media: {
        width: "100%",
        height: "30%",
        paddingTop: '347%',
        borderRadius: "6px",
    },
    card: {
        padding: "10px",
    },
    cardContent: {},
    textInfoContent: {},
    ...imagesStyles,
    ...typographyStyle,
};
export default infoStyles;