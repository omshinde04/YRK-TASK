const router = require("express").Router();

const {
    addContact
} = require("../controllers/contactController");


router.post("/", addContact);


module.exports = router;