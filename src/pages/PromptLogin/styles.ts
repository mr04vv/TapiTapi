import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const LoginButton: CSSProperties = {
  fontSize: 12,
  textTransform: 'none',
  boxShadow: 'none',
  width: '200px',
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
  twitterLoginButton: {
    ...LoginButton,
    backgroundColor: '#ff9b47',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#1e80c9',
    },
  },
  googleLoginButton: {
    ...LoginButton,
    backgroundColor: '#ff9b47',
    color: '#ffffff',
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
