const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/site-escola/'  // Nome do repositório no GitHub
    : '/'
}
