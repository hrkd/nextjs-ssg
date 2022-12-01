const protect = require('static-auth');
const safeCompare = require('safe-compare');

const USER_NAME = process.env.USER_NAME || 'id'; // プロジェクトの環境変数を設定していた場合はそちらを適用させる
const PASSWORD = process.env.PASSWORD || 'pw';

const app = protect(
  '/',
  (username, password) => safeCompare(username, USER_NAME) && safeCompare(password, PASSWORD), // timing attack 対策
  {
    directory: `${__dirname}/build`, // 配下のファイルを静的コンテンツとして配信する
    onAuthFailed: (res) => {
      res.end('Authentication failed');
    },
  }
);

module.exports = app;
