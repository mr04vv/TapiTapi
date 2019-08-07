import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const Button: CSSProperties = {
  fontSize: 12,
  textTransform: 'none',
  boxShadow: 'none',
  borderRadius: 0,
  padding: 10,
  height: 'fit-content',
  margin: '10px auto',
  width: '30vw',
};

const useStyles = makeStyles(() => createStyles({
  modalTitle: {
    color: '#5a5a5a',
    fontSize: '14px',
    letterSpacing: '2.0px',
    textAlign: 'center',
  },
  buttonWrapper: {
    margin: '20px auto -10px',
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
}));

export default useStyles;


export const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    position: 'relative',
    width: '80vw',
    left: 'unset',
    top: '40vw',
    right: 'unset',
    bottom: 'unset',
    margin: '50% auto',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  },
};
