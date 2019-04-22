module.exports = {
  router: {
    base: process.env.DEPLOY_ENV === "GH_PAGES" ? "/greenwashing/" : "/"
  },
  build: {
    extractCSS: true
  }
};
