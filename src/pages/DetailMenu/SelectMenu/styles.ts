import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';

const TitleLetter: CSSProperties = {
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 'normal',
};

const useStyles = makeStyles(() => createStyles({
  body: {
    margin: '10px auto',
    width: '90%',
  },
  titleLetter: {
    ...TitleLetter,
    fontSize: '18px',
    letterSpacing: '2.0px',
    color: '#5c5c5c',
  },
}));

export default useStyles;
