# NestJS TypeScript, Prisma, Apollo Server GraphQL project <!-- omit in toc -->

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Includes NestJS TypeScript, Prisma, Apollo Server GraphQL project

## Installation

```bash
$ npm install
```

## Running the app

The GraphQL playground can be accessed at `localhost:3000/graphql`.

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
