import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const LoginButton: CSSProperties = {
  fontSize: 12,
  textTransform: 'none',
  boxShadow: '0px 2px 4px rgba(0,0,0,0.3)',
  height: 20,
  width: '200px',
  borderRadius: 20,
  margin: '10px auto',
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
    backgroundColor: '#55acee',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#1e80c9',
    },
  },
  googleLoginButton: {
    ...LoginButton,
    backgroundColor: '#ffffff',
    color: '#5f6368',
  },
}));

export default useStyles;
