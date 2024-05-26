import { db } from '@/db';
import { jobs } from '@/db/schema';
import { ilike, or } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const title = url.searchParams.get('title');

  try {
    // means either the title or description could be used to search
    const jobsData = await db
      .select()
      .from(jobs)
      .where(
        or(
          ilike(jobs.title, `%${title}%`),
          ilike(jobs.description, `%${title}%`)
        )
      );

    return NextResponse.json({ jobs: jobsData });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `Error just occurred` });
  }
}
