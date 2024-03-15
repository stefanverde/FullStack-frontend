import React, { ReactNode } from 'react';
import '../assets/Global.css';
import { observer } from 'mobx-react';

interface BackgroundImageProps {
  children: ReactNode;
}
const BackgroundImage: React.FC<BackgroundImageProps> = ({ children }) => {
  return <div className="backimage">{children}</div>;
};

export default observer(BackgroundImage);
