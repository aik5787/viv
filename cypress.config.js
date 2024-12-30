const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "t74pez",
    baseUrl: "https://www.vivtechnologies.com/",
    viewportWidth: 1920,
    viewPortHeight: 1080,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: "reports",
      overwrite: false,
      html: true,
      json: true,
      charts: true,
    },
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      // require('cypress-mochawesome-reporter/plugin')(on);
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'firefox') {
          launchOptions.preferences['browser.cache.disk.enable'] = false;
          launchOptions.preferences['browser.cache.memory.enable'] = false;
          launchOptions.preferences['browser.cache.offline.enable'] = false;
          launchOptions.preferences['network.http.use-cache'] = false;
        }
        return launchOptions;
      });
      return config;
    },
  },
});
