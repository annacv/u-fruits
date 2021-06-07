module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/app.scss";`,
      }
    }
  },
  transpileDependencies: ['vuetify']
}