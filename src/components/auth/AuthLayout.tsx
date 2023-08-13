import Image, { StaticImageData } from 'next/image';
import React from 'react';
import LoginImage from '@/assets/images/auth/login.webp';
import Logo from '@/assets/brand/logo.svg';

const AuthLayout = ({
  children,
  image,
}: {
  image?: StaticImageData;
  children: React.ReactNode;
}) => {
  return (
    <div className='flex lg:flex-nowrap flex-wrap items-center justify-between lg:h-screen '>
      <div className='px-primary py-10 flex flex-col md:min-h-full md:max-h-screen items-center lg:items-start text-center lg:text-left overflow-y-auto lg:flex-[50%] w-full'>
        <Image src={Logo} alt='Brand Logo' className=' w-[200px] h-auto mb-32' />
        {children}
      </div>
      <Image
        src={image || LoginImage}
        alt='Welcome to Brand'
        className='hidden lg:block lg:h-screen w-auto object-cover lg:flex-[50%]'
      />
    </div>
  );
};

export default AuthLayout;
