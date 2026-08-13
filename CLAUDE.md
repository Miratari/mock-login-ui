@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 (App Router) application built with React 19 that implements a mock login/MFA UI. The app demonstrates:
- Login flow with email/password
- Mock MFA step (OTP/email code/authenticator)
- Role-based access control (read-only vs read/write)
- Sign up flow

## Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint

# Run tests (if tests exist - add test scripts as needed)
npm test
# Run a single test
npm test <test-pattern>
```

## Code Architecture

### Directory Structure

```
app/
├── auth/              # MFA/auth-related pages (blank, ready for implementation)
│   ├── page.tsx
│   └── page.css
├── login/             # Login and sign-up pages
│   ├── page.tsx       # Login page with form
│   └── page.css       # Login-specific styles
├── profile/           # Protected profile/dashboard (blank, ready for implementation)
│   ├── page.tsx
│   └── page.css
├── page.tsx           # Home page with navigation links
├── page.css           # Root-level styles
├── globals.css        # Global styles
└── layout.tsx         # Root layout with Geist fonts
```

### Key Files and Their Responsibilities

**`app/page.tsx`** - Home page with navigation links to login and create account

**`app/login/page.tsx`** - Login form page with:
- Email input
- Password input
- Sign in button
- Create account button (navigates to sign-up)

**`app/login/page.css`** - Login page styles including form layout, input styling, and responsive design

**`app/auth/page.tsx`** - MFA page (blank, ready for implementation)

**`app/auth/page.css`** - MFA page styles (blank, ready for implementation)

**`app/profile/page.tsx`** - Protected profile/dashboard page (blank, ready for implementation)

**`app/profile/page.css`** - Profile page styles (blank, ready for implementation)

**`app/layout.tsx`** - Root layout wrapping all pages with:
- Geist sans-serif font
- Geist Mono monospace font
- Antialiased body styling

**`app/globals.css`** - Global CSS imports and base styles

## Next.js Specifics

This project uses Next.js 16.3.0 (Next.js 14) with the App Router. Key conventions to follow:

1. **File-based routing**: `app/about/page.tsx` creates `/about` route
2. **Navigation**: Use `Link` component for client-side navigation
3. **Metadata**: Define per-page metadata in `app/route.ts` or `layout.tsx`
4. **CSS Module alternative**: Using `.css` files with `style` prop or global CSS imports

## TypeScript Configuration

- `tsconfig.json` uses `@/*` path alias pointing to repo root
- Strict mode enabled
- ES module target
- JSX transformed to React JSX

## Project Requirements (from README)

### Login & MFA Flow
- Login screen with email and password fields
- Email/password validation with clear error messages
- Second authentication step (mock MFA: OTP, email code, or authenticator)
- Sign Up flow to separate screen

### Access Control
- After successful login + MFA, redirect to protected screen
- Two user roles:
  - Read-only: Edit actions hidden/disabled
  - Read/write: Edit actions visible/enabled
- Mock users/roles acceptable (no backend auth required)

### Flow Diagrams
- Flow 1: Login → MFA → Protected Screen
- Flow 2: Login → Sign Up

### Security Considerations
- Assume attacker has:
  - Access to all website URLs
  - Ability to intercept/modify packets and API calls
- Without backend validation, cannot fully secure against attacks

## Known Limitations

- No backend authentication - all auth is mocked
- Frontend-only implementation
- Security limitations due to lack of backend validation

## App Routes Overview

- `/` - Home page with navigation
- `/login` - Login page with email/password form
- `/auth` - MFA verification page (to be implemented)
- `/profile` - Protected profile page (to be implemented)
- `/signup` - Sign up page (to be implemented in login flow)

## Project Flow

1. User visits home page
2. User clicks "login" → goes to `/login`
3. User submits credentials → goes to `/auth` (MFA)
4. User completes MFA → goes to `/profile` (protected area)
5. User clicks "Create an account" → goes to `/signup` (to be implemented)
6. New user completes registration → goes to `/profile`

## Mock User Credentials/Roles

(Add specific mock credentials here when implemented)
