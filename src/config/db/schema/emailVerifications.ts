import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { usersTable } from "./users.js";

export const emailVerificationsTable = pgTable("email_verifications", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    user_id: integer().references(() => usersTable.id).notNull(),
    token_hash: varchar({ length: 255 }).notNull(),
    expires_at: timestamp({ withTimezone: true }).notNull(),
    used_at: timestamp({ withTimezone: true }),
    created_at: timestamp({ withTimezone: true }).defaultNow()
});

export type EmailVerification = typeof emailVerificationsTable.$inferSelect;
export type EmailVerificationInsert = typeof emailVerificationsTable.$inferInsert;