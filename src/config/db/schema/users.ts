import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { z } from "zod";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  first_name: varchar({ length: 255 }).notNull(),
  last_name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  created_at: timestamp({ withTimezone: true }).defaultNow(),
  updated_at: timestamp({ withTimezone: true }).defaultNow()
});

export type User = typeof usersTable.$inferSelect;
export type UserInsert = typeof usersTable.$inferInsert;
export const UserInsertSchema = z.object({
  first_name: z.string().max(255),
  last_name: z.string().max(255),
  email: z.string().email().max(255),
  password: z.string().max(255),
}) satisfies z.ZodType<UserInsert>;