function logger(req, res, next) {
    req.name = "Geraldo";
    console.log("LOGGED");
    next();
}

module.exports = logger;