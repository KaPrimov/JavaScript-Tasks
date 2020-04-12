import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
import DIRECTORY_DATA from './directory.data';

const Directory = () => (
  <div className='directory-menu'>
    {DIRECTORY_DATA.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

export default Directory;
