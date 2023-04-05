const con = require("../data/dataBase");
const {response} = require('../model/tool/serverFormula');

exports.getSQL = async(req,res)=> {
    const [rows] = await con.query("SELECT * FROM posts ")
    console.log("|sql|allData|",rows);
    try{
        if (rows.length === 0)throw "result = 0";
        return response(true, `getSQL success`, rows);
    } catch (error) {
        return response(false, error);
    }
}

exports.addSQL = async(data)=> {
    console.log(data,'1111111111111111111');
    //data轉陣列，再藉由map重組
    let list = [data].map(v=> [v.content])
    const [rows] = await con.query('INSERT INTO posts(content) VALUES ?',[list]);
    try{
        if (!rows.affectedRows) throw "文章創建失敗";
        return response(true, `addSQL success`, rows);
    } catch (error) {
        return response(false, error);
    }
}

exports.deletSQL = async(data)=> {
    const [rows] = await con.query( `DELETE FROM posts WHERE id = ${data.id} `);
    try{
        if (!rows.affectedRows) throw "文章刪除失敗";
        return response(true, `deletSQL success`, rows);
    } catch (error) {
        return response(false, error);
    }
}

exports.updateSQL = async(data)=> {
    console.log(data,'111111111111');
    const [rows] = await con.query
         (`
        UPDATE posts 
        SET content='${data.content}' 
        WHERE id='${data.id}'`
         );
    try{
        if (!rows.affectedRows) throw "文章更新失敗";
        return response(true, `updateSQL success`, rows);
    } catch (error) {
        return response(false, error);
    }
}
  
  
   

