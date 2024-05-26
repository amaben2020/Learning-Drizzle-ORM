import { db } from '@/db';
import { jobs } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    console.log(id);
    const jobsData = await db
      .select()
      .from(jobs)
      .where(eq(jobs.id, Number(id)));

    return NextResponse.json({ jobs: jobsData });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `Error just occurred` });
  }
}
