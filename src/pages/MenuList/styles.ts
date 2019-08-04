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
  caption: {
    ...CommonStyle,
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
  bodyWrapper: {
    width: '90%',
    margin: '10px auto',
  },
  menuWrapper: {
    display: 'flex',
    borderBottom: 'solid 1px #ebebeb',
  },
  menuImage: {
    height: '70px',
    width: '70px',
    margin: 'auto 0 auto auto',
  },
  enMenuName: {
    ...CommonStyle,
    fontSize: '14px',
    letterSpacing: '1.62px',
    color: '#5c5c5c',
    margin: '8px 0',
  },
  jaMenuName: {
    ...CommonStyle,
    fontSize: '12px',
    letterSpacing: '1.38px',
    color: '#a5a5a5',
    margin: '8px 0',
  },
  price: {
    ...CommonStyle,
    fontSize: '14px',
    letterSpacing: '1.62px',
    color: '#5c5c5c',
    margin: '8px 0',
  },
}));

export default useStyles;
