import { defineConfig } from "cypress";

const { GitHubSocialLogin } = require("cypress-social-logins").plugins;

export default defineConfig({
  e2e: {
    baseUrl: "http://127.0.0.1:3000",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      on("task", {
        GitHubSocialLogin,
      });
    },
    supportFile: "cypress/support/index.ts",
    watchForFileChanges: false,
  },
});
