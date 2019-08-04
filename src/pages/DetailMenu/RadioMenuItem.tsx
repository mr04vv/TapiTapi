import * as React from 'react';
import useStyles from './styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const RadioMenuItem = () => {
    const classes = useStyles();
    return (
        <div>
            <FormControlLabel value="female" control={<Radio />} label="ジャスミングリーンティー" />
        </div> 
    );
};

export default RadioMenuItem;