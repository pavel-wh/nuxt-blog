# Blog App

Blog App is a Node.js application with Express.js framework and Server Side Rendering from Nuxt.js.

## Clone repo

Clone this repo to your local machine using:

```bash
git clone https://github.com/pavel-wh/nuxt-blog
```

## Installation

Use the Node package manager [npm](https://www.npmjs.com/) to install this app.

```bash
npm install
```

## Create Database

- Sign in to [mongodb](https://account.mongodb.com/account) Create project, build cluster and create database.

- Create keys.dev.js in `./server/keys/` folder with code below and remove `app.use(sslRedirect())` from `./server/app.js` for local dev

```bash
module.exports = {
  MONGO_URI:
    'mongodb+srv://username:password@nuxt-blog-aaaaaa.mongodb.net/test?retryWrites=true&w=majority',
  JWT: 'jwt-secret-phrase'
}
```

- Add your local IP to Whitelist

## Build Setup

Remove `middleware: ['admin-auth'],` from `./pages/admin/users.vue`

```bash

# serve with hot reload at localhost:3000
npm run dev

# build for production and launch server
npm run build
npm run start

# generate static project
npm run generate
```

Go to `https://URL/admin/users` and create `Admin user` next add back `middleware: ['admin-auth'],` to `./pages/admin/users.vue`

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
