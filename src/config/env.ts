import { z, ZodError } from 'zod';
import dotenv from 'dotenv';
dotenv.config();

const envSchema = z.object({
    PORT: z.coerce.number(),
    DATABASE_URL: z.string(),
    JWT_SECRET: z.string()
});

export type EnvSchema = z.infer<typeof envSchema>;

function parseEnv() {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof ZodError) {
      const missing = error.issues.map((i) => i.path).join('\n');
      const e = new Error(`Missing required values in .env:\n${missing}`);
      e.stack = '';
      throw e;
    }
    throw error;
  }
}

export default parseEnv();
