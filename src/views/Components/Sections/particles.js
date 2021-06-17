import React from "react";
import {makeStyles} from "@material-ui/core/styles";
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
import styles from "../../../assets/jss/material-kit-react/views/componentsSections/particles.js";
import particlesParam from "../../Components/elements/particles.json";
import Particles from 'react-particles-js';

export default function ParticlesAnimation() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    return (
        <div className={classes.section}>
                <Particles params={particlesParam}  className={classes.particles}/>
        </div>
    )
}