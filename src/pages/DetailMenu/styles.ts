import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const TitleLetter: CSSProperties = {
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 'normal',
};

const LoginButton: CSSProperties = {
  fontSize: 14,
  textTransform: 'none',
  boxShadow: 'none',
  borderRadius: 0,
  letterSpacing: '2.08px',
  padding: 10,
  width: '290px',
  margin: '10px auto',
};

const useStyles = makeStyles(() => createStyles({
  body: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '66px',
  },
  thumbnail: {
    width: '100%',
    objectFit: 'contain',
  },
  titleWrapper: {
    width: '90%',
    margin: '10px auto',
  },
  selectMenuWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  titleLetter: {
    ...TitleLetter,
    fontSize: '18px',
    letterSpacing: '2.0px',
    color: '#5c5c5c',
  },
  subTitleLetter: {
    ...TitleLetter,
    fontSize: '12px',
    letterSpacing: '1.38px',
    color: '#a5a5a5',
  },
  sizeAttension: {
    margin: '-15px auto 0',
    width: '90%',
    fontSize: '10px',
    color: '#a5a5a5',
  },
  selectableAttension: {
    margin: '0 auto',
    width: '90%',
    fontSize: '16px',
    color: '#a5a5a5',
  },
  ammount: {
    color: '#ff9b47',
    fontSize: '18px',
    width: '90%',
    margin: '0 auto',
    textAlign: 'right',
    letterSpacing: '1.38px',
  },
  underLine: {
    width: '110px',
    margin: 'auto 0 auto auto',
  },
  confirm: {
    margin: '20px',
    ...LoginButton,
    backgroundColor: '#ff9b47',
    color: '#ffffff',
    '@media (max-width: 600px)': {
      width: '80%',
    },
    '&:hover': {
      backgroundColor: '#d97827',
    },
  },
}));

export default useStyles;
