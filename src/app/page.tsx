// 'use client';

import { users } from '@/db/schema';
import { db } from '../db';
import Seed from './Seed';

export default async function Home() {
  const result = await db.select().from(users);

  console.log('Result', result);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(result)}
      <Seed />
    </main>
  );
}
