//@ts-check
import express from "express";
import { ConnectDB } from "./db/db.js";
import { Booking } from "./db/models/booking.js";
import { Admins } from "./db/models/admin.js";
import cors from 'cors';
import path from "path";
const staticFolderPath = path.join(new URL('.', import.meta.url).pathname);

const app = express();
app.use(express.json(), cors(), express.static("./dist"));

app.post('/api/booking', async (req, res) => {
    try {
        const booking = new Booking(req.body);
        const result = await booking.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { email, pass } = req.body;
        if (!email || !pass) {
            return res.status(400).send({ message: "Invalid Email Or Password" })
        }
        const data = await Admins.findOne({ email, password: pass });
        res.status(200).json({ message: "Login Successful", email: data?.email });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get("*", (req, res) => {
    const indexFile = path.join(staticFolderPath, "dist", "index.html");
    res.sendFile(indexFile);
});


ConnectDB().then(() => {
    app.listen(8000, () => {
        console.log("app start On 8000");
    });
}).catch((e) => {
    console.log(e);
});