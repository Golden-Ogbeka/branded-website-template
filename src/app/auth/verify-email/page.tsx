import AuthLayout from '@/components/auth/AuthLayout';
import VerifyEmailForm from '@/components/auth/VerifyEmailForm';
import React from 'react';

const VerifyEmailPage = () => {
  return (
    <AuthLayout>
      <VerifyEmailForm />
    </AuthLayout>
  );
};

export default VerifyEmailPage;
