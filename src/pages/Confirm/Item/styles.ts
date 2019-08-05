import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const CommonStyle: CSSProperties = {
  fontWeight: 500,
  fontStyle: 'normal',
};

const useStyles = makeStyles(() => createStyles({
  border: {
    borderWidth: '0.5px',
  },
  enMenuName: {
    ...CommonStyle,
    fontSize: '16px',
    letterSpacing: '1.62px',
    color: '#5c5c5c',
    margin: '2px 0',
  },
  jaMenuName: {
    ...CommonStyle,
    fontSize: '14px',
    letterSpacing: '1.38px',
    color: '#a5a5a5',
    margin: '2px 0',
  },
  options: {
    ...CommonStyle,
    fontSize: '12px',
    letterSpacing: '1.62px',
    color: '#5c5c5c',
    margin: '2px 0',
  },
  inline: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
