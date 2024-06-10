import { observer } from 'mobx-react';
import React from 'react';

const Items = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 12, 11, 12, 1, 2];
  return (
    <>
      {items.map((item: any, index: any) => (
        <div
          key={index}
          style={{
            display: 'flex',
            height: '45vh',
            width: '25vw',
            background: 'blue',
            padding: '5px',
            marginTop: '15px',
            marginLeft: '15px',
            flexDirection: 'column',
          }}
        >
          {' '}
          item1
        </div>
      ))}
    </>
  );
};

export default observer(Items);
