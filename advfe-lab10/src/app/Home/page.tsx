import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>This is the Home Page</h1>
      <Link href="/about">Go to About</Link>
    </div>
  );
}
