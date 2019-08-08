import * as React from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import useStyles from './styles';

interface PropsInterface {
  items: any;
  isRow?: boolean;
  value: any;
}

const RadioGroupCommon = ({ items, isRow, value }: PropsInterface) => {
  const classes = useStyles();
  return (
    <RadioGroup className={isRow ? classes.row : ''}>
      {items.map((i: any) => (
        <FormControlLabel value="female" control={<Radio />} label={i} checked={value === i} />
      ))}
    </RadioGroup>
  );
};

export default RadioGroupCommon;
