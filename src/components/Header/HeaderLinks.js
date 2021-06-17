/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import {Link} from "react-router-dom";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import ComputerIcon from "@material-ui/icons/Computer";
import RateReviewIcon from '@material-ui/icons/RateReview';
import WebIcon from '@material-ui/icons/Web';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import CustomDropdown from "../CustomDropdown/CustomDropdown";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="#"
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    <ComputerIcon className={classes.icons}/> Harveo Platform
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="#"
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    <RateReviewIcon className={classes.icons}/>Customer's review
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="#"
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    <WebIcon className={classes.icons}/>Blog
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="#"
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    <PhoneIcon className={classes.icons}/>Contact
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="Language"
                    buttonIcon={LanguageIcon}
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent",
                    }}
                    dropdownList={[
                        <Link to="/" className={classes.dropdownLink}>
                            Polish
                        </Link>,
                        <a
                            href="/"
                            target="_blank"
                            className={classes.dropdownLink}
                        >
                            English
                        </a>,
                    ]}
                />
            </ListItem>
        </List>
    );
}
