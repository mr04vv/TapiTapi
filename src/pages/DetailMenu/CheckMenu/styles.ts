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
    fontSize: '12px',
    color: '#5c5c5c',
  },
  inline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

export default useStyles;
