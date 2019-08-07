import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const TitleLetter: CSSProperties = {
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 'normal',
};

const useStyles = makeStyles(() => createStyles({
  body: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '66px',
  },
  thumbnail: {
    width: '100%',
    objectFit: 'contain',
  },
  titleWrapper: {
    width: '90%',
    margin: '10px auto',
  },
  selectMenuWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  titleLetter: {
    ...TitleLetter,
    fontSize: '18px',
    letterSpacing: '2.0px',
    color: '#5c5c5c',
  },
  subTitleLetter: {
    ...TitleLetter,
    fontSize: '12px',
    letterSpacing: '1.38px',
    color: '#a5a5a5',
  },
  sizeAttension: {
    margin: '-15px auto 0',
    width: '90%',
    fontSize: '10px',
    color: '#a5a5a5',
  },
  selectableAttension: {
    margin: '0 auto',
    width: '90%',
    fontSize: '16px',
    color: '#a5a5a5',
  },
}));

export default useStyles;
