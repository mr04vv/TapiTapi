import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const LoginButton: CSSProperties = {
  fontSize: 12,
  textTransform: 'none',
  boxShadow: 'none',
  borderRadius: 0,
  padding: 10,
  width: '290px',
  margin: '18vh auto',
};

const Text: CSSProperties = {
  fontWeight: 500,
  fontStyle: 'normal',
};

const useStyles = makeStyles(() => createStyles({
  buttonWrapper: {
    width: '90%',
    margin: '30px auto 66px',
  },
  twitterIcon: {
    color: '#ffffff',
    margin: '0 8px 0 0',
  },
  googleIcon: {
    height: 20,
    margin: '0 8px 0 0',
  },
  loginButton: {
    ...LoginButton,
    backgroundColor: '#ff9b47',
    color: '#ffffff',
    '@media (max-width: 600px)': {
      width: '80%',
      display: 'block',
    },
    '&:hover': {
      backgroundColor: '#d97827',
    },
  },
  p: {
    ...Text,
    fontSize: '12px',
    letterSpacing: '2.08px',
    color: '#5c5c5c',
    margin: '80px auto',
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '45vh auto',
  },
}));

export default useStyles;
