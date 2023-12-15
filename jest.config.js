export const preset = "ts-jest";
export const testEnvironment = "jsdom";
export const setupFilesAfterEnv = ["<rootDir>/src/setupTests.ts"];
export const transform = {
  "^.+\\.tsx?$": "ts-jest",
};
export const testRegex = "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$";
export const moduleFileExtensions = ["ts", "tsx", "js", "jsx", "json", "node"];
 