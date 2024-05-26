import { db } from '@/db';
import { jobs } from '@/db/schema';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // await db.insert(users).values({
    //   fullName: 'Ben4',
    //   phone: '1234567890',
    //   address: '1234 Main St',
    //   score: 3,
    // });
    console.log('CALLED');
    await db.insert(jobs).values({
      title: 'Senior Backend software engineer',
      // type: 'internship',
      description: 'lorem ipsum',
      salary: 100000,
      location: 'San Francisco',
    });
    return NextResponse.json({ message: 'Seed data inserted' });
  } catch (err) {
    console.error('Error inserting seed data:', err);
    return NextResponse.json(
      { message: 'Seed data insertion failed' },
      {
        status: 500,
      }
    );
  }
}
