import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const CommonStyle: CSSProperties = {
  fontWeight: 500,
  fontStyle: 'normal',
};

const useStyles = makeStyles(() => createStyles({
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '66px',
  },
  thumbnailImage: {
    width: '100%',
    objectFit: 'contain',
  },
  title: {
    ...CommonStyle,
    fontSize: '20px',
    letterSpacing: '2.77px',
    color: '#5c5c5c',
    margin: '14px auto 0',
  },
  storeName: {
    ...CommonStyle,
    fontSize: '12px',
    letterSpacing: '2.77px',
    color: '#a5a5a5',
    margin: '5px auto 10px',
  },
  allergy: {
    ...CommonStyle,
    fontSize: '12px',
    letterSpacing: '1.38px',
    color: '#ff9b47',
    textAlign: 'right',
    textDecoration: 'none',
    cursor: 'pointer',
    margin: '10px 8px 0 0',
  },
}));

export default useStyles;
