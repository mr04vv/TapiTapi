import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const LoginButton: CSSProperties = {
  fontSize: 12,
  textTransform: 'none',
  boxShadow: 'none',
  borderRadius: 0,
  padding: 10,
  width: '300px',
  margin: '10px auto',
};

const Text: CSSProperties = {
  fontWeight: 500,
  fontStyle: 'normal',
};

const useStyles = makeStyles(() => createStyles({
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
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
}));

export default useStyles;
