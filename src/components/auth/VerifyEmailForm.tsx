'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useParams, useRouter } from 'next/navigation';
import LabelInput from '@/common/LabelInput';
import Button from '@/common/Button/Button';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { appAxios } from '@/api/axios';

const VerifyEmailForm = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const param = useParams();

  const formik = useFormik({
    initialValues: {
      code: '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      code: yup.string().required('Code is required'),
    }),
  });

  const submitValues = async () => {
    // try {
    //   setLoading(true);
    //   const response = await appAxios.post('/auth/verify-code', {
    //     verificationCode: formik.values.code,
    //   });
    //   sendFeedback(response.data?.message, 'success');
    //   formik.resetForm();
    //   router.push('/dashboard');
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
      <h1 className='font-semibold text-2xl md:text-[32px] mb-1'>Verify Email</h1>
      <p className='mb-10 text-[#828282]'>
        Enter the verification code sent to your email
      </p>
      <form onSubmit={formik.handleSubmit} className='w-full'>
        <LabelInput
          formik={formik}
          name='code'
          label='Verification code'
          className='mb-[22px]'
        />

        <Button type='submit' loading={loading} className='w-full'>
          Verify Email
        </Button>
      </form>
    </>
  );
};

export default VerifyEmailForm;
