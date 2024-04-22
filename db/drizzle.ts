import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(process.env.DB_URI as string);
const db = drizzle(sql, { schema });

export default db;
