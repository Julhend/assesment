# Assessment API

API for Assessment SEBISedu using Node.js and MySQL with sequelize ORM

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
