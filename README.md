# remix-ts-eslint-template

## Based on Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/guides/vite) for details on supported features.

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Linting

Check files with ESLint:

```shellscript
npm run lint
```

Fix possible ESLint issues:

```shellscript
npm run lint:fix
```

## Run in production mode with accessible .env file

By default, in Remix.js, the variables in file .env
become [unavailable in production mode](https://remix.run/docs/en/main/guides/envvars).
However, sometimes you need to run the application in production mode with accessible .env file

To achieve this, you need to do next steps

First, install dotenv-cli:

```sh
npm install -g dotenv-cli
```

Then build your app for production:

```sh
npm run build
```

Then run the app in production mode with accessible file .env

```sh
npm run start:dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

# Development Rules for the Repository (will be updated over time)

## Folder Hierarchy

- **[shared](app/src/shared)** can be imported everywhere, including within shared entities.
- **[modules](app/src/modules)** can only import entities from shared. Imports between different modules are not allowed. Cross imports within the same module are allowed. This means modules do not depend on each other and only depend on shared.
- **[layouts](app/src/layouts)** can import entities from shared and modules. Imports between different layouts are not allowed. Cross imports within the same layout are allowed. This means layouts do not depend on each other and only depend on shared and modules.
- **[pages](app/src/pages)** can import entities from shared, modules and layouts. Imports between different pages are not allowed. Cross imports within the same page are allowed. This means pages do not depend on each other and only depend on shared, modules and layouts.
- **[routes](app/routes)** can import entities from shared, modules, layouts and pages.

For the automatic enforcement of the Folder Hierarchy, eslint rules will be added.
Until then, following these rules is up to the developer's responsibility.
