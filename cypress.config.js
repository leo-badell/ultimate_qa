const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://ultimateqa.com/automation/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
