const { contacts } = require('../../data/contacts');
const router = require('express').Router();


router.post('/contact', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = contacts.length.toString();

    // add contact object to json file and contacts array in this function
    const contactObj = createNewContactObj(req.body, contacts);
    res.json(contactObj);
});


module.exports = router;