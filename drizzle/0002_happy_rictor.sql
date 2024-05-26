CREATE TABLE IF NOT EXISTS "jobs3" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256) DEFAULT 'Software Engineer',
	"salary" integer DEFAULT 100000,
	"location" varchar(256) DEFAULT 'San Francisco',
	"description" text DEFAULT 'A software engineer job',
	"updated_at" text DEFAULT '2021-01-01'
);
--> statement-breakpoint
DROP TABLE "jobs2";