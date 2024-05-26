DO $$ BEGIN
 CREATE TYPE "public"."roles" AS ENUM('admin', 'user', 'guest');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "jobs" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256) DEFAULT 'Software Engineer',
	"salary" integer DEFAULT 100000,
	"location" varchar(256) DEFAULT 'San Francisco',
	"description" text DEFAULT 'A software engineer job',
	"updated_at" text DEFAULT '2021-01-01'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "testTable" (
	"qty" integer DEFAULT 0,
	"id" serial PRIMARY KEY NOT NULL,
	"roles" "roles" DEFAULT 'user'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text DEFAULT 'Ben',
	"phone" varchar(256) DEFAULT '1234567890',
	"address" varchar(256) DEFAULT '123 Main St',
	"score" integer DEFAULT 0
);
