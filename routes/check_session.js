/*------------------------------------------------
  セッションチェック
-------------------------------------------------*/
module.exports = function(req , res, next) {
  var passport = require("./../index").passport
  if(passport.session && passport.session.id) {
    next();
  } else {
    console.log("セッションチェックに失敗したようです。");
    res.send('ng');
  }
}