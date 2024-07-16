/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import path, { join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export const sassOptions = {
  includePaths: [join(__dirname, "styles")],
};
