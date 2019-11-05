const consola = require('consola')
// const fs = require('fs')
// const path = require('path')
// const https = require('https')
// const redirectSSL = require('redirect-ssl')


const { Nuxt, Builder } = require('nuxt')
const app = require('./app')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  // app.use(redirectSSL)
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host, () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    })
  })

  // https.createServer({
  //   key: fs.readFileSync(path.resolve(__dirname, './server.key')),
  //   cert: fs.readFileSync(path.resolve(__dirname, './server.crt'))
  // }, app)
  
}
start()
