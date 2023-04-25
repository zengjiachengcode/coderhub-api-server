const connectPool = require("../app/connectPool");

class commentDB {
  async create(user_id, moment_id, content) {
    const statement = "insert into comment (user_id,moment_id,content) values (?, ?, ?);";
    const res = await connectPool.execute(statement, [user_id, moment_id, content]);
    return res[0];
  }
  async reply(user_id, moment_id, content, comment_id) {
    const statement =
      "insert into comment (user_id,moment_id,content,comment_id) values (?, ?, ?, ?);";
    const res = await connectPool.execute(statement, [user_id, moment_id, content, comment_id]);
    return res[0];
  }
  // 通过内容id获取评论
  async getCommentByMomentId(moment_id) {
    const statement = `select m.id id,m.content content,m.comment_id commentId,m.createAt createAt,
      JSON_OBJECT("id",u.id ,"nickname",u.nickname) user
      from comment m left join user u 
      on m.user_id = u.id 
      where moment_id = ?;`;
    const [values] = await connectPool.execute(statement, [moment_id]);
    return values;
  }
}

module.exports = new commentDB();
