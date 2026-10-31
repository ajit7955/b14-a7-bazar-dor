import { betterAuth } from "better-auth";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
throw new Error("DATABASE_URL is missing from .env.local");
}

const database = new Pool({
connectionString,
ssl: {
rejectUnauthorized: false,
},
});

const socialProviders = {};

if (
process.env.GOOGLE_CLIENT_ID &&
process.env.GOOGLE_CLIENT_SECRET
) {
socialProviders.google = {
clientId: process.env.GOOGLE_CLIENT_ID,
clientSecret: process.env.GOOGLE_CLIENT_SECRET,
};
}

if (
process.env.GITHUB_CLIENT_ID &&
process.env.GITHUB_CLIENT_SECRET
) {
socialProviders.github = {
clientId: process.env.GITHUB_CLIENT_ID,
clientSecret: process.env.GITHUB_CLIENT_SECRET,
};
}

export const auth = betterAuth({
database,
secret: process.env.BETTER_AUTH_SECRET,
baseURL:
process.env.BETTER_AUTH_URL ||
"http://localhost:3000",
emailAndPassword: {
enabled: true,
},
socialProviders,
});
