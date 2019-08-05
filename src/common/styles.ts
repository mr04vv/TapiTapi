import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const Text: CSSProperties = {
  fontWeight: 500,
  fontStyle: 'normal',
};

const useCommonStyles = makeStyles(() => createStyles({
  caption: {
    ...Text,
    fontSize: '18px',
    letterSpacing: '2.08px',
    color: '#5c5c5c',
  },
  commonCaption: {
    ...Text,
    fontSize: '18px',
    letterSpacing: '2.08px',
    color: '#5c5c5c',
    marginTop: '40px',
    position: 'relative',
    display: 'inline-block',
    marginBottom: '1em',
    '&::before': {
      content: "''",
      position: 'absolute',
      left: '20%',
      bottom: '-20px',
      marginBottom: '1em',
      display: 'inline-block',
      width: '25px',
      height: '2px',
      transform: 'translate(-50%)',
      backgroundColor: '#ff9b47',
    },
  },
}));

export default useCommonStyles;
