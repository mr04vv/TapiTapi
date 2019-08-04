import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const Text: CSSProperties = {
  fontFamily: 'NotoSansCJKjp',
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
  orderNumber: {
    ...Text,
    fontSize: '36px',
    color: '#5c5c5c',
    letterSpacing: '4.15px',
  },
}));

export default useStyles;
