const Express = require('express');
const userRouter = Express.Router();

userRouter.get("/greet-user", (req, res) => {
    res.send("Hello User\n");
});

userRouter.post("/user-login", (req, res) => {
    res.send("Login successfully\n");
});

module.exports = userRouter;