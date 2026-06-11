const express = require("express");

const router = express.Router();

const oauth2Client =
    require("../services/googleService");



router.get("/login", (req, res) => {


    const url =
        oauth2Client.generateAuthUrl({


            access_type: "offline",


            scope: [

                "profile",

                "email"

            ]


        });



    res.redirect(url);


});






router.get("/callback", async (req, res) => {


    try {


        const code = req.query.code;



        const { tokens } =

            await oauth2Client.getToken(code);



        oauth2Client.setCredentials(tokens);



        const oauth2 =
            require("googleapis")
                .google.oauth2({

                    version: "v2",

                    auth: oauth2Client

                });



        const userInfo =
            await oauth2.userinfo.get();




        console.log(userInfo.data);



        // after login send user back


        res.redirect(

            "http://localhost:3000"

        );



    }
    catch (error) {


        res.status(500).json({

            message: error.message

        });


    }



});



module.exports = router;