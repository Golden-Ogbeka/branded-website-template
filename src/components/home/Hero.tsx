'use client';
import { useAppSelector } from '@/store/hooks';
import React from 'react';

const Hero = () => {
  const { count } = useAppSelector((state) => state.user);
  return <div>Count is: {count}</div>;
};

export default Hero;
