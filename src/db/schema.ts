// say we wanna create a users table

import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  varchar,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').default('Ben'),
  phone: varchar('phone', { length: 256 }).default('1234567890'),
  address: varchar('address', { length: 256 }).default('123 Main St'),
  score: integer('score').default(0),
});

export const roles = pgEnum('roles', ['admin', 'user', 'guest']);

export const jobType = pgEnum('jobType', [
  'full-time',
  'part-time',
  'contract',
  'internship',
  'temporary',
  'volunteer',
]);

export const jobs = pgTable('jobs', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }).default('Software Engineer'),
  salary: integer('salary').default(100000),
  location: varchar('location', { length: 256 }).default('San Francisco'),
  type: jobType('jobType').default('full-time'),
  description: text('description').default('A software engineer job'),
  company_id: integer('company_id').default(0),
  created_at: integer('created_at').default(0),
  updated_at: integer('updated_at').default(0),
  deleted_at: integer('deleted_at').default(0),
  status: integer('status').default(0),
  type: integer('type').default(0),
});

export const testTable = pgTable('testTable', {
  qty: integer('qty').default(0),
  id: serial('id').primaryKey(),
  // name: char('name', { length: 10 }),
  // data: json('data'),
  // startAt: time('startAt', { precision: 6, withTimezone: true }).defaultNow(),
  role: roles('roles').default('user'),
});
