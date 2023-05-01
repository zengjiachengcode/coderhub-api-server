const KoaRouter = require("@koa/router");
const userRouter = new KoaRouter({ prefix: "/user" });
const { verifyNewUser, handlerPassowrd } = require("../middleware/user.middleware");
const { create, users } = require("../controller/user.controller");
const { isLogin } = require("../controller/login.controller");

userRouter.post("/", verifyNewUser, handlerPassowrd, create);
userRouter.get("/", isLogin, users);

module.exports = userRouter;
