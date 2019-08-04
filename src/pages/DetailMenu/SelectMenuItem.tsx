import * as React from 'react';
import useStyles from './styles';

import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SelectMenuItem = () => {
    const classes = useStyles();
    return (
        <div>
            <Select>
                <MenuItem >アイテム</MenuItem>
                <MenuItem >アイテム</MenuItem>
                <MenuItem >アイテム</MenuItem>
            </Select>
        </div> 
    );
};

export default SelectMenuItem;