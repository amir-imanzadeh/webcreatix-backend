import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
    host: process.env.DATABACE_INFO_HOST,
    port: process.env.DATABACE_INFO_PORT,
    user: process.env.DATABACE_INFO_USER,
    password: process.env.DATABACE_INFO_PASSWORD,
    database: process.env.DATABACE_INFO_DATABACE
});

export default async function databaseProcess(processCommand){
    const result = await pool.query(`${code}`)
}
export const result = await pool.query(`
    INSERT INTO users(username,email,password_hash)
    VALUES('test2','test2@gmail.com','Test1234')
    `);
