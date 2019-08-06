import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  wrapper: {
    marginBottom: '66px',
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
    width: '80vw',
    display: 'block',
    margin: '20px auto 20px',
    color: '#ffffff',
    letterSpacing: '1.85px',
    backgroundColor: '#ff9b47',
    '&:hover': {
      backgroundColor: '#d97827',
    },
  },
}));

export default useStyles;
