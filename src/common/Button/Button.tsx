import React, { ButtonHTMLAttributes } from 'react';
import LoadingIndicator from '../LoadingIndicator';

function Button({
  className,
  type = 'button',
  loading = false,
  onClick,
  children,
  variant = 'contained',
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'outlined' | 'contained';
  loading?: boolean;
}) {
  return (
    <button
      type={type}
      className={
        'w-fit h-[50px] bg-primary text-white rounded-lg py-3 px-8 hover:brightness-110 duration-300 font-medium' +
        ' ' +
        className
      }
      onClick={onClick}
      {...rest}
    >
      {loading ? <LoadingIndicator /> : children}
    </button>
  );
}

export default Button;
