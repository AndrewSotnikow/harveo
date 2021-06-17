import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles
    from "../../../assets/jss/material-kit-react/views/componentsSections/feedbackStyle.js";
import Card from "../../../components/Card/Card";
import Carousel from "react-slick";
import CommentCard from "../../Components/elements/commentCard.js";

export default function SectionFeedback() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    let windowWidth = window.outerWidth;
    let settings = {};

    if(windowWidth < 992 ){
        settings = {
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            pauseOnHover: true,
        };
    } else {
        settings = {
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            pauseOnHover: true,
        };
    }

    return (
        <div className={classes.section}>
            <div className={classes.container}
                >
                <h2 align="center" className={classes.title} color="primaryColor">Customer’s
                    reviews</h2>
                <GridContainer >
                    <GridItem  xs={12} sm={12} className={classes.marginAuto}>
                        <Card carousel>
                            <Carousel {...settings}>
                                <div>
                                    <GridContainer item xs={12} className={classes.gridContainer}
                                                   align='center'>
                                        <GridItem xs={12} sm={12} md={12} lg={12}>
                                            <GridItem xs={12} container align="left" justify="center"
                                                      className={classes.commentGridItem}>
                                                <CommentCard/>
                                            </GridItem>
                                        </GridItem>
                                    </GridContainer>
                                </div>
                                <div>
                                    <GridContainer item xs={12} className={classes.gridContainer}
                                                   align='center'>
                                        <GridItem xs={12} sm={12} md={12} lg={12}>
                                            <GridItem xs={12} container align="left" justify="center"
                                                      className={classes.commentGridItem}>
                                                <CommentCard/>
                                            </GridItem>
                                        </GridItem>
                                    </GridContainer>
                                </div>
                                <div>
                                    <GridContainer item xs={12} className={classes.gridContainer}
                                                   align='center'>
                                        <GridItem xs={12} sm={12} md={12} lg={12}>
                                            <GridItem xs={12} container align="left" justify="center"
                                                      className={classes.commentGridItem}>
                                                <CommentCard/>
                                            </GridItem>
                                        </GridItem>
                                    </GridContainer>
                                </div>
                                <div>
                                    <GridContainer item xs={12} className={classes.gridContainer}
                                                   align='center'>
                                        <GridItem xs={12} sm={12} md={12} lg={12}>
                                            <GridItem xs={12} container align="left" justify="center"
                                                      className={classes.commentGridItem}>
                                                <CommentCard/>
                                            </GridItem>
                                        </GridItem>
                                    </GridContainer>
                                </div>
                                <div>
                                    <GridContainer item xs={12} className={classes.gridContainer}
                                                   align='center'>
                                        <GridItem xs={12} sm={12} md={12} lg={12}>
                                            <GridItem xs={12} container align="left" justify="center"
                                                      className={classes.commentGridItem}>
                                                <CommentCard/>
                                            </GridItem>
                                        </GridItem>
                                    </GridContainer>
                                </div>
                                <div>
                                    <GridContainer item xs={12} className={classes.gridContainer}
                                                   align='center'>
                                        <GridItem xs={12} sm={12} md={12} lg={12}>
                                            <GridItem xs={12} container align="left" justify="center"
                                                      className={classes.commentGridItem}>
                                                <CommentCard/>
                                            </GridItem>
                                        </GridItem>
                                    </GridContainer>
                                </div>
                            </Carousel>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}