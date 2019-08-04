import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const Text: CSSProperties = {
  fontWeight: 500,
  fontStyle: 'normal',
  fontFamily: 'NotoSansCJKjp',
};

const useStyles = makeStyles(() => createStyles({
  bodyWrapper: {
    width: '90%',
    margin: '30px auto 0',
  },
  caption: {
    ...Text,
    fontSize: '18px',
    letterSpacing: '2.08px',
    color: '#5c5c5c',
  },
  contentWrapper: {
    display: 'flex',
    borderBottom: 'solid 1px #ebebeb',
  },
  rightWrapper: {
  },
  image: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    margin: 'auto',
  },
  content: {
    ...Text,
    fontSize: '12px',
    letterSpacing: '1.38px',
    color: '#5c5c5c',
    display: 'block',
    margin : '5px',
  },
  time: {
    ...Text,
    fontSize: '10px',
    letterSpacing: '1.15px',
    color: '#a5a5a5',
    display: 'block',
    margin : '5px',
  },
}));

export default useStyles;
