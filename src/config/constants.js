export const API_BASE_URL =
  process.env.NODE_ENV == "development"
    ? "www.development.example.com"
    : "www.production.example.com";
