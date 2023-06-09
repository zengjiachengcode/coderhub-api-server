const KoaRouter = require("@koa/router");
const { create, remove, getMomentList, getMomentByID } = require("../controller/moment.controller");
const { verifyIsLogin, verifyPermission } = require("../middleware/auth.middleware");

const momentRouter = new KoaRouter({ prefix: "/moment" });

// 创建动态
momentRouter.post("/", verifyIsLogin, create);
// 动态列表
momentRouter.get("/", getMomentList);
// 动态详情
momentRouter.get("/:momentId", getMomentByID);
// 删除动态（params参数必须是：表名+Id）
momentRouter.delete("/:momentId", verifyIsLogin, verifyPermission, remove);

module.exports = momentRouter;
