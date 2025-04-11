import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>This is the About Page</h1>
      <Link href="./Home">Go to Home</Link>
    </div>
  );
}
