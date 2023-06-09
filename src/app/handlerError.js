function handlerError(code, ctx) {
  let status, msg;
  switch (code) {
    case -1001:
      msg = "参数填写不完整";
      break;
    case -1002:
      msg = "格式错误";
      break;
    case -1003:
      msg = "用户已经存在";
      break;
    case -1004:
      msg = "用户名或密码不能为空";
      break;
    case -1005:
      msg = "账号或密码错误";
      break;
    case -1006:
      msg = "无效token，请登录";
      break;
    case -1007:
      msg = "操作失败，权限不够";
      break;
    case -1008:
      msg = "邮箱已经被注册";
      break;
    case -2001:
      msg = "操作的数据不存在";
      break;
    case -2002:
      msg = "数据异常";
      break;
    case -3001:
      msg = "邮箱发送失败";
      break;
    case -3002:
      msg = "验证码无效";
      break;
    case -3003:
      msg = "验证码已过期";
      break;
    case -3004:
      msg = "邮箱错误";
      break;
    case -4001:
      msg = "图片不符合要求";
      break;
    default:
      msg = "未知错误";
  }
  ctx.body = {
    code,
    msg,
  };
}

module.exports = handlerError;
