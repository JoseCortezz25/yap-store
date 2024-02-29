import { ReactNode } from 'react';
import './Buttons.css';

interface ButtonProps {
  children?: ReactNode;
}

export const PrimaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="primary-button" {...props}>{children}</button>
  );
};

export const SecondaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="secondary-button" {...props}>{children}</button>
  );
};
