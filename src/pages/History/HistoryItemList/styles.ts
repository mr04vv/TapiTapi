import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const CommonStyle: CSSProperties = {
  fontWeight: 500,
  fontStyle: 'normal',
};

const useStyles = makeStyles(() => createStyles({
  options: {
    backgroundColor: '#ffead5',
    borderRadius: '2px',
    padding: 5,
  },
  option: {
    color: '#5c5c5c',
    fontSize: '10px',
    margin: '2px 10px',
    letterSpacing: '1.38px',
    fontWeight: 500,
  },
  inline: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jaMenuName: {
    ...CommonStyle,
    fontSize: '14px',
    letterSpacing: '1.62px',
    color: '#5c5c5c',
    margin: '2px 0',
  },
  enMenuName: {
    ...CommonStyle,
    fontSize: '12px',
    letterSpacing: '1.38px',
    color: '#a5a5a5',
    margin: '2px 0',
  },
  item: {
    margin: '10px 0',
  },
}));

export default useStyles;
