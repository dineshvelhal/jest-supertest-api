module.exports = {
   verbose: true,

   displayName: {
      name: "API_TESTS",
      color: "blue"
   },

   // Parallel Execution
   maxConcurrency: 5,

   // Coverage
   collectCoverage: true,
   coverageDirectory: "./coverage",
   //coverageReporters: ["text", "text-summary", "lcov", "cobertura"],
   coverageReporters: ["lcov", "cobertura"],

   // Reporters
   reporters: [
      "default",
      [
         "./node_modules/jest-stare",
         {
            resultDir: "./reports/jest-stare",
            reportTitle: "JEST-STARE-Report",
            coverageLink: "../../coverage/lcov-report/index.html",
            reportHeadline: "JEST-STARE-Report",
            reportSummary: true
         }
      ]
   ],

   // Global Setup and Teardown scripts (Run only once across all tests)
   globalSetup: './testconfig/global_setup.js',
   globalTeardown: './testconfig/global_teardown.js',

   // Globals
   globals: {
      __BASE_URL__: 'https://jsonplaceholder.typicode.com',
      __EP_USERS__: '/users',
      __EP_POSTS__: '/posts'
   },

};