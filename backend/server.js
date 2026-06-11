const express = require("express");
const cors = require("cors");
require("dotenv").config();


const app = express();


app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));


app.use(express.json());



app.get("/", (req, res) => {

    res.send("API Running");

});

app.use(

    "/auth/google",

    require("./routes/googleRoutes")

);

app.use(
    "/api/home",
    require("./routes/homeRoutes")
);


app.use(
    "/api/auth",
    require("./routes/authRoutes")
);


app.use(
    "/api/contact",
    require("./routes/contactRoutes")
);



const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

    console.log(`Server started on port ${PORT}`);

});