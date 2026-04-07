import db from "../../config/db/index.js";
import { usersTable, type UserInsert } from "../../config/db/schema/users.js";

export default class AuthService {
	async createUser(
		data: UserInsert,
	): Promise<{ insertedId: number } | undefined> {
		const insertedUser = await db
			.insert(usersTable)
			.values(data)
			.returning({ insertedId: usersTable.id });
		return insertedUser[0];
	}
}
