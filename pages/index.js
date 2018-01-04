import Link from 'next/link';

function Index() {
  return (
    <div>
      <p>Hello Next.js!</p>

      <Link href="/about">
        <button>About</button>
      </Link>
    </div>
  );
}

export default Index;
