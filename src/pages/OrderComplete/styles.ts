import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const Text: CSSProperties = {
  fontWeight: 500,
  fontStyle: 'normal',
  textAlign: 'center',
};

const useStyles = makeStyles(() => createStyles({
  contentWrapper: {
    width: '80%',
    margin: '100px auto 0',
  },
  text1: {
    ...Text,
    fontSize: '18px',
    color: '#5c5c5c',
    letterSpacing: '2.08px',
  },
  text2: {
    ...Text,
    fontSize: '16px',
    color: '#ff9b47',
    letterSpacing: '1.85px',
  },
  barcode: {
    width: '70%',
    display: 'block',
    margin: '30px auto',
  },
}));

export default useStyles;
