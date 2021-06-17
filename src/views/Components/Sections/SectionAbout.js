import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "../../../assets/jss/material-kit-react/views/componentsSections/aboutStyle.js";
import image from "assets/img/CEO.jpg";
import {useState} from "react";
import PropTypes from "prop-types";
import Primary from "components/Typography/Primary.js";

export default function SectionAbout(props) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    let [years, setYears] = useState(0);
    let [clients, setClients] = useState(5000);
    let [credits, setCredits] = useState(2670);
    let [offer, setOffer] = useState(0);
    let [switcher, setSwitcher] = useState(false);
    let counterUp = (number, state, setState) => {
        let timerId = setTimeout(() => {
            setState(state + 1);
            setSwitcher(true);
        }, 50);
        if (state === number) {
            clearTimeout(timerId);
            return;
        }
    }
    window.onscroll = function () {
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > props.counterupOnScroll.height) {
            setSwitcher(true);
        }
    }

    if (switcher) {
        counterUp(12, years, setYears);
        counterUp(5031, clients, setClients);
        counterUp(2687, credits, setCredits);
        counterUp(21, offer, setOffer);
    }
    return (
        <div className={classes.section}>
            <div className={classes.container} direction="row"
                 justify="center">
                    <h2 align="center" className={classes.title + ' ' + classes.space}
                        color="primaryColor">Trust and
                        long-term relationship</h2>
                    <GridContainer item xs={12} className={classes.gridContainer}>
                        <GridItem xs={12} sm={12} md={3} lg={3} align="center">
                            <h2 className={classes.title}>{years}<br/> <small>Years of
                                Experience</small></h2>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} lg={3} align="center">
                            <h2 className={classes.title}>{clients} <br/> <small>Served
                                Clients</small></h2>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} lg={3} align="center">
                           <h2 className={classes.title}>{credits} <br/> <small>Made
                                Credits</small></h2>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} lg={3} align="center">
                           <h2 className={classes.title}>{offer} <br/> <small>Banks
                                In offer</small></h2>
                        </GridItem>
                    </GridContainer>
                <div className={classes.section}>
                    <div className={classes.container}>
                        <h1 align="center" className={classes.title + ' ' + classes.space}>Why, how and what do we
                            do?</h1>
                        <Primary> <h4 align="center" className={classes.title}>We serve clients worldwide in
                            our offices or via encrypted calls & video meetings</h4> </Primary>
                    </div>
                </div>
                <GridContainer className={classes.gridContainer}>
                    <GridItem xs={6} sm={2} className={classes.container}>
                    </GridItem>
                    <GridItem xs={6} sm={2} className={classes.container}>
                    </GridItem>
                </GridContainer>
                <GridContainer item xs={12} className={classes.gridContainer}>
                    <GridItem xs={12} sm={6} container direction="column">
                        <img
                            className={classes.photo}
                            src={image}
                            alt="Jacob Adam Founder & CEO"
                            align="center"
                        />
                        <Primary> <h3 className={classes.title} align="center">Jacob Adam <br/> <small>Founder
                            & CEO</small></h3> </Primary>
                    </GridItem>
                    <GridItem xs={12} sm={6}>
                        <p className={classes.paragraph}> We are a boutique company 100% driven by
                            passion and highly focused on
                            quality, trust and long-term relationship with our clients, thanks to
                            which we currently work practically only on recommendations of premium
                            market. We have been operating since 2010 being honored of helping over
                            five thousand clients worldwide. Thanks to this experience we perfectly
                            know and understand the situation of a person facing the decision of
                            applying a mortgage or a person building a portfolio of investment
                            properties.
                        </p>
                        <p className={classes.paragraph}>
                            Being aware of how intricate, complicated and multi-stage process is, we
                            make enormous effort to ensure that every single thing related to it is
                            clear and completely transparent for you on the whole way. We provide
                            comprehensive service, help and support at every stage of the process,
                            as well as negotiate loan terms with banks, which guarantees the
                            satisfaction of every person who comes to us. Our mission is to help
                            people and introduce new standards in the financial market by providing
                            the highest quality of service and a cooperation model based on trust
                            and great relationship with the client.
                        </p>
                        <p className={classes.paragraph}>
                            We are distinguished by empathy, morality and an ethical approach –
                            which results directly from our characters and internal beliefs. We do
                            business because of passion for finance, numbers and relationships with
                            clients. The satisfaction which our customer satisfaction gives us – is
                            priceless.</p>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}
SectionAbout.propTypes = {
    counterupOnScroll: PropTypes.shape({
        height: PropTypes.number.isRequired,
    })
}