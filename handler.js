const Person = {
    name: "Asta",
    Age: 15,
    Magic: false,
};

function sendJSONPerson(req, res) {
    res.json(Person);
};

module.exports = sendJSONPerson;