'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAppDispatch } from '@/store/hooks';
import { useRouter } from 'next/navigation';
import LabelInput from '@/common/LabelInput';
import Button from '@/common/Button/Button';
import Link from 'next/link';
import { appAxios } from '@/api/axios';
import { updateToken } from '@/store/features/user';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import Checkbox from '@/common/Checkbox';
import YupPassword from 'yup-password';
import PasswordRules from '@/common/PasswordRules';
YupPassword(yup); // extend yup

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      acceptTermsAndConditions: false,
      userName: '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      email: yup.string().email('Enter a valid email').required('Email is required'),
      password: yup
        .string()
        .required('Password is required')
        .min(8)
        .minUppercase(1)
        .minSymbols(1),
      firstName: yup.string().required('First name is required'),
      lastName: yup.string().required('Last name is required'),
      acceptTermsAndConditions: yup
        .bool()
        .oneOf([true], 'Please accept the Terms and Conditions to continue'),
      userName: yup.string().required('Username is required'),
    }),
    enableReinitialize: true,
  });
  const submitValues = async () => {
    // try {
    //   setLoading(true);
    //   const response = await appAxios.post('/auth/register', {
    //     email: formik.values.email,
    //     password: formik.values.password,
    //     firstName: formik.values.firstName,
    //     lastName: formik.values.lastName,
    //     acceptTermsAndConditions: formik.values.acceptTermsAndConditions,
    //     userName: formik.values.userName,
    //   });
    //   sendFeedback(response.data?.message, 'success');
    //   formik.resetForm();
    //   return router.push('/auth/verify-email');
    // } catch (error: any) {
    //   sendCatchFeedback(error);
    // } finally {
    //   setLoading(false);
    // }
    return router.push('/auth/verify-email');
  };

  return (
    <>
      <h1 className='font-semibold text-2xl md:text-[32px] mb-1'>Create an account</h1>
      <div className='mb-10 text-[#828282] font-medium'>Let&apos;s get started</div>
      <form onSubmit={formik.handleSubmit} className='w-full '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
          <LabelInput formik={formik} name='firstName' label='First Name' />
          <LabelInput formik={formik} name='lastName' label='Last Name' />
        </div>
        <LabelInput formik={formik} name='userName' label='Username' className='mb-6' />

        <LabelInput
          formik={formik}
          name='email'
          label='Email'
          type='email'
          className='mb-6'
        />
        <LabelInput
          formik={formik}
          name='password'
          label='Password'
          type='password'
          className='mb-4'
        />
        <PasswordRules password={formik.values.password} className='mb-5' />

        <Checkbox
          id='acceptTermsAndConditions'
          checked={formik.values.acceptTermsAndConditions}
          className='text-left'
          onChange={() => {
            formik.setFieldTouched('acceptTermsAndConditions', true);
            formik.setFieldValue(
              'acceptTermsAndConditions',
              !formik.values.acceptTermsAndConditions
            );
          }}
          styledLabel={
            <span className='text-[#4B5768]'>
              I agree with the{' '}
              <Link href='/terms' target='_blank' className='text-primary'>
                Terms and Conditions
              </Link>{' '}
              of Brand
            </span>
          }
          style={{
            marginRight: 4,
          }}
        />
        {formik.touched.acceptTermsAndConditions &&
          formik.errors.acceptTermsAndConditions && (
            <div className='error mt-2'>{formik.errors.acceptTermsAndConditions}</div>
          )}
        <Button type='submit' loading={loading} className='w-full mt-[38px]'>
          Create account
        </Button>
        <div className='mt-6 text-[#A0ABBB] font-medium'>
          Already have an account?{' '}
          <Link href='/auth/login' className=' text-primary'>
            Log in
          </Link>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
