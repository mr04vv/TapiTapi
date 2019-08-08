import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  map: {
    height: 'calc(100vh - 56px)',
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '45vh auto',
  },
}));

export default useStyles;
