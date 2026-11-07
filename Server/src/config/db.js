import { Pool } from "pg";
import dotenv from "dotenv"
dotenv.config()

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool
    .connect()
    .then((client) => {
        console.log("postegresql is connected!");
        client.release();
    })
    .catch((err) => {
        console.log("postegresql is not connected!", err.message);
    });

export default pool