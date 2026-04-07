import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

import { usersTable } from "./users.js";

export const sessionsTable = pgTable("sessions", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	user_id: integer()
		.references(() => usersTable.id)
		.notNull(),
	token_hash: varchar({ length: 255 }).notNull(),
	ip_address: varchar({ length: 50 }),
	user_agent: varchar({ length: 255 }),
	expires_at: timestamp({ withTimezone: true }),
	created_at: timestamp({ withTimezone: true }).defaultNow(),
});

export type Session = typeof sessionsTable.$inferSelect;
export type SessionInsert = typeof sessionsTable.$inferInsert;
