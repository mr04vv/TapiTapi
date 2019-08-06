import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const Text: CSSProperties = {
  fontWeight: 500,
  fontStyle: 'normal',
};

const useStyles = makeStyles(() => createStyles({
  bodyWrapper: {
    width: '90%',
    margin: '30px auto 66px',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  contentBody: {
    display: 'flex',
  },
  border: {
    borderWidth: '0.5px',
    color: '#ebebeb',
    width: '100%',
  },
  rightWrapper: {
  },
  image: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    margin: 'auto 5px',
  },
  content: {
    ...Text,
    fontSize: '12px',
    letterSpacing: '1.38px',
    color: '#5c5c5c',
    display: 'block',
    margin: '5px',
  },
  time: {
    ...Text,
    fontSize: '10px',
    letterSpacing: '1.15px',
    color: '#a5a5a5',
    display: 'block',
    margin: '5px',
  },
}));

export default useStyles;
