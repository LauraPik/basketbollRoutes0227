const app = require('./app');
// Ši eilutė įtraukia Node.js paketą, pavadintą dotenv
const dotenv = require('dotenv');
// Kiekvienas kintamasis, apibrėžtas .env faile, bus įkeltas kaip aplinkos kintamasis jūsų Node.js programoje.
dotenv.config({path:'./config.env'});
const mongoose = require('mongoose');


const port = process.env.PORT;

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB)
.then(con=>{
  console.log("Connected to DATABASE")
}).catch((err) => {
  console.error('erroras',err);
});

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})