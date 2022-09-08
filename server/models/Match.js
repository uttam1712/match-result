const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema(
    {
        team1: String,
        team2: String,
        winner: String,
        date: Date,
        imageUrl: String
    },
    { timestamps: true, versionKey: false }
);

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
