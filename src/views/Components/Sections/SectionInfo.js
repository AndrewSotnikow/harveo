import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "../../../assets/jss/material-kit-react/views/componentsSections/infoStyle.js";

import SchoolIcon from '@material-ui/icons/School';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import TuneIcon from '@material-ui/icons/Tune';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import DescriptionIcon from '@material-ui/icons/Description';
import GavelIcon from '@material-ui/icons/Gavel';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import HouseIcon from '@material-ui/icons/House';
import Card from "../../../components/Card/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import bg from "assets/img/bg8.jpg";

export default function SectionInfo() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const shadowStyles = useSoftRiseShadowStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <div className={classes.section}>
                    <div className={classes.container}>
                        <h2 align="center" className={classes.title} color="primaryColor">What do
                            you get? </h2>
                    </div>
                </div>
                <GridContainer item xs={12} sm={12} md={12}
                               className={classes.gridContainer}
                               align='center'
                               direction="row"
                               justify="center">
                    <GridContainer item xs={12} sm={12} md={4} lg={4} spacing={2}
                                   className={classes.gridContainer}
                                   align='left'
                                   direction="column"
                                   justify="flex-start">
                        <GridItem xs={12} className={classes.infoGridItem} align="left">
                                <span className={classes.listItem}>
                            <SchoolIcon className={classes.icons + " " + classes.listItem} /></span>
                            <div><h4 className={classes.titleIcons}>Educational meeting</h4>
                                <p>We start with meetings or video calls to make sure that you get
                                    all
                                    the necessary knowledge and get answers to bothering questions.
                                    Our
                                    priority is the customer’s full awareness of all available
                                    offers on
                                    the market, the basic principles of the economy, banking
                                    mechanisms,
                                    their rights and the provisions of the loan agreement.</p></div>
                        </GridItem>
                        <GridItem xs={12} className={classes.infoGridItem} align="left">
                                <span className={classes.listItem}>
                            <AssignmentTurnedInIcon
                                className={classes.icons + " " + classes.listItem}/></span>
                            <div>
                                <h4 className={classes.titleIcons}>Creditworthiness assessment</h4>
                                <p>The most important step that determines your further decisions.
                                    During the meeting, we will calculate the creditworthiness of
                                    individual banks, indicate the risks and potential weaknesses of
                                    the
                                    transaction that you may encounter during the loan application
                                    process.
                                </p>
                            </div>
                        </GridItem>
                        <GridItem xs={12} className={classes.infoGridItem} align="left">
                                <span className={classes.listItem}>
                            <SupervisorAccountIcon
                                className={classes.icons + " " + classes.listItem}/>
                            </span>
                            <div>
                                <h4 className={classes.titleIcons}>Expert assistance ``from A to Z``
                                    throughout the entire
                                    process</h4>
                                <p>We support the client by leading “by hand” step by step through
                                    the
                                    entire loan process. From the first phone call, meetings and
                                    conversations, completing all documents, formalities, up to
                                    signing
                                    the loan agreement with the bank and complete closure of the
                                    process.</p>
                            </div>
                        </GridItem>
                        <GridItem xs={12} className={classes.infoGridItem} align="left">
                               <span className={classes.listItem}> <HouseIcon
                                   className={classes.icons + " " + classes.listItem}/>
                            </span>
                            <div>
                                <h4 className={classes.titleIcons}>Help in finding real estate</h4>
                                <p>We also help in finding your dream properties, cooperating with
                                    the
                                    largest developers and the best real estate agencies on the
                                    market.
                                    In many cases, we also help in negotiating the final price and
                                    terms
                                    of the contract, e.g. the schedule of payment of subsequent
                                    installments.</p>
                            </div>
                        </GridItem>
                    </GridContainer>
                    <GridContainer item xs={4} sm={4} md={4} lg={4}
                                   className={classes.gridContainer}
                                   align='center'
                                   direction="column"
                                   justify="flex-start">
                        <GridItem xs={12} styles={{width: "100%", height: "100%"}}>
                            <Card className={classes.card + " " + shadowStyles.root +  ' ' + classes.imageContainer}>
                                <CardMedia className={classes.media}
                                           image={bg}/>
                            </Card>
                        </GridItem>
                    </GridContainer>
                    <GridContainer item xs={12} sm={12} md={4} lg={4} spacing={2}
                                   className={classes.gridContainer}
                                   align='center'
                                   direction="column"
                                   justify="flex-start">
                        <GridItem xs={12} className={classes.infoGridItem} align="left">
                           <span className={classes.listItem}> <DescriptionIcon
                               className={classes.icons + " " + classes.listItem}/>
                            </span>
                            <div><h4 className={classes.titleIcons}>Assistance in completing the
                                necessary documents</h4>
                                <p>The average mortgage application for one bank contains several
                                    dozen
                                    pages of various types of documents, which makes the preparation
                                    process very complex and difficult. We will help you efficiently
                                    collect the necessary
                                    documents
                                    and we will submit an application for you to any selected
                                    bank.</p></div>
                        </GridItem>
                        <GridItem xs={12} className={classes.infoGridItem} align="left">
                            <span className={classes.listItem}> <GavelIcon
                                className={classes.icons + " " + classes.listItem}/>
                            </span>
                            <div><h4 className={classes.titleIcons}>Legal assistance and safety</h4>
                                <p>We place the greatest emphasis on a thorough understanding of the
                                    entire loan process and your safety. Before making any decision,
                                    you
                                    will be fully aware and familiar with the property conditions
                                    and
                                    loan agreements. In addition, we work with legal advisers and
                                    notaries, so you can get information or take advantage of their
                                    legal advice.</p></div>

                        </GridItem>
                        <GridItem xs={12} className={classes.infoGridItem} align="left">
                            <span className={classes.listItem}> <AccountBalanceIcon
                                className={classes.icons + " " + classes.listItem}/>
                            </span>
                            <div><h4 className={classes.titleIcons}>21 banks on offer</h4>
                                <p>Save time and money by taking advantage of our 10 years of
                                    experience. We will find and match the best available financial
                                    products for you, personalizing the offer according to your
                                    needs –
                                    and all this in one place, while enjoying delicious coffee. We
                                    work
                                    independently with a total of over 35 banks and financial
                                    institutions.</p></div>
                        </GridItem>
                        <GridItem xs={12} className={classes.infoGridItem} align="left">
                            <span className={classes.listItem}>
                            <TuneIcon className={classes.icons + " " + classes.listItem}/></span>
                            <div><h4 className={classes.titleIcons}>Matching the best offer</h4>
                                <p>For each client, we develop an individual concept and action
                                    strategies with a detailed plan and checklist. Let us find the
                                    most
                                    attractive offers for you and adapt them to your needs,
                                    expectations
                                    and financial possibilities.</p></div>
                        </GridItem>
                    </GridContainer>
                </GridContainer>
            </div>
        </div>
    )
}