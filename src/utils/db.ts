import pgPromise from "pg-promise";

const initOptions = {
  schema: ["public"],
};

const pgp = pgPromise(initOptions);
const dbConnectionString: string = process.env.DATABASE_URL || "";

const db = pgp(dbConnectionString);

export default db;
