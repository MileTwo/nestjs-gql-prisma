import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    collectCoverage: true,
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    transform: {
        '\\.m?jsx?$': 'jest-esm-transformer',
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    testEnvironment: 'jsdom',
    verbose: true,
    moduleNameMapper: {
        '^components/(.*)$': '<rootDir>/components/$1',
        '^pages/(.*)$': '<rootDir>/pages/$1',
        '^lib/(.*)$': '<rootDir>/lib/$1',
        '^tests/(.*)': '<rootDir>/tests/$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
};

export default config;
