import React from 'react';
import cx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import {ColumnToRow, Row, Item} from '@mui-treasury/components/flex';
import {NavMenu, NavItem} from '@mui-treasury/components/menu/navigation';


import {
    EmailSubscribe,
    EmailTextInput,
    SubmitButton,
} from '@mui-treasury/components/EmailSubscribe';
import {
    SocialProvider,
    SocialLink,
} from '@mui-treasury/components/socialLink';

import {useMoonSocialLinkStyles} from '@mui-treasury/styles/socialLink/moon';
import {useBootstrapEmailSubscribeStyles} from '@mui-treasury/styles/emailSubscribe/bootstrap';
import {usePlainNavigationMenuStyles} from '@mui-treasury/styles/navigationMenu/plain';


import logo from "assets/img/logo.png";
import List from "@material-ui/core/List";


const useStyles = makeStyles(({typography, palette, breakpoints}) => ({
    legalLink: {
        ...typography.caption,
        justifyContent: 'center',
        color:
            palette.type === 'dark'
                ? 'rgba(255,255,255,0.57)'
                : palette.text.secondary,
        position: 'relative',
        [breakpoints.up('sm')]: {
            '&:not(:first-of-type)': {
                '&:before': {
                    content: '"|"',
                    display: 'block',
                    position: 'absolute',
                    left: 0,
                },
            },
        },
    },
    newsletter: {
        fontSize: typography.caption.fontSize,
    },
    navMenu: {
        flexWrap: 'wrap',
    }
}));

function Footer() {
    const classes = useStyles();
    let windowWidth = window.outerWidth;
    let style = {}
    let container = {}
    if (windowWidth < 992) {
        style = {
            width: "80%",
        }
        container = {
            justifyContent: "center",
            alignItems: "center",
        }
    } else {
        style = {
            width: "50%",
        }
        container = {
            justifyContent: "flex-start",
            alignItems: "left",
        }
    }
    return (
        <Box bgcolor={'background.paper'} width={'100%'}>
            <Container>
                <Box pt={8} pb={2}>
                    <Row wrap>
                        <Item grow={2}>
                            <Row alignItems={container.alignItems}
                                 justifyContent={container.justifyContent}>
                                <Item color={'#007bff'} fontSize={64} lineHeight={0}
                                      align={container.alignItems}>
                                    <img style={{...style}} src={logo} alt=""/>
                                </Item>
                            </Row>
                            <Row alignItems={'center'} marginTop={5}>
                                <Item color={'#007bff'} fontSize={64} lineHeight={0}>
                                    <Typography
                                        component={'p'}
                                        variant={'h4'}
                                        color={'textSecondary'}
                                    >
                                        Contacts
                                    </Typography>
                                </Item>
                            </Row>
                            <Row alignItems={'center'} marginTop={5}>
                                <Item color={'#007bff'} fontSize={64} lineHeight={0}>
                                    <Typography
                                        component={'p'}
                                        variant={'subtitle1'}
                                        color={'textSecondary'}
                                    >
                                        Imperial Business Center, Wadowicka 7 Poland, Cracow 30-363
                                    </Typography>
                                </Item>
                            </Row>
                            <List>
                                <Item color={'#007bff'} fontSize={64} lineHeight={0}
                                      marginRight={2}>
                                    <Typography
                                        component={'p'}
                                        variant={'subtitle1'}
                                        color={'textSecondary'}
                                    >
                                        +48 12 352 12 12
                                    </Typography>
                                </Item>
                                <Item color={'#007bff'} fontSize={64} lineHeight={0}
                                      marginRight={2}>
                                    <Typography
                                        component={'p'}
                                        variant={'subtitle1'}
                                        color={'textSecondary'}
                                    >
                                        +48 784 640 360
                                    </Typography>
                                </Item>
                            </List>
                            <Row alignItems={'center'}>
                                <Item color={'#007bff'} fontSize={64} lineHeight={0}>
                                    <Typography
                                        component={'p'}
                                        variant={'subtitle1'}
                                        color={'textSecondary'}
                                    >
                                        Mon. - Fri. 9:00 - 20:00
                                    </Typography>
                                </Item>
                                <Item color={'#007bff'} fontSize={64} lineHeight={0} marginLeft={2}>
                                    <Typography
                                        component={'p'}
                                        variant={'subtitle1'}
                                        color={'textSecondary'}
                                    >
                                        info@harveo.pl
                                    </Typography>
                                </Item>
                            </Row>
                        </Item>
                        <Item grow maxWidth={500} mx={'auto'} >
                            <Box textAlign={'center'} mt={{xs: 2, md: 0}} my={2} >
                                <SocialProvider useStyles={useMoonSocialLinkStyles}>
                                    <SocialLink
                                        brand={'FacebookCircle'}
                                        href={'https://www.facebook.com/harveo.official/'}
                                    />
                                    <SocialLink
                                        brand={'LinkedIn'}
                                        href={'https://www.linkedin.com/in/jakubpajak/'}
                                    />
                                    <SocialLink brand={'GooglePlusCircle'}
                                                href={'https://www.google.com/maps/place/Harveo+Doradca+Kredytowy+kredyt+hipoteczny+Krak%C3%B3w/@50.0328899,19.9357238,17z/data=!3m1!4b1!4m5!3m4!1s0x47165bfcad6297ff:0x5b34919713ec3c72!8m2!3d50.0328893!4d19.9379299'}/>
                                </SocialProvider>
                            </Box>
                            <FormLabel htmlFor={'newsletter'} className={classes.newsletter}>
                                Get the freshest news from us
                            </FormLabel>
                            <EmailSubscribe
                                onSubmit={email => alert(`Your email is ${email}.`)}
                                useStyles={useBootstrapEmailSubscribeStyles}
                                inputClearedAfterSubmit
                            >
                                <EmailTextInput
                                    id={'newsletter'}
                                    placeholder="Enter your email"
                                />
                                <SubmitButton
                                    style={{backgroundColor: "#06038d"}}>Subscribe</SubmitButton>
                            </EmailSubscribe>
                        </Item>
                    </Row>
                </Box>
                <Divider/>
                <Box pt={2} pb={10}>
                    <ColumnToRow
                        at={'md'}
                        columnStyle={{alignItems: 'center'}}
                        rowStyle={{alignItems: 'unset'}}>
                        <Item grow ml={-2} shrink={0}>
                            <NavMenu useStyles={usePlainNavigationMenuStyles}>
                                <ColumnToRow at={'sm'}>
                                    <NavItem className={cx(classes.legalLink)}>
                                        Terms & Conditions
                                    </NavItem>
                                    <NavItem className={cx(classes.legalLink)}>
                                        Privacy Policy
                                    </NavItem>
                                    <NavItem className={cx(classes.legalLink)}>
                                        Accessibility
                                    </NavItem>
                                    <NavItem className={cx(classes.legalLink)}>Legal</NavItem>
                                </ColumnToRow>
                            </NavMenu>
                        </Item>
                        <Item>
                            <Box py={1} textAlign={{xs: 'center', md: 'right'}}>
                                <Typography
                                    component={'p'}
                                    variant={'caption'}
                                    color={'textSecondary'}
                                >
                                    Harveo 2021 All right reserved
                                </Typography>
                            </Box>
                        </Item>
                    </ColumnToRow>
                </Box>
            </Container>
        </Box>

    );
}

export default Footer;

