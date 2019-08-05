import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const Text: CSSProperties = {
  fontWeight: 500,
  fontStyle: 'normal',
};

const useStyles = makeStyles(() => createStyles({
  caption: {
    ...Text,
    fontSize: '16px',
    letterSpacing: '2.08px',
    color: '#5c5c5c',
    margin: '20px auto',
  },
}));

export default useStyles;
