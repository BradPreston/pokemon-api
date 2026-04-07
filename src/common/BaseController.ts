import type { Request, Response } from "express";
import type { output, ZodObject, ZodSafeParseSuccess } from "zod";
import bcrypt from "bcrypt";

export default class BaseController {
	parseOrThrow<T extends ZodObject>(
		req: Request,
		res: Response,
		insertSchema: T,
	): ZodSafeParseSuccess<output<T>> | undefined {
		const parsed = insertSchema.safeParse(req.body);

		if (!parsed.success) {
			res.status(400).json({
				errors: parsed.error.issues.map((i) => ({
					field: i.path.join("."),
					message: i.message,
				})),
			});
			return;
		}

		return parsed;
	}

	async hashPassword(password: string): Promise<string> {
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);
		return hash;
	}
}
