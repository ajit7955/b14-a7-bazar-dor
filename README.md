# 🛒 Bazar Dor — বাজার দর

Bazar Dor is a responsive Bengali market-price website for exploring product prices and market information in Bangladesh.

## Features

1. Browse products with Bengali names, images, categories, and prices.
2. View products with rising and falling prices.
3. Filter products by category.
4. View individual product details.
5. Sort products by price.
6. Sign up, sign in, and sign out using Better Auth.
7. View and update profile information.
8. Use the website on mobile, tablet, and desktop.
9. Display loading and empty states.
10. Show toast notifications for supported actions.

## Technologies Used

- Next.js 14
- React
- JavaScript
- Tailwind CSS
- Better Auth
- SQLite and better-sqlite3
- Lucide React
- React Hot Toast
- REST API

## Installation

Requirements: Node.js, npm, and Git.

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Configure the required authentication environment variables in `.env.local` before using authentication in a fresh installation. Never publish real secrets.

## API

Primary API: https://api.api-store.workers.dev/api/bazardor

Fallback API: https://api.abcz.workers.dev/api/bazardor

## Main Project Structure

- `app/` — application pages and routes
- `components/` — reusable UI components
- `lib/` — API and authentication utilities

## Authentication

Better Auth handles email-and-password authentication. Google and GitHub sign-in require OAuth credentials.

## Project

Created as part of the Programming Hero B14-A7 Bazar Dor assignment.
