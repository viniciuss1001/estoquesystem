import nextJest from 'next/jest'

const createJestConfig = nextJest({
	dir: "./",
})

const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^@/components/(.*)$': '<rootDir>/src/components/$1',
		'^@/lib/(.*)$': '<rootDir>/src/lib/$1',
		'^@/utils/(.*)$': '<rootDir>/src/utils/$1',
		'^@/test-utils/(.*)$': '<rootDir>/src/test-utils/$1',
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
}


export default createJestConfig(customJestConfig)