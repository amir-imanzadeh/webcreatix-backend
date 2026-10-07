import express from "express";
import databaseProcess from `./src/database-manager.js`

const app = express();

app.get("/", async (req, res) => {

    res.send(`
        <h1>WebCreatix backend</h1>
    `);
});

app.get("/database", async (req, res) => {
    const process = req.body;
    databaseProcess()
});

app.listen(4000, () => {
    console.log("program is running on port 4000");
});
