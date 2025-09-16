// This file has intentional ESLint violations
const badFunction = () => {
console.log('no indentation')  // No indentation - should fail
return 'missing semicolon'      // Missing semicolon - should fail
}

// Unused variable - should fail
const unusedVar = 'test';

// Wrong quotes - should fail
const badString = "should use single quotes";

// Console log in production code - should warn
console.log('Debug message');