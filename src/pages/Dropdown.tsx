import { observer } from 'mobx-react';
import React from 'react';

interface DropdownProps {
  options: string[];
}
const Dropdown = ({ options }: DropdownProps) => {
  return (
    <>
      <select style={{ width: 'fit-content' }}>
        <option label={'Choose a country:'} />
        {options.map(option => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </>
  );
};

export default observer(Dropdown);
