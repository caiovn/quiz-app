import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  collectCoverage: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!<rootDir>/out/**",
    "!<rootDir>/.next/**",
    "!<rootDir>/*.config.js",
    "!<rootDir>/coverage/**",
    "!<rootDir>/**/model/**",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts", "<rootDir>/jest.config.ts"],
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],

  // Add more setup options before each test is run
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
