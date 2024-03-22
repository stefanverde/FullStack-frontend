import { observer } from 'mobx-react';
import React from 'react';
import Dropdown from './Dropdown';

const Shop = () => {
  const options = ['value1', 'value2', 'value3'];
  return (
    <div>
      shop
      <Dropdown options={options} />
    </div>
  );
};

export default observer(Shop);
