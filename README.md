This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Requirements (copied from email):

Login & MFA
• Login screen with email and password.
• Validate email and password fields with clear error messages.
• Add a second authentication step using a mock MFA method such as OTP, email code, or authenticator
code.
• Include a simple Sign Up flow that navigates to a separate screen. Full registration is not required.
• Flow: Login → MFA → Protected Screen
• Flow 2: Login → Sign Up

Access Control
• After successful login and MFA, redirect to a protected screen.
• Demonstrate two user roles:
o Read-only: Edit actions are hidden or disabled.
o Read/write: Edit actions are visible and enabled.
• Mock users/roles are acceptable; no backend authentication is required.

Technical
• Use React
• Keep the code modular and maintainable.
• Include tests where appropriate.
• UI/component libraries are allowed.

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