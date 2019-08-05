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
}));

export default useStyles;