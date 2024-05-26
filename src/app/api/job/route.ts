import { db } from '@/db';
import { jobs } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    // const { title } = await req.json();
    // console.log('Title', title);

    const jobsData = await db.select().from(jobs).where(eq(jobs.id, 1));
    // .where(like(jobs.title, `%software%`));
    console.log('jobsData', 'jobsData');
    return NextResponse.json({ jobs: jobsData });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `Error just occurred` });
  }
}
