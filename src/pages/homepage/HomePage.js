import Link from 'next/link';
import { Welcome } from '@/components/welcome';

export default function HomePage() {
  return (
    <>
      <h1>Welcome to my portfolio!</h1>
      <Welcome />
      <p>
        <Link href="/">Back to home</Link>
      </p>
    </>
  );
}