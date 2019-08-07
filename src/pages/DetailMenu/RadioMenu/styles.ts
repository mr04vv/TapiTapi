import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  body: {
    width: '90%',
    margin: '10px auto',
  },
  label: {
    margin: '10px 0',
    fontSize: '18px',
    letterSpacing: '2.0px',
    color: '#5c5c5c',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  price: {
    textAlign: 'center',
    margin: '-10px auto 0',
    width: '90%',
    letterSpacing: '2.0px',
    fontSize: '12px',
  },
  disablePrice: {
    textAlign: 'center',
    margin: '-10px auto 0',
    width: '90%',
    fontSize: '12px',
    letterSpacing: '2.0px',
    color: '#a5a5a5',
  },
}));

export default useStyles;
