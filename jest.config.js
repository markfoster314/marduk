/** @type {import('jest').Config} */
const config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.stories.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/index.ts",
    "!src/setupTests.ts",
    "!src/**/__tests__/**",
    "!src/types/**",
    "!src/**/augmentation.ts",
    "!src/utils/**",
  ],
  coverageReporters: ["text", "text-summary", "html", "lcov"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },

  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,

  bail: process.env.CI ? 1 : 0,
  maxWorkers: process.env.CI ? 2 : "50%",

  verbose: true,
  detectOpenHandles: true,

  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
};

module.exports = config;
