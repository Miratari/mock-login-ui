'use client';

import { useRouter } from 'next/navigation';
import './page.css';
import { useState } from 'react';

const VALID_AUTH = '123456';

export default function Auth() {
  const router = useRouter();
  const [auth, setAuth] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.SubmitEvent) => {
    e.preventDefault();
    setError('');

    // Validate that fields are populated
    if (!auth || auth.length != 6) {
      setError('Please provide a 6-digit code');
      return;
    }

    // Validate credentials
    if (auth !== VALID_AUTH) {
      setError('Incorrect authentication');
      return;
    }

    // Redirect to profile page
    router.push('/profile');
  };

  return (
    <div id="page">
      <form id="login-box" onSubmit={handleLogin}>
        <h1>Two-factor authentication</h1>
        <h2>Enter the 6-digit code from your authenticator app</h2>
        <input
          type="text"
          id="auth"
          placeholder="XXXXXX"
          onChange={(e) => setAuth(e.target.value)}
        />
        <div id="error">{error ? error : null}</div>
        <input type="submit" id="submit" value="Verify" />
        <input type="button" id="create" value="Verify with backup code"/>
      </form>
    </div>
  );
}
