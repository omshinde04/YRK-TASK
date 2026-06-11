const db = require("../db");


exports.getHome = async (req, res) => {


    try {


        const result =
            await db.query(
                "SELECT * FROM homepage LIMIT 1"
            )


        res.status(200).json(

            result.rows[0]

        )


    }

    catch (err) {

        res.status(500).json({

            message: err.message

        })

    }


}