# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Run production build
npm run lint     # ESLint check
```

## Stack

- **Next.js 16** with App Router, React 19, TypeScript 5
- **Tailwind CSS v4** (PostCSS-based — no `tailwind.config.*` file; configured via CSS imports in `globals.css`)
- **React Compiler** enabled via Babel plugin in `next.config.ts`
- **Supabase** for newsletter subscriber storage (client-side fetch via `NEXT_PUBLIC_SUPABASE_*` env vars)
- **Vercel Analytics** via `<Analytics />` in root layout

## Architecture

**Routing:** All pages live under `src/app/` using Next.js App Router file conventions. Pages: `/` (home), `/about`, `/partners`, `/updates`.

**Layout:** `src/app/layout.tsx` wraps every page with `<Navbar>`, page content, `<Analytics />`, and `<Footer>`. Google Font CSS variables (`--font-inter`, `--font-oswald`, `--font-acme`) are applied to the `<html>` element via `src/app/fonts.js`.

**Client vs Server Components:** Navbar and Footer are plain JS Server Components. Interactive components — `countdown.tsx` (timer to 2030-09-01) and `newsletter_form.tsx` (Supabase subscriber submit) — are `"use client"`.

**Newsletter form flow:** On submit, `newsletter_form.tsx` POSTs to Supabase REST API. A 409 from Supabase means the email is already subscribed.

**Styling:** Tailwind utilities inline in JSX. `src/app/globals.css` also contains extensive custom CSS for the MailerLite embedded form (frosted-glass dark theme). Primary accent color: `red-600`/`red-700`.

## Project
Durango 2030 - UCI Mountain Bike World Championships website
Stack: Next.js (or whatever your framework is), Vercel hosting, GitHub CI/CD, Supabase backend

## Supabase
- Project URL and anon key are in .env.local (never hardcode)
- Five databases: sponsorship, fundraising, grant, volunteer, event activity
- UUID primary keys on sponsorship tables, BIGINT on volunteer/event tables
- Use LEFT JOIN when querying across databases

## Deployment
- All changes go through GitHub → auto-deploys to Vercel
- Never push directly to main without testing locally first

**Environment variables required locally:**
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```
