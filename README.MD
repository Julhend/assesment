# Assessment API

API for Assessment SEBISedu using Node.js and MySQL with sequelize ORM
Assessment API is API for create , read, update and delete (CRUD) an Article. Before creating an article user must register first, if user is registered user can login using email and password to get authorized and can use the routes that has been provided. Using Passport (https://www.npmjs.com/package/passport) for Authentication Middleware, and Using Jsonwebtoken (https://www.npmjs.com/package/jsonwebtoken) for generating token that use for User Authentication. Assessment API also has upload picture feature using Multer (https://www.npmjs.com/package/multer).
For complete information about what libraries or dependencies that use for this API, please open the file package.json

```
API DOCUMENTATION : (https://documenter.getpostman.com/view/13000455/U16kqk2Z#d6d38248-a391-4627-86c1-160a326079d7)
```

## Environment variables

```
DB_USERNAME="" # database username
DB_PASSWORD="" # database password
DB_HOST="" # database host
DB_DATABASE="" # database name
PORT= # API port
HOST=" # API host name
JWT_SECRET="" # secret word for jwt

```

## Installation

- `npm install --no-save` to init project and install all dependencies that used
- `npm run db:create` to create database
- `npm run db:migrate` to migrate table structures
- `npm run db:seed` to run data seeder
- `npm run dev` / `npm start` start project

## extras

- `sequelize migrate:make -- migrationName` to make a migration
- `sequelize seed:make -- seedName` to make a seed
- `sequelize run seed` to run all seed

## reset

- `npm db:drop` for dropping database
- `npm migrate:undo` for undoing migration
