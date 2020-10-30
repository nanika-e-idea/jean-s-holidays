# jsHolidays

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

### use Firebase  
$ npm i -g firebase-tools  
$ firebase login --no-localhost

表示されるURLを別タブで開くと認証画面が表示されるので許可する。 許可するとコードが表示されるのでコピーしてコマンドラインに貼り付ける。

### 本番デプロイ前に…
設置先はサブディレクトリなのでnuxt.config.jsでルーター設定
