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
}));

export default useStyles;
