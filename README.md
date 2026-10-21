# 🛒 Bazar Dor — বাজার দর

Bazar Dor is a responsive Bengali market-price website that helps users explore daily product prices and market information across Bangladesh. It provides product listings, category browsing, price comparisons, and user authentication in a simple interface.

## ✨ Features

1. Browse products with Bengali names, emojis, categories, and prices.
2. View products with rising and falling prices.
3. Explore products by category.
4. View individual product details and market price ranges.
5. Sort products by price from low to high or high to low.
6. Register and sign in using email and password.
7. Sign out securely.
8. View and update profile information.
9. Access the website on mobile, tablet, and desktop devices.
10. Display loading indicators and empty states.
11. Show toast notifications for supported actions.
12. Support Google and GitHub sign-in when OAuth credentials are configured.
13. Provide friendly error pages for invalid routes.

## 🧰 Technologies Used

- **Next.js 14** — React framework and App Router
- **React 18** — UI development
- **JavaScript** — Application logic
- **Tailwind CSS** — Responsive styling
- **Better Auth** — Authentication
- **better-sqlite3** — SQLite database support for local development
- **Lucide React** — Icons
- **React Hot Toast** — Notifications
- **REST API** — Product and category data
- **Git and GitHub** — Version control
- **Vercel** — Deployment

## 📋 Requirements

Make sure the following tools are installed:

- Node.js
- npm
- Git

## 🚀 Installation and Setup

### 1. Clone the repository

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd b14-a7-bazar-dor
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root and add the environment variables required by your Better Auth configuration and database setup.

Use your actual configuration values. Never publish passwords, API secrets, or OAuth credentials in your repository.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

- `npm run dev` — Starts the development server.
- `npm run lint` — Checks code quality if the script is configured.
- `npm run build` — Creates a production build.
- `npm run start` — Starts the production server after a successful build.

## 🌐 Product API

**Primary API**

[https://api.api-store.workers.dev/api/bazardor](https://api.api-store.workers.dev/api/bazardor)

**Alternative API**

[https://api.abcz.workers.dev/api/bazardor](https://api.abcz.workers.dev/api/bazardor)

### Available Endpoints

| Endpoint                  | Description                   |
| ------------------------- | ----------------------------- |
| `/products`               | Retrieve all products         |
| `/products?category=chal` | Filter products by category   |
| `/products/1`             | Retrieve a product by ID      |
| `/categories`             | Retrieve available categories |
| `/categories/chal`        | Retrieve a specific category  |

## 📁 Project Structure

```text
b14-a7-bazar-dor/
├── app/
│   ├── api/
│   ├── category/
│   ├── product/
│   ├── signin/
│   ├── signup/
│   ├── profile/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/
├── lib/
├── public/
├── .env.local
├── package.json
└── README.md
```

The actual folders and files may differ depending on the current implementation.

## 🔐 Authentication

Better Auth is used to manage user authentication.

- Email-and-password registration and sign-in.
- Sign-out functionality.
- Profile information and profile updates.
- Optional Google and GitHub sign-in.

Social login requires valid OAuth credentials and correctly configured callback URLs. Configure the necessary environment variables in both local development and production.

## 🚢 Deployment

The application can be deployed to a supported hosting platform, such as Vercel, after its configuration is complete.

Before deployment:

1. Configure all required production environment variables.
2. Verify the authentication database and ensure its storage is suitable for the hosting platform.
3. Run `npm run build` and resolve any build errors.
4. Test the home page, category pages, product details, sign-in, sign-up, and profile update.
5. Test page refreshes on dynamic routes.
6. Verify the production website on mobile, tablet, and desktop.

## 👨‍💻 Project Information

**Project Name:** Bazar Dor — বাজার দর  
**Assignment:** Programming Hero B14-A7  
**Purpose:** Display essential market prices and product information through a responsive Bengali-language website.
