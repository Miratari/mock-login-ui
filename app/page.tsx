import './page.css';
import Link from 'next/link' 

export default function Home() {
  return (
    <div id="page">
      <Link href="/login">Click here to go to login page</Link>
    </div>
  );
}
