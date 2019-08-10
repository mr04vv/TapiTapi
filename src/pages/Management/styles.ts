import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const Text: CSSProperties = {
  fontWeight: 500,
  fontStyle: 'normal',
  textAlign: 'center',
};

const useStyles = makeStyles(() => createStyles({
  inline: {
    display: 'flex',
    flexDirection: 'row',
  },
  nameHr: {
    width: '30px',
    margin: '-8px 0 0 4px',
    borderColor: '#ff9b47',
    border: 'solid 1px',
  },
  body: {
    width: '80%',
    margin: '2px auto',
  },
  text: {
    ...Text,
    fontSize: '22px',
    marginLeft: '70px',
  },
  order: {
    width: '80%',
    margin: '0 auto 0  10px',
  },
  line: {
    fontSize: '16px',
    color: '#5a5a5a',
    letterSpacing: '1.85px',
    margin: '6px auto',
  },
  item: {
    fontSize: '20px',
    color: '#5a5a5a',
    letterSpacing: '1.85px',
    margin: '6px auto',
  },
  group: {
    fontSize: '10px',
    letterSpacing: '1.15px',
    color: '#a5a5a5',
    display: 'flex',
    margin: '10px',
    fontWeight: 500,
    fontStyle: 'normal',
    backgroundColor: '#ffead5',
    borderRadius: '2px',
    padding: 5,
    alignItems: 'center',
  },
  focus: {
    fontSize: '10px',
    letterSpacing: '1.15px',
    color: '#a5a5a5',
    display: 'flex',
    margin: '10px',
    fontWeight: 500,
    fontStyle: 'normal',
    borderRadius: '2px',
    padding: 5,
    alignItems: 'center',
  },
  store: {
    fontSize: '10px',
    margin: '2px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  wrapper: {
    display: 'flex',
    bottom: '10px',
  },
}));

export default useStyles;
