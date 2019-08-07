import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const Button: CSSProperties = {
  fontSize: 12,
  textTransform: 'none',
  boxShadow: 'none',
  borderRadius: 0,
  padding: 10,
  width: '290px',
  margin: '10px auto',
};

const useStyles = makeStyles(() => createStyles({
  wrapper: {
    marginBottom: '88px',
  },
  body: {
    margin: '10px auto 0',
    width: '90%',
  },
  border: {
    borderWidth: '0.5px',
  },
  orderButton: {
    color: '#ff9b47',
    '&:hover': {
      backgroundColor: 'unset',
    },
  },
  inline: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  sum: {
    fontSize: '12px',
  },
  sumPrice: {
    fontSize: '18px',
    color: '#ff9b47',
  },
  determineButton: {
    ...Button,
    width: '80vw',
    display: 'block',
    margin: '20px auto',
    color: '#ffffff',
    letterSpacing: '1.85px',
    backgroundColor: '#ff9b47',
    '&:hover': {
      backgroundColor: '#d97827',
    },
  },
}));

export default useStyles;
