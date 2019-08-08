import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const Button: CSSProperties = {
  fontSize: 12,
  textTransform: 'none',
  boxShadow: 'none',
  borderRadius: 0,
  padding: 4,
  height: 'fit-content',
  margin: '0 auto',
  width: '30vw',
};

const CommonStyle: CSSProperties = {
  fontWeight: 500,
  fontStyle: 'normal',
};

const useStyles = makeStyles(() => createStyles({
  modalTitle: {
    color: '#5a5a5a',
    fontSize: '14px',
    letterSpacing: '2.0px',
    textAlign: 'center',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
  },
  button: {
    ...Button,
    color: '#ffffff',
    letterSpacing: '1.85px',
    backgroundColor: '#ff9b47',
    '&:hover': {
      backgroundColor: '#d97827',
    },
  },
  loading: {
    ...Button,
    color: '#ffffff',
    letterSpacing: '1.85px',
    backgroundColor: '#a5a5a5',
  },
  cancel: {
    ...Button,
    letterSpacing: '1.85px',
  },
  storeName: {
    ...CommonStyle,
    fontSize: '14px',
    letterSpacing: '2.77px',
    color: '#5c5c5c',
    margin: '5px auto 10px',
  },
  storeInfo: {
    ...CommonStyle,
    fontSize: '12px',
    letterSpacing: '2.77px',
    color: '#a5a5a5',
    margin: '5px auto 10px',
  },
}));

export default useStyles;


export const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'none',
  },
  content: {
    position: 'relative',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '12px',
    margin: '0 auto',
  },
};
