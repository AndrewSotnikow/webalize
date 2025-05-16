This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Libraries

In project used:

* prettier
* husky
* eslint
* payload CMS

## Install and usage

npm run install

In root you can find env.example with keys, use it as default .env (without .example)

Also added scripts:

"generate:types": "PAYLOAD_CONFIG_PATH=src/payload.config.ts payload generate:types", \
"prepare": "husky", \
"prettier-fix": "prettier --write ."

Use "/blog" and "/blog/qwer" to access blog page and post page. In console you will find logs with data
Also are links on pages
