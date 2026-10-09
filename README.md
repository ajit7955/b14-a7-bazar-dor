# ðŸ›’ Bazar Dor â€” à¦¬à¦¾à¦œà¦¾à¦° à¦¦à¦°

Bazar Dor is a responsive Bengali market-price website that helps users explore product prices and market information in Bangladesh.

## Features

1. Browse products with Bengali names, images, categories, and prices.
2. View products with rising and falling prices.
3. Explore products by category.
4. View individual product details and market price ranges.
5. Sort products by price.
6. Sign up and sign in using email and password.
7. Sign out securely.
8. View and update profile information.
9. Use the website on mobile, tablet, and desktop.
10. Display loading states and empty states.
11. Show toast notifications for supported actions.
12. Use Google and GitHub sign-in when OAuth credentials are configured.

## Technologies Used

- Next.js 14
- React 18
- JavaScript
- Tailwind CSS
- Better Auth
- SQLite with better-sqlite3 for local authentication
- Lucide React
- React Hot Toast
- ESLint
- REST API

## Requirements

- Node.js
- npm
- Git

## Installation

Clone the repository and enter the project folder:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd b14-a7-bazar-dor
npm install
```

Create a `.env.local` file and configure the required authentication environment variables. Never publish real secrets or commit `.env.local`.

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Product API

Primary API:

https://api.api-store.workers.dev/api/bazardor

Fallback API:

https://api.abcz.workers.dev/api/bazardor

The application uses these endpoints to retrieve market-price data.

## Project Structure

- `app/` â€” pages, layouts, and API routes
- `components/` â€” reusable UI components
- `lib/` â€” API and authentication utilities
- `public/` â€” static assets

## Authentication

Better Auth handles email-and-password authentication.

Google and GitHub sign-in require valid OAuth client credentials and matching callback URLs. Configure these credentials locally and in the production hosting environment when using social sign-in.

## Deployment Notes

Before deploying, configure the production environment variables and verify that the authentication database uses persistent storage suitable for the hosting platform.

After deployment, test the home page, category pages, product details, authentication, profile update, and page refresh behavior.

## Project Information

Created as part of the Programming Hero B14-A7 Bazar Dor assignment.
