import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';
import { border } from '@material-ui/system';

const TitleLetter: CSSProperties = {
    fontFamily: 'NotoSansCJKjp',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
  };

const useStyles = makeStyles(() => createStyles({
    menuArea: {
        paddingRight: '24px',
        paddingLeft: '24px',
    },
    menuTitleArea: {
        marginBottom: '40px'
    },
    baseTeaArea: {
        marginBottom: '24px'
    },
    selectArea: {
        marginBottom: '24px'
    },
    toppingArea: {
        marginBottom: '24px'
    },
    numArea: {
        marginBottom: '40px'
    },
    buttonArea: {
        textAlign: 'center',
        borderTop: 'solid 1px #cdcdcd',
        padding: '40px 24px 24px'
    },
    titleLetter: {
        ...TitleLetter,
        fontSize: '18px',
        letterSpacing: '2.08x',
        color: '#5c5c5c'
    },
    subTitleLetter: {
        ...TitleLetter,
        fontSize: '12px',
        letterSpacing: '1.38x',
        color: '#a5a5a5',
    },
}));    

export default useStyles;