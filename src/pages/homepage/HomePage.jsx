import Link from 'next/link';
import { Welcome } from '@/components/welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <p>
        <Link href="/">Back to the top</Link>
      </p>
    </>
  );
}