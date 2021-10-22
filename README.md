# NestJS TypeScript, Prisma, Apollo Server GraphQL project <!-- omit in toc -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Includes NestJS TypeScript, Prisma, Apollo Server GraphQL project

-   [App startup](#app-startup)
    -   [SQLite](#sqlite)
    -   [Postgres](#postgres)
-   [Using Prisma](#using-prisma)
    -   [Adding a table to your database](#adding-a-table-to-your-database)
    -   [Creating migrations](#creating-migrations)
    -   [Seeding sample data](#seeding-sample-data)
    -   [Using prisma client to perform database actions](#using-prisma-client-to-perform-database-actions)
-   [Scripts](#scripts)
    -   [generate-types](#generate-types)
    -   [watch-queries](#watch-queries)
    -   [generate](#generate)
    -   [migrate](#migrate)
    -   [deploy](#deploy)
    -   [reset](#reset)
    -   [seed](#seed)
    -   [studio](#studio)
    -   [prisma](#prisma)
    -   [build](#build)
    -   [dev](#dev)
    -   [format](#format)
    -   [lint](#lint)
    -   [start](#start)
    -   [test](#test)
    -   [type-check](#type-check)
    -   [quality](#quality)
-   [Accessibility ](#accessibility)

## App startup

Choose how to start your development server based on your database configuration below.

### SQLite

First time starting your app make sure to run `prisma` then start your app.

```
npm run prisma && npm run dev
```

### Postgres

Ensure you have a `.env` file with a `DATABASE_URL` variable following the [format required by prisma](https://www.prisma.io/docs/concepts/database-connectors/postgresql#connection-details) and using the credentials found in your `docker-compose.yml` file.

```
DATABASE_URL=postgresql://[POSTGRES_USER]:[POSTGRES_PASSWORD]@[POSTGRES_HOST]:[PORT]?schema=public
```

Start up your development server with the following command:

```
docker-compose up
```

Once your development server is up and running, in a new terminal run the following command:

```
 npm run prisma && npm run dev
```

`npm run prisma` will do a few things for us:

-   Format your `prisma/schema.prisma` file (`prisma format`) | [prisma format documentation](https://www.prisma.io/docs/reference/api-reference/command-reference#format)
-   Keeps your `prisma/schema.prisma` file in sync with your database by auto generating migrations when needed (`npm run migrate`) | [prisma migration documentation](https://www.prisma.io/docs/concepts/components/prisma-migrate)
-   Seed your database with (`npm run seed`) | [prisma seeding documentation](https://www.prisma.io/docs/guides/database/seed-database/)

## Using Prisma

> Prisma helps app developers build faster and make fewer errors with an open source ORM for PostgreSQL, MySQL and SQLite. | [Source](https://www.prisma.io/)

### Adding a table to your database

Adding a table is as easy as adding a model to your `schema.prisma` file, followed by [creating a migration](#Creating-migrations). For a tutorial on this visit the [prisma schema documentation](https://www.prisma.io/docs/concepts/components/prisma-schema).

### Creating migrations

Once you've made the [appropriate changes to your `schema.prisma`](#Adding-a-table-to-your-database) file you can auto generate a migration using

```bash
npm run migrate
```

This will generate a new folder under `prisma/migrations` with a SQL file outlining the changes to be reflected to your database and also generate new TypeScript code for prisma client usage.

To learn more visit the [prisma migration documentation](https://www.prisma.io/docs/concepts/components/prisma-migrate) or the [prisma generate documentation](https://www.prisma.io/docs/reference/api-reference/command-reference#generate).

### Seeding sample data

To seed your database, using [prisma client](#Using-prisma-client-to-perform-database-actions), add in sample data in the `prisma/seed.ts` file.

To learn more visit the [prisma seeding documentation](https://www.prisma.io/docs/guides/database/seed-database/).

### Using prisma client to perform database actions

Using the prisma client you can do the various actions required to build applications utilizing a database.

To learn more visit [working with the prisma client](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient).

## Scripts

All scripts can be run by prefixing with `npm run`, for example `npm run build`

### generate-types

Using [graphql code generator](https://www.graphql-code-generator.com/) this generates types based on the `codegen.yml` configuration. In the initial setup this will update files under the `gen/` directory.

```bash
npm run generate-types
```

### watch-queries

Using [graphql code generator](https://www.graphql-code-generator.com/) this command listens for changes based on the `documents` key in the `codegen.yml` file, and generates types.

```bash
npm run watch-queries
```

### generate

See the [prisma generate documentation](https://www.prisma.io/docs/reference/api-reference/command-reference#generate).

```bash
npm run generate
```

### migrate

See the [prisma migration documentation](https://www.prisma.io/docs/concepts/components/prisma-migrate).

```bash
npm run migrate
```

### deploy

> To apply pending migrations to development, staging, or testing environments, run the `migrate deploy` command as part of your CI/CD pipeline | [Source](https://www.prisma.io/docs/guides/deployment/deploy-database-changes-with-prisma-migrate).

```bash
npm run deploy
```

### reset

When you want to reset your database to a clean slate, this clears all migrations and re-runs the migration list, then seeds the database. For more visit [prisma migrate reset](https://www.prisma.io/docs/reference/api-reference/command-reference/#migrate-reset).

```bash
npm run reset
```

### seed

Runs the `prisma/seed.ts` script to seed your database. See the [prisma seeding documentation](https://www.prisma.io/docs/guides/database/seed-database/).

```bash
npm run seed
```

### studio

Allows you to interact with and manage your data interactively. For more visit [prisma studio](https://www.prisma.io/docs/reference/api-reference/command-reference/#studio).

```bash
npm run studio
```

### prisma

An aggregate command used to format your schema file, check for differences from schema to db, generate a prisma client, and seed your database.

```bash
npm run prisma
```

### build

Builds the production application in the .next folder.

```bash
npm run build
```

### dev

Starts the application in development mode with hot-code reloading, error reporting, and more:

The application will start at http://localhost:3000 by default. The default port can be changed with `-p`, like so:

```bash
npm run dev -p 4000
```

### format

Runs ESLint and Prettier auto-formatting.

```bash
npm run format
```

### lint

Runs ESLint static code analysis based on your `.eslintrc` configuration

```bash
npm run lint
```

### start

Starts the application in production mode. The application should be compiled with `npm run build` first.

The application will start at http://localhost:3000 by default. The default port can be changed with -p, like so:

```bash
npm run start -p 4000
```

### test

Runs Jest unit tests to validate changes between commits

```bash
npm run test
```

### type-check

Runs TypeScript compiler to validate there are no type errors between commits

```bash
npm run type-check
```

### quality

Runs `type-check`, `lint`, and `test` to make an better developer experience catching preventable quality errors.

```bash
npm run quality
```

## Accessibility

### @axe-core/react

Runs in development environment and logs accessibility error results in dev tools console. Tool implementation is in `pages/_app.tsx`.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Next steps:

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver (Preview) or mongodb (Preview).
3. Run npx prisma db pull to turn your database schema into a Prisma schema.
4. Run npx prisma generate to generate the Prisma Client. You can then start querying your database.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/sgentile"><img src="https://avatars.githubusercontent.com/u/132404?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Steve Gentile</b></sub></a><br /><a href="https://github.com/MileTwo/nestjs-gql-prisma/commits?author=sgentile" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/keonik"><img src="https://avatars.githubusercontent.com/u/46365891?v=4?s=100" width="100px;" alt=""/><br /><sub><b>John Fay</b></sub></a><br /><a href="https://github.com/MileTwo/nestjs-gql-prisma/commits?author=keonik" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!