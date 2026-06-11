const db = require("../db");


exports.addContact = async (req, res) => {


    try {


        const {
            name, email, subject, message
        } = req.body;



        await db.query(

            "INSERT INTO contacts(name,email,subject,message) VALUES($1,$2,$3,$4)",

            [
                name,
                email,
                subject,
                message
            ]

        );



        res.status(201).json({

            message: "Inserted"

        })


    }

    catch (err) {


        res.status(500).json({

            message: err.message

        })


    }


}