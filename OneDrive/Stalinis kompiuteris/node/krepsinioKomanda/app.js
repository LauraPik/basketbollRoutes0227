const express = require('express');

const router = express.Router();

const app = express();

app.use(express.json());

const morgan = require('morgan');
const playersRoutes = require('./routes/basketballRoutes');
const userRoutes = require('./routes/userRoutes');
app.use(morgan('dev'));

app.use("/api/v1/players", playersRoutes);

app.use("/api/v1/users", userRoutes);



module.exports = app;