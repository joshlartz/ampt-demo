import withAmpt from "@ampt/nextjs";

/** @type {import('next').NextConfig} */
const config = withAmpt({
  reactStrictMode: true,
  swcMinify: true,
});

export default config;
