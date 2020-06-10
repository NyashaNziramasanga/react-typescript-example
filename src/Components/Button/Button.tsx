import React from 'react';
import styles from './Button.module.scss';

interface IProps {
  name: string;
}

export const Button: React.FC<IProps> = (IProps) => {
  return (
    <div>
      <button className={styles.button} type="button">
        {IProps.name}
      </button>
    </div>
  );
};
