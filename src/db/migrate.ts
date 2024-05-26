// // import 'dotenv/config';
// import { drizzle } from 'drizzle-orm/node-postgres';
// import { migrate } from 'drizzle-orm/node-postgres/migrator';
// import { Pool } from 'pg';

// const pool = new Pool({
//   connectionString:
//     'postgresql://postgres:postgres@localhost:5432/testDB?schema=public',
// });

// const db = drizzle(pool);

// async function main() {
//   console.log('migration started...');
//   await migrate(db, { migrationsFolder: 'drizzle' });
//   console.log('migration ended...');
//   process.exit(0);
// }

// main().catch((err) => {
//   console.error(err);
//   process.exit(0);
// });

import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
const sql = postgres(
  'postgres://default:CK3LWXf4iyoY@ep-tight-mode-66645246.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
  { max: 1 }
);
const db = drizzle(sql);
async function main() {
  console.log('migration started...');
  await migrate(db, { migrationsFolder: 'drizzle' });
  console.log('migration ended...');
}

main().catch((err) => {
  console.error(err);
  process.exit(0);
});
