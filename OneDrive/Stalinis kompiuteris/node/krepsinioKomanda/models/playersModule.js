const mongoose = require("mongoose");

const PlayersSchema = new mongoose.Schema({
  firstname: {
    // Vardas ir pavardė turi būti sudaryti bent iš 2 simbolių ir leidžiamos tik raidės bei tarpai.
    type: String,
    required: [true, "Player should have a name"],
    minLength: [2, "Name requires to consist of two characters."],
    trim: true,
    match: /^[a-zA-Z]+$/,
  },
  lastname: {
    type: String,
    required: [true, "Player must have a lastname"],
    minLength: [2, "Lastname requires to consist of two characters."],
    trim: true,
    match: /^[a-zA-Z]+$/,
  },
  team: {
    type: String,
    required: [true, "Player must have a team"],
    trim: true,
  },
  age: {
    type: Number,
    required: [true, "Player must have a team"],
    min: 18,
    max: 40,
  },
  ranking: {
    type: String,
    required: [true, "Player must have rating"],
    enum: {
      values: ["1", "2", "3", "4", "5"],
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Players = mongoose.model("Players", PlayersSchema);

module.exports = Players;