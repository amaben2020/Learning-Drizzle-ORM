import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    // host: 'postgresql://postgres:postgres@localhost:5432/testDB?schema=public',
    // user: 'postgres',
    // password: 'postgres',
    // database: 'testDB',
    url: 'postgresql://postgres:postgres@localhost:5432/testDB?schema=public',
  },
  verbose: true,
  strict: true,
});
