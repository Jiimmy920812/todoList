import { defineStore } from 'pinia'
import  fetchAPI   from "../stores/fetchTool"

let url ="http://127.0.0.1:3000/api"

export const usePractice = defineStore({
 id:"try",
 state:()=>({
    name:"",
    title:"",
    content:"",
    quesArr:[],
 }),
 actions: {
    async getData() {
        try{
           await fetchAPI.fetchAPI_Get(url,"/getData")
           .then((res) => {
                if(!res.statement) throw "資料拿取失敗"
                console.log("|getData|",res);
                this.quesArr = res.data.data
                console.log("|backEnd|getData|",this.quesArr);
                return
            })
            }catch(err){
                console.log("資料庫裡沒資料");
                return
            }
    },
    async addArticle(name,title,content) {
        let data={
            "name":name,
            "title":title,
            "content":content,
        }
        await fetchAPI.fetchAPI_Post(url,"/addArticle",data)
        .then((res) => {console.log(res); })

         //重新fetch資料
         this.getData()
    },
    
    async deleteArticle(id) {
        console.log(id);
        let data={id}
        await fetchAPI.fetchAPI_Post(url,"/deletArticle",data)
        .then((res) => {console.log(res); })

        //重新fetch資料
        this.getData()

    },

    async updateArticle(id,name,title,content) {
        let data={
            "id":id,
            "name":name,
            "title":title,
            "content":content,
        }
        await fetchAPI.fetchAPI_Post(url,"/updateArticle",data)
        .then((res) => {console.log(res); })
        
        //重新fetch資料
        this.getData()

    },



 }
})
