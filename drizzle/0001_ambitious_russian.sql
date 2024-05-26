ALTER TABLE "testTable" ALTER COLUMN "qty" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "full_name" SET DEFAULT 'Ben';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "phone" SET DEFAULT '1234567890';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "address" SET DEFAULT '123 Main St';