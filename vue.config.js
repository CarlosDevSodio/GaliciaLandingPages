const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    allowedHosts: 'all',
    port: 8080,
    client: {
      webSocketURL: 'wss://emerald-united-villas-ferrari.trycloudflare.com/ws',
    },
  },
})
