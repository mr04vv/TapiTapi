import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const CommonStyle: CSSProperties = {
  fontFamily: 'NotoSansCJKjp',
  fontWeight: 500,
  fontStyle: 'normal',
};

const useStyles = makeStyles(() => createStyles({
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  thumbnailImage: {
    width: '100%',
    objectFit: 'contain',
  },
  storeName: {
    ...CommonStyle,
    fontFamily: 'NotoSansCJKjp',
    fontSize: '24px',
    letterSpacing: '2.77px',
    color: '#5c5c5c',
    margin: '16px auto',
  },
  allergy: {
    ...CommonStyle,
    fontSize: '12px',
    letterSpacing: '1.38px',
    color: '#ff9b47',
    textAlign: 'right',
    marginRight: '10px',
    textDecoration: 'none',
    cursor: 'pointer',
  },
}));

export default useStyles;
