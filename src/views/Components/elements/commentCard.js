import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import bg   from "../../../assets/img/bg6.jpg";
import avatar   from "../../../assets/img/faces/marc.jpg";

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 304,
        marginTop: 20,
        marginBottom: 60,
        // margin: 'auto',
    },
    content: {
        padding: 24,
    },
    avatar: {
        width: 50,
        height: 50,
        border: '2px solid #fff',
        margin: '-48px 32px 0 auto',
        '& > img': {
            margin: 0,
        },
    },
}));

export const CommentCard = React.memo(function PostCard() {
    const cardStyles = useStyles();
    const mediaStyles = useSlopeCardMediaStyles();
    const shadowStyles = useSoftRiseShadowStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    return (
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
            <CardMedia
                classes={mediaStyles}
                image={bg}
            />
            <Avatar className={cardStyles.avatar} src={avatar} />
            <CardContent className={cardStyles.content}>
                <TextInfoContent
                    classes={textCardContentStyles}
                    heading={"Username"}
                    body={
                        'Professional and attentive to customer needs. They know very well bank procedures which was key in getting the positive decision. Always available and helpful - there was always someone to help with any questions'
                    }
                />
            </CardContent>
        </Card>
    );
});

export default CommentCard;