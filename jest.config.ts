import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
const config: Config = {
    preset: 'ts-jest',
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/app/setupTests.ts'], // Corrected path to your setupTests file
    setupFiles: ["<rootDir>/__mocks__/setEnvVars.js"],
    transform: {
        '^.+\\.tsx?$': 'ts-jest', // Use ts-jest for TypeScript/TSX files
        '^.+\\.jsx?$': 'babel-jest', // Use babel-jest for JavaScript/JSX files
    },
    moduleNameMapper: {
        // Mocks file imports for Jest
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less)$': 'identity-obj-proxy', // Mocks CSS/LESS imports
    },
    transformIgnorePatterns: [
        '/node_modules/', // Ignore transformations for node_modules
    ],
    verbose: true,
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)