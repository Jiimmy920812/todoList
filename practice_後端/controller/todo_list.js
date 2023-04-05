const aticle = require("../model/article");
const {response} = require('../model/tool/serverFormula');

exports.getData = async (req, res) => {
    try {
      const data = await aticle.getSQL()
      if (!data.statement) throw "資料拿取失敗"
      res.json(response(true, "資料拿取成功", data));
      return;
    } catch (error) {
      res.json(response(false, "資料拿取失敗",null));
      return;
    }
  };


exports.addArticle = async (req, res) => {
const data = req.body
console.log("|front|addArticle|",data)
try {
    const ans = await aticle.addSQL(data);
    if (!ans.statement) throw "創建文章失敗";
      console.log(ans);
      res.json(response(true, "創建文章成功", ans.data));
  } catch (error) {
        res.json(response(false, error));
  }
};


exports.deletArticle = async (req, res) => {
  const data = req.body
  console.log("|front|deletArticle|",data)
  try {
      const ans = await aticle.deletSQL(data);
      if (!ans.statement) throw "刪除文章失敗";
        console.log(ans);
        res.json(response(true, "刪除文章成功", ans.data));
    } catch (error) {
          res.json(response(false, error));
    }
  };

  exports.updateArticle = async (req, res) => {
    const data = req.body
    console.log("|front|updateArticle|",data)
    try {
        const ans = await aticle.updateSQL(data);
        if (!ans.statement) throw "更新文章失敗";
          console.log(ans);
          res.json(response(true, "更新文章成功", ans.data));
      } catch (error) {
            res.json(response(false, error));
      }
    };
  















// function selectAllSql(req,res){
//     let selectSql = `SELECT * FROM blog.posts;`;
//     let promise = new Promise((resolve, reject) => {
//         sql.query(
//             selectSql, function (err, result) {
//                 if (err) {
//                     console.log('[SELECT ERROR] - ', err.message);
//                     return;
//                 };
//                 console.log('資料庫資料:',result);
//                 resolve(result);
//             });
//     })
//     promise.then((list) => {
//         let listData = [];
//         for(let i = 0; i < list.length; i++){
//             let data = {
//                 id:false,
//                 body:{},
//             };
//             data.id = list[i].id;
//             data.body.name = list[i].name;
//             data.body.title = list[i].title;
//             data.body.content = list[i].content;
//             listData.push(data);
//         }
//         res.json(listData);
//     });
// }
// //建立文章
// function todo_listAddArticle(req,res){
//     console.log(req.body);
//     let { name, title, content } = req.body;
//     console.log(name, title, content);
    
//     //加資料進SQL
//     let addSql = `INSERT INTO posts(name,title,content) VALUES('${name}','${title}', '${content}')`;

//     let promise = new Promise((resolve, reject) => {
//         sql.query(
//             addSql, function (err, result) {
//                 if (err) {
//                     console.log('[SELECT ERROR] - ', err.message);
//                     return;
//                 };
//                 resolve(result);
//             });
//     })
//     promise.then((result) => {
//         console.log(result);
//         const list = {
//             id: result.insertId,
//             body: req.body
//         }
//         console.log('新增資料:',list);
//         res.json(list);
//     });
// }

// function deleteArticle(req,res){
//     const id = req.body.id
//     let deleteSql = 'SELECT * FROM `posts` WHERE `id` = ?';
//     let promise = new Promise((resolve, reject) => {
//         sql.query(
//             deleteSql,[id], function (err, result) {
//                 if (err) {
//                     console.log('[SELECT ERROR] - ', err.message);
//                     return;
//                 }
//                 if (result.length !== 1) return res.json(false);
//                 if (result.length === 1) resolve(id);
//             })
//     })
//     promise.then((id) => {
//         let deleteSql = `DELETE FROM posts WHERE id = ${id} `;
//         sql.query(
//             deleteSql, function (err, result) {
//                 if (err) {
//                     console.log('[SELECT ERROR] - ', err.message);
//                     return;
//                 }
//                 res.json(true);
//             })
//     });
// }

// function correctArticle(req,res){
//     const { id, name, title, content } = req.body;
//     console.log(id, name, title, content);

//     let correctSql = 'SELECT * FROM `posts` WHERE `id` = ?';
//     let promise = new Promise((resolve, reject) => {
//         sql.query(
//             correctSql,[id], function (err, result) {
//                 if (err) {
//                     console.log('[SELECT ERROR] - ', err.message);
//                     return;
//                 }
//                 console.log(result);
//                 resolve(result);
//             });
//     });
//     promise.then((result) => {
//         const list = {
//             id: result[0].id,
//             name: result[0].name,
//             title: result[0].title,
//             content: result[0].content
//         }
//         res.json(list);
//     });
// }

// function sureCorrect(req,res){
//     const { id, name, title, content } = req.body;
//     let updateData = `UPDATE posts SET name= '${name}', title='${title}', content='${content}' WHERE id='${id}'`;

//     let promise = new Promise((resolve, reject) => {
//         sql.query(
//             updateData, function (err, result) {
//                 if (err) {
//                     console.log('[SELECT ERROR] - ', err.message);
//                     return;
//                 }
//                 if (result.affectedRows === 1) {
//                     resolve({ id, body: { name, title, content } });
//                 } else (console.log('修正錯誤，請重新確認'));
//             });
//     });

//     promise.then((result) => {
//         console.log('回傳修正資料: ', result);
//         res.json(result);
//     });
// }

// module.exports = {
//     selectAllSql,
//     todo_listAddArticle,
//     deleteArticle,
//     correctArticle,
//     sureCorrect
// }