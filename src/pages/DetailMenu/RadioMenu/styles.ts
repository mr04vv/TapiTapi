import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  body: {
    width: '90%',
    margin: '10px auto',
  },
  label: {
    margin: '4px 0',
    fontSize: '16px',
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
    color: '#5c5c5c',
  },
  disablePrice: {
    textAlign: 'center',
    margin: '-10px auto 0',
    width: '90%',
    fontSize: '12px',
    letterSpacing: '2.0px',
    color: '#a5a5a5',
  },
  formLabel: {
    fontSize: '12px',
    letterSpacing: '2.0px',
  },
  root: {
    '&$checked': {
      color: '#ED6103',
    },
  },
  checked: {},
}));

export default useStyles;
