import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const CommonStyle: CSSProperties = {
  fontWeight: 500,
  fontStyle: 'normal',
  color: '#5c5c5c',
};

const useStyles = makeStyles(() => createStyles({
  caption: {
    ...CommonStyle,
    fontSize: '12px',
    width: 'fit-content',
    margin: '0',
    letterSpacing: '2.08px',
    color: '#5c5c5c',
    position: 'relative',
    display: 'inline-block',
    '&::before': {
      content: "''",
      position: 'absolute',
      left: '25%',
      bottom: '-14px',
      marginBottom: '1em',
      display: 'inline-block',
      width: '25px',
      height: '1px',
      transform: 'translate(-50%)',
      backgroundColor: '#ff9b47',
    },
  },
  bodyWrapper: {
    width: '90%',
    margin: '30px auto 66px',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },

  border: {
    borderWidth: '0.5px',
    color: '#ebebeb',
    width: '100%',
  },
  time: {
    ...CommonStyle,
    fontSize: '10px',
    letterSpacing: '1.15px',
    color: '#a5a5a5',
    display: 'block',
    margin: '5px',
  },
  inline: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  storeName: {
    ...CommonStyle,
    fontSize: '18px',
    letterSpacing: '2.08px',
  },
  sum: {
    fontSize: '12px',
  },
  sumPrice: {
    fontSize: '18px',
    color: '#ff9b47',
  },
}));

export default useStyles;
