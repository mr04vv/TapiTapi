import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const Text: CSSProperties = {
  fontWeight: 500,
  fontStyle: 'normal',
  textAlign: 'center',
};

const useStyles = makeStyles(() => createStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 0 0 auto',
    width: 'fit-content',
  },
  camText: {
    ...Text,
    fontSize: '22px',
    color: '#ff9b47',
    letterSpacing: '1.85px',
    display: 'flex',
  },
  root: {
    margin: '10vh 50px',
    width: '40vw',
    '@media (max-width: 600px)': {
      width: '80%',
    },
  },
  error: {
    ...Text,
    marginTop: '30px',
    fontSize: '22px',
    color: '#ff0000',
    letterSpacing: '1.85px',
  },
  loading: {
    ...Text,
    marginTop: '30px',
    fontSize: '22px',
    color: '#ff9b47',
    letterSpacing: '1.85px',
  },
  store: {
    fontSize: '10px',
    margin: '2px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  wrapper2: {
    display: 'flex',
    position: 'absolute',
    bottom: '10px',
  },
}));

export default useStyles;
