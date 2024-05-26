DO $$ BEGIN
 CREATE TYPE "public"."roles" AS ENUM('admin', 'user', 'guest');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "testTable" (
	"qty" integer,
	"id" serial PRIMARY KEY NOT NULL,
	"roles" "roles" DEFAULT 'user'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"phone" varchar(256),
	"address" varchar(256)
);
