'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useParams, useRouter } from 'next/navigation';
import LabelInput from '@/common/LabelInput';
import Button from '@/common/Button/Button';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { appAxios } from '@/api/axios';

const ResetPasswordForm = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const param = useParams();

  const formik = useFormik({
    initialValues: {
      // email: decodeURIComponent(param?.email as string),
      password: '',
      confirmPassword: '',
      verificationCode: '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      // email: yup.string().email('Enter a valid email').required('Email is required'),
      password: yup.string().required('Password is required'),
      confirmPassword: yup
        .string()
        .required('Enter your password again')
        .oneOf([yup.ref('password'), ''], 'The password you entered does not match'),
      verificationCode: yup.string().required('Verification code is required'),
    }),
    enableReinitialize: true,
  });
  const submitValues = async () => {
    // try {
    //   setLoading(true);
    //   const response = await appAxios.post('/auth/reset-password', {
    //     // email: formik.values.email,
    //     password: formik.values.password,
    //     confirmPassword: formik.values.confirmPassword,
    //     token: formik.values.verificationCode,
    //   });
    //   sendFeedback(response.data?.message, 'success');
    //   formik.resetForm();

    //   router.push('/auth/login');
    // } catch (error: any) {
    //   sendCatchFeedback(error);
    // } finally {
    //   setLoading(false);
    // }

    router.push('/auth/login');
  };

  const sendVerificationCode = async () => {
    try {
      setLoading(true);
      const response = await appAxios.post('/auth/resend-code', {
        email: param?.email,
      });
      sendFeedback(response.data?.message, 'success');
    } catch (error: any) {
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className='font-semibold text-2xl md:text-[32px] mb-1'>Reset Password</h1>
      <p className='mb-10 text-[#828282]'>
        Enter your new password and the verification code you received in your email
      </p>
      <form onSubmit={formik.handleSubmit} className='w-full'>
        {/* <LabelInput
          formik={formik}
          name='email'
          label='Email'
          type='email'
          className='mb-8'
          disabled
        /> */}
        <LabelInput
          formik={formik}
          name='password'
          label='Password'
          type='password'
          className='mb-8'
        />
        <LabelInput
          formik={formik}
          name='confirmPassword'
          label='Confirm Password'
          type='password'
          className='mb-8'
        />
        <LabelInput
          formik={formik}
          name='verificationCode'
          label='Verification Code'
          className='mb-[22px]'
        />
        <div className='mb-[66px]'>
          <span className='text-sm font-normal '>
            Didn&apos;t receive a verification code?{' '}
            <button
              className='text-primary font-semibold'
              type='button'
              onClick={sendVerificationCode}
            >
              Resend
            </button>
          </span>
        </div>
        <Button type='submit' loading={loading} className='w-full'>
          Reset Password
        </Button>
      </form>
    </>
  );
};

export default ResetPasswordForm;
