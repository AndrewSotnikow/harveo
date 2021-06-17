import {container} from "assets/jss/material-kit-react.js";
import typographyStyle from "assets/jss/material-kit-react/components/typographyStyle.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import {title} from "assets/jss/material-kit-react";
import cardBodyStyle from "assets/jss/material-kit-react/components/cardBodyStyle.js";
import cardHeaderStyle from "assets/jss/material-kit-react/components/cardHeaderStyle.js";
import cardStyle from "assets/jss/material-kit-react/components/cardStyle.js";
import cardFooterStyle from "assets/jss/material-kit-react/components/cardFooterStyle";

const offerStyles = {
    ...imagesStyles,
    ...typographyStyle,
    ...cardFooterStyle,
    ...cardBodyStyle,
    ...cardHeaderStyle,
    ...cardStyle,
    "@media (min-width: 1024px)": {
        cardContent: {
            width: "100%",
            height: "405px",
        },
    },
    section: {
        padding: "70px 0",
        paddingTop: "0",
        backgroundColor: "rgba(220, 220, 220, 0.1)",
    },

    gridItem: {
        width: "25%",
    },
    container,
    title: {
        ...title,
        paddingTop: "70px",
    },
    typo: {
        paddingLeft: "25%",
        marginBottom: "40px",
        position: "relative",
        width: "100%",
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
    media: {
        width: "100%",
        height: "30%",
        paddingTop: '56.25%',
        borderRadius: "6px",
    },
    card: {
        padding: "10px",
    },
    textCardContentStyles: {
        width: "100%",
        height: "150px",
    },
};
export default offerStyles;