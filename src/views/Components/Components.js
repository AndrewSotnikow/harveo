import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";


import styles from "assets/jss/material-kit-react/views/components.js";
// import SectionCarousel from "./Sections/SectionCarousel";
import SectionAbout from "./Sections/SectionAbout";
import SectionOffer from "./Sections/SectionOffer";
import SectionInfo from "./Sections/SectionInfo";
import SectionFeedback from "./Sections/SectionFeedback";
// import Particles from "./Sections/particles";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Button from 'components/CustomButtons/Button.js';
// import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(styles);


export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
        <Parallax image={require("assets/img/bg11.jpg").default}>
            <div className={classes.blureStyle}></div>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem>
                        <div className={classes.brand}>
                            <h1 className={classes.title}>HARVEO</h1>
                            <h3 className={classes.subtitle}>
                                We are a boutique company 100% driven by passion and highly focused on quality, trust and long-term relationship with our clients.
                            </h3>
                            <Button color="white"  className={classes.space} round styles={{color: "#06038d"}}><span >Contact us</span>
                            </Button>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </Parallax>
        {/*<Particles />*/}
      <div className={classNames(classes.main, classes.mainRaised)}>
          {/*<SectionCarousel />*/}
          <SectionAbout
              counterupOnScroll={{
                  height: 250,
              }}
              {...rest}
          />
          <SectionInfo />
          <SectionOffer />
          <SectionFeedback />
      </div>
      <Footer />
    </div>
  );
}
