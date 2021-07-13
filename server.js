const express=require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

//ensures that everything goes back to index.html
//critical for SPA's
app.get("/*",(req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 4200, () => console.log("Server running..."));