const db = require("../db");

const bcrypt = require("bcrypt");


// REGISTER

exports.register = async (req, res) => {


    try {


        const {
            name,
            email,
            password
        } = req.body;



        const hashPassword =
            await bcrypt.hash(password, 10);



        const user =
            await db.query(

                "INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING *",

                [
                    name,
                    email,
                    hashPassword
                ]

            );



        res.status(201).json({

            message: "User Registered",

            user: user.rows[0]

        });



    } catch (error) {


        res.status(500).json({

            message: error.message

        });


    }


}




// LOGIN


exports.login = async (req, res) => {


    try {


        const {
            email,
            password
        } = req.body;



        const user =
            await db.query(

                "SELECT * FROM users WHERE email=$1",

                [email]

            );



        if (user.rows.length === 0) {


            return res.status(404).json({

                message: "User not found"

            });


        }



        const match =
            await bcrypt.compare(

                password,

                user.rows[0].password

            );



        if (!match) {


            return res.status(401).json({

                message: "Invalid Password"

            });

        }




        res.status(200).json({

            message: "Login Success",

            user: user.rows[0]

        });




    } catch (error) {



        res.status(500).json({

            message: error.message

        });


    }



}