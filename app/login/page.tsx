'use client';

import { useRouter } from 'next/navigation';
import './page.css';
import { useState } from 'react';

const VALID_EMAIL = 'test@email.com';
const VALID_PASSWORD = 'password';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.SubmitEvent) => {
    e.preventDefault();
    setError('');

    // Validate that fields are populated
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Validate credentials
    if (email !== VALID_EMAIL || password !== VALID_PASSWORD) {
      setError('Incorrect email or password');
      return;
    }

    // Redirect to auth page
    router.push('/auth');
  };

  const handleCreateAccount = () => {
    router.push('/signup');
  };

  return (
    <div id="page">
      <form id="login-box" onSubmit={handleLogin}>
        <h1>Welcome!</h1>
        <h2>Sign in with your email and password</h2>
        <input
          type="text"
          id="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div id="error">{error ? error : null}</div>
        <input type="submit" id="login" value="Sign in" />
        <input type="button" id="create" value="Create an account" onClick={handleCreateAccount} />
      </form>
    </div>
  );
}
