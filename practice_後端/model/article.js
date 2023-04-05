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
    //data轉陣列，再藉由map重組
    let list = [data].map(v=> [v.name,v.title,v.content])
    //sql語法>>>> ('sql指令 value ?', ["111","222","333"])  === ('sql指令 value(111","222","333)')
    const [rows] = await con.query('INSERT INTO posts(name,title,content) VALUES ?',[list]);
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
    const [rows] = await con.query
         (`
        UPDATE posts 
        SET name= '${data.name}', title='${data.title}', content='${data.content}' 
        WHERE id='${data.id}'`
         );
    try{
        if (!rows.affectedRows) throw "文章更新失敗";
        return response(true, `updateSQL success`, rows);
    } catch (error) {
        return response(false, error);
    }
}
  
  
   

