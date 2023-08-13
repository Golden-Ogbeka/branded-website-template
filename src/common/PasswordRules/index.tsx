'use client';

import React, { useCallback } from 'react';
import CheckIcon from '@/assets/icons/auth/checkbox.svg';
import Image from 'next/image';

const PasswordRules = ({
  password,
  className,
}: {
  password: string;
  className?: string;
}) => {
  interface CheckType {
    label: string;
    condition: RegExp;
  }

  const checks: CheckType[] = [
    {
      label: '8 character minimum (e.g 123456A@)',
      condition: /^.{8,}$/,
    },
    {
      label: 'At least one uppercase letter (e.g ABC)',
      condition: /[A-Z]/g,
    },
    {
      label: 'At least one special character (e.g @,#)',
      condition: /[^a-zA-Z0-9s]/g,
    },
  ];

  const runCheck = useCallback(
    (condition: RegExp) => condition.test(password),
    [password]
  );

  return (
    <div className={'grid grid-cols-1 md:grid-cols-2 gap-2 ' + className}>
      {checks.map((check) => (
        <div key={check.label} className='flex items-center gap-2'>
          {runCheck(check.condition) ? (
            <>
              <Image className='w-4 h-4' src={CheckIcon} alt='Done' />
              <span className='text-[12px] text-success'>{check.label}</span>
            </>
          ) : (
            <>
              <div className='w-4 h-4 rounded-full border border-[#A0ABBB] bg-white' />
              <span className='text-[12px] text-[#A0ABBB]'>{check.label}</span>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PasswordRules;
