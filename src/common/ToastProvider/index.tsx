'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ToastContainer
        style={{
          fontSize: 16,
          zIndex: 30,
        }}
        theme='colored'
        autoClose={5000}
        position='top-right'
        hideProgressBar={true}
        closeOnClick={true}
      />
    </>
  );
};

export default ToastProvider;
