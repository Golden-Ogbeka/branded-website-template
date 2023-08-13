import Button from '@/common/Button/Button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='flex flex-col h-screen w-screen gap-5 items-center justify-center'>
      <h1>Hi, Welcome to Brand</h1>
      <div className='flex items-center justify-center gap-3'>
        <Link href='/auth/login'>
          <Button>Login</Button>
        </Link>
        <Link href='/auth/register'>
          <Button>Register</Button>
        </Link>
      </div>
    </main>
  );
}
