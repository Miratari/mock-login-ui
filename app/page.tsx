import './page.css';
import Link from 'next/link' 

export default function Home() {
  return (
    <div id="page">
      <p>Default page</p>
      <Link href="/login">login page</Link>
    </div>
  );
}
