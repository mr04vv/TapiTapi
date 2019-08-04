import * as React from 'react';

import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const RadioMenuItem = () => (
  <div>
    <FormControlLabel value="female" control={<Radio />} label="ジャスミングリーンティー" />
  </div>
);

export default RadioMenuItem;
