import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "../../../assets/jss/material-kit-react/views/componentsSections/offerStyle.js";
import Card from "../../../components/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import CardMedia from "@material-ui/core/CardMedia";
import independence from "../../../assets/img/bg11.jpg";
import quality from "../../../assets/img/bg12.jpg";
import commission from "../../../assets/img/bg10.jpg";
import security from "../../../assets/img/bg14.jpg";
import care from "../../../assets/img/bg15.jpg";
import range from "../../../assets/img/bg13.jpg";
import {useSoftRiseShadowStyles} from '@mui-treasury/styles/shadow/softRise';
import {useN01TextInfoContentStyles} from '@mui-treasury/styles/textInfoContent/n01';
export default function SectionOffer() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const shadowStyles = useSoftRiseShadowStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    return (
        <div className={classes.section}>
                <div className={classes.container} direction="row"
                     justify="center">
                    <h2 align="center" className={classes.title} color="primaryColor">Trust and
                        long-term relationship</h2>
                    <p align="center" className={classes.paragraph}> We are a boutique company
                        100% driven by
                        passion and highly focused on
                        quality, trust and long-term relationship with our clients, thanks to
                        which we currently work practically only on recommendations of premium
                        market. We have been operating since 2010 being honored of helping over
                        five thousand clients worldwide. Thanks to this experience we perfectly
                        know and understand the situation of a person facing the decision of
                        applying a mortgage or a person building a portfolio of investment
                        properties.
                    </p>
                    <GridContainer item xs={12} className={classes.gridContainer} align='center'>
                        <GridItem xs={12} sm={12} md={4} lg={4}>
                            <GridItem xs={12} container align="left"
                                      className={classes.infoGridItem}>
                                <Card className={classes.card + " " + shadowStyles.root}>
                                    <CardMedia className={classes.media}
                                        // image={'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'}/>
                                               image={independence}/>
                                    <CardContent className={classes.cardContent}>
                                        <TextInfoContent
                                            classes={textCardContentStyles}
                                            heading={'Independence'}
                                            body={
                                                "We represent you, not the bank. Harveo is based on unique values, – passion, empathy and ambition to provide a new quality of service to the market, including through comprehensive English-language service for foreigners in Poland. The customer is always our priority, not a short-term profit."
                                            }
                                        />
                                    </CardContent>
                                </Card>
                            </GridItem>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4} lg={4}>
                            <GridItem xs={12} container align="left"
                                      className={classes.infoGridItem}>
                                <Card className={classes.card + " " + shadowStyles.root}>
                                    <CardMedia className={classes.media}
                                               image={quality}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <TextInfoContent
                                            classes={textCardContentStyles}
                                            heading={'The highest quality of service'}
                                            body={"Our branches are located in the newest office buildings so that you can feel special and comfortable at every stage of cooperation. Knowledge, professionalism, great atmosphere and delicious coffee. Service quality and customer satisfaction always come first"}

                                        />
                                    </CardContent>
                                </Card>
                            </GridItem>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4} lg={4}>
                            <GridItem xs={12} container align="left"
                                      className={classes.infoGridItem}>
                                <Card className={classes.card + " " + shadowStyles.root}>
                                    <CardMedia className={classes.media}
                                               image={commission}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <TextInfoContent
                                            classes={textCardContentStyles}
                                            heading={'No commission fee for service'}
                                            body={"Our service is completely free for you – despite the fact that we are rewarded by banks, your offer is the same or even cheaper than that available online or directly at the bank. This applies to both mortgage loans and leasing."}
                                        />
                                    </CardContent>
                                </Card>
                            </GridItem>
                        </GridItem>
                    </GridContainer>
                    <GridContainer item xs={12} className={classes.gridContainer} align='center'>
                        <GridItem xs={12} sm={12} md={4} lg={4}>
                            <GridItem xs={12} container align="left"
                                      className={classes.infoGridItem}>
                                <Card className={classes.card + " " + shadowStyles.root}>
                                    <CardMedia className={classes.media}
                                               image={security}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <TextInfoContent
                                            classes={textCardContentStyles}
                                            heading={'Security of cooperation'}
                                            body={
                                                "Nowadays, it is extremely important to use the services of only verified and trustworthy entities. Harveo is entered in the KNF register under the number RPH001108 and has a civil liability insurance policy number COR100030."}
                                        />
                                    </CardContent>
                                </Card>
                            </GridItem>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4} lg={4}>
                            <GridItem xs={12} container align="left"
                                      className={classes.infoGridItem}>
                                <Card className={classes.card + " " + shadowStyles.root}>
                                    <CardMedia className={classes.media}
                                               image={care}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <TextInfoContent
                                            classes={textCardContentStyles}
                                            heading={'Real after-sales care'}
                                            body={
                                                "After completing the entire loan process, we will inform you if a new, more advantageous offer, lower margin or more convenient solution appears on the market. In addition, throughout the entire loan period, you can contact us for help or answers to bothering questions."}

                                        />
                                    </CardContent>
                                </Card>
                            </GridItem>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4} lg={4}>
                            <GridItem xs={12} container align="left"
                                      className={classes.infoGridItem}>
                                <Card className={classes.card + " " + shadowStyles.root}>
                                    <CardMedia className={classes.media}
                                               image={range}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <TextInfoContent
                                            classes={textCardContentStyles}
                                            heading={'Operation range'}
                                            body={"Stationary in one of our offices: Cracow Warsaw" +
                                            " Gdansk Katowice Wroclaw. We serve clients worldwide via encrypted calls & video meetings as well."}
                                        />
                                    </CardContent>
                                </Card>
                            </GridItem>
                        </GridItem>
                    </GridContainer>
                </div>
        </div>
)
}