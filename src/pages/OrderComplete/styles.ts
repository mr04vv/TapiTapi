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
  headerText: {
    ...Text,
    fontSize: '18px',
    color: '#5c5c5c',
    letterSpacing: '2.08px',
  },
  footerText: {
    ...Text,
    fontSize: '16px',
    color: '#ff9b47',
    letterSpacing: '1.85px',
  },
  barcode: {
    display: 'block',
    margin: '30px auto',
    textAlign: 'center',
  },
}));

export default useStyles;
