import express from "express";
import mongoose from "mongoose";
import { urlShort, getOriginalUrl } from './controller/Url.js'


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://prithamodak04:j2PDYoAMa78GMc64@cluster0.igb5x.mongodb.net/", {
    "dbName": "Short_Url"
}).then(() => console.log("Mongodb Connected")).catch((error) => console.log(error));


app.get('/', (req, res) => {
    res.render("server.ejs", { shortUrl: null })
})

// handle url submission
app.post('/shorten', urlShort);

// redirect to original url using short url
app.get("/:shortCode", getOriginalUrl);


app.listen(port, () => console.log("Server is running on port ${port}"))