import React from 'react';

const Checkbox = ({
  className,
  id,
  label,
  styledLabel,
  ...rest
}: {
  className?: string;
  id: string;
  styledLabel?: React.ReactNode;
} & React.HTMLProps<HTMLInputElement>) => {
  return (
    <div className={'flex items-center ' + className}>
      <input
        id={id}
        type='checkbox'
        value=''
        className='w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
        {...rest}
      />
      {label && (
        <label htmlFor={id} className='ml-2 font-medium text-gray-900'>
          {label}
        </label>
      )}
      {styledLabel && <label htmlFor={id}>{styledLabel}</label>}
    </div>
  );
};

export default Checkbox;
