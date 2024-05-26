import { db } from '@/db';
import { jobs } from '@/db/schema';
import { ilike } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const title = url.searchParams.get('title');

  try {
    const jobsData = await db
      .select()
      .from(jobs)
      .where(ilike(jobs.title, `%${title}%`));

    return NextResponse.json({ jobs: jobsData });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `Error just occurred` });
  }
}
