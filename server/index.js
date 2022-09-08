require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Match = require("./models/Match");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;
const path = require("path");

mongoose
    .connect(DB_URL)
    .then(() => console.log(`DB connected`))
    .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(
    "/",
    asyncHandler((req, res, next) => {
        res.send("hello");
    })
);

// get list of matches
app.get(
    "/matches",
    asyncHandler(async (req, res, next) => {
        const matches = await Match.find();

        res.status(200).json({
            success: true,
            message: "match list fetched",
            matches
        });
    })
);

// add match
app.post(
    "/matches",
    asyncHandler(async (req, res, next) => {
        console.log(req.body);
        const match = await Match.create(req.body);
        res.status(201).json({
            success: true,
            message: "match added",
            match
        });
    })
);

// get match by id
app.get(
    "/matches/:id",
    asyncHandler(async (req, res, next) => {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "please provide id"
            });
        }

        let match = await Match.findOne({ _id: id });

        if (!match) {
            return res.status(400).json({
                success: false,
                message: "Match not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "match updated",
            match
        });
    })
);

// update match
app.patch(
    "/matches/:id",
    asyncHandler(async (req, res, next) => {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "please provide id"
            });
        }

        let match = await Match.findOne({ _id: id });

        if (!match) {
            return res.status(400).json({
                success: false,
                message: "Match not found"
            });
        }

        match = await Match.findByIdAndUpdate(id, req.body, { new: true });

        res.status(201).json({
            success: true,
            message: "match updated",
            match
        });
    })
);

// delete match
app.delete(
    "/matches/:id",
    asyncHandler(async (req, res, next) => {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "please provide id"
            });
        }

        let match = await Match.findOne({ _id: id });

        if (!match) {
            return res.status(400).json({
                success: false,
                message: "Match not found"
            });
        }

        await Match.findByIdAndDelete(id);

        res.status(201).json({
            success: true,
            message: "match deleted"
        });
    })
);

app.get("*", (req, res, next) => {
    res.status(404).json({ succes: false, message: "Not found" });
});

app.use(() => {
    res.status(400).json({ succes: false, message: "something went wrong" });
});

app.listen(port, () => console.log(`Server started on port : ${port}`));
