'use client';

import { useState } from 'react';
import { HidePasswordIcon, ShowPasswordIcon } from './PasswordIcons';

interface Props {
  formik?: any;
  name: string;
  className?: string;
  useFormik?: boolean;
  showError?: boolean;
  error?: string;
}

function LabelInput({
  formik,
  name,
  className = '',
  useFormik = true,
  showError = false,
  error,
  ...rest
}: Props & React.HTMLProps<HTMLInputElement>) {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordReveal = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className={'inputContainer ' + className}>
      {useFormik ? (
        <>
          {rest.label && (
            <label
              htmlFor={name}
              className={`${
                formik.touched[name] && formik.errors[name] ? 'errorText' : ''
              }`}
            >
              {rest.label}

              {rest.required && <span>*</span>}
            </label>
          )}
          <div className='relative'>
            <input
              {...rest}
              id={name}
              value={formik.values[name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type={passwordShown ? 'text' : rest.type}
              className={formik.touched[name] && formik.errors[name] ? 'inputError' : ''}
            />
            {rest.type === 'password' && (
              <div
                className='cursor-pointer flex items-center'
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  right: 12,
                }}
                onClick={togglePasswordReveal}
              >
                {passwordShown ? <HidePasswordIcon /> : <ShowPasswordIcon />}
              </div>
            )}
          </div>

          {formik.touched[name] && formik.errors[name] && (
            <div className='error'>{formik.errors[name]}</div>
          )}
        </>
      ) : (
        <>
          {rest.label && (
            <label htmlFor={name} className={`${showError ? 'errorText' : ''}`}>
              {rest.label}
            </label>
          )}
          <div className='relative'>
            <input {...rest} id={name} type={passwordShown ? 'text' : rest.type} />

            {rest.type === 'password' && (
              <div
                className='cursor-pointer flex items-center'
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  right: 12,
                }}
                onClick={togglePasswordReveal}
              >
                {passwordShown ? <HidePasswordIcon /> : <ShowPasswordIcon />}
              </div>
            )}
          </div>

          {showError && <div className='error'>{error}</div>}
        </>
      )}
    </div>
  );
}

export default LabelInput;
