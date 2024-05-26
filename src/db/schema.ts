// say we wanna create a users table

import {
  char,
  integer,
  json,
  pgEnum,
  pgTable,
  serial,
  text,
  time,
  varchar,
} from 'drizzle-orm/pg-core';
// enums are types representing a set of named constants
export const roles = pgEnum('roles', ['admin', 'user', 'guest']);

// create a table called users
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').default('Ben'),
  phone: varchar('phone', { length: 256 }).default('1234567890'),
  address: varchar('address', { length: 256 }).default('123 Main St'),
  score: integer('score').default(0),
});

export const profile = pgTable('profile', {
  id: serial('id').primaryKey(),
  bio: text('bio').default(''),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  createdAt: time('created_at').defaultNow(),
});

export const jobs = pgTable('jobs3', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }).default('Software Engineer'),
  salary: integer('salary').default(100000),
  location: varchar('location', { length: 256 }).default('San Francisco'),
  description: text('description').default('A software engineer job'),
  updatedAt: text('updated_at').default('2021-01-01'),
});

export const testTable = pgTable('testTable', {
  qty: integer('qty').default(0),
  id: serial('id').primaryKey(),
  name: char('name', { length: 10 }),
  data: json('data'),
  startAt: time('startAt', { precision: 6, withTimezone: true }).defaultNow(),
  role: roles('roles').default('user'),
});
