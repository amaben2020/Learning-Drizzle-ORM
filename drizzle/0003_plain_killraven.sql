CREATE TABLE IF NOT EXISTS "profile" (
	"id" serial PRIMARY KEY NOT NULL,
	"bio" text DEFAULT '',
	"user_id" integer,
	"created_at" time DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "testTable" ADD COLUMN "name" char(10);--> statement-breakpoint
ALTER TABLE "testTable" ADD COLUMN "data" json;--> statement-breakpoint
ALTER TABLE "testTable" ADD COLUMN "startAt" "time(6) with time zone" DEFAULT now();