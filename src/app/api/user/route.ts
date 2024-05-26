import { db } from '@/db';
import { users } from '@/db/schema';
import { between } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await db
      .select()
      .from(users)
      // .where(eq(users.fullName, 'Ben2'));
      // .where(inArray(users.fullName, ['Ben']));
      // .where(notInArray(users.fullName, ['Ben']));
      .where(between(users.score, 1, 5));

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Something went wrong' });
  }
}
