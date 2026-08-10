This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Things to include in final repo:

Technologies used
- Next.js (for simplicity, built-in router)
Setup/install instructions
- Git clone or something
- Have node installed
Local run instructions
- npm run start
Mock user credentials/roles
- email
- password
- 2FA code
How to test the login/MFA flow
Key design decisions and assumptions
- assume attacker:
  - has access to all URLs of website
  - will attempt to access protected page without imputting proper credentials
  - can intercept and read / modify packets, API calls, and routing requests
Known limitations
- without backend validation, impossible to make it secure against certain attacks.