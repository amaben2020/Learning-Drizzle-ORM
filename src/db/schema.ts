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

export const testTable = pgTable('testTable', {
  qty: integer('qty').default(0),
  id: serial('id').primaryKey(),
  // name: char('name', { length: 10 }),
  // data: json('data'),
  // startAt: time('startAt', { precision: 6, withTimezone: true }).defaultNow(),
  role: roles('roles').default('user'),
});
