import { defineStore } from 'pinia'
import  fetchAPI   from "./fetchTool"

let url ="http://172.20.10.2:3000/api"

export const useTodoList = defineStore({
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
           await fetchAPI.fetchAPI_Get(url,"/todoList")
           .then((res) => {
                if(!res.statement) throw "資料拿取失敗"
                this.quesArr = res.data.data
                return
            })
            }catch(err){
                console.log("資料庫裡沒資料");
                return
            }
    },
    async addArticle(content) {
        let data={
            "content":content,
        }
        await fetchAPI.fetchAPI_Post(url,"/todoList",data)
        .then((res) => {console.log(res); })

         this.getData()
    },
    
    async deleteArticle(id) {
        let data={id}
        await fetchAPI.fetchAPI_Delete(url,"/todoList",data)
        .then((res) => {console.log(res); })

        this.getData()

    },

    async updateArticle(id,content) {
        let data={
            "id":id,
            "content":content,
        }
        await fetchAPI.fetchAPI_Put(url,"/todoList",data)
        .then((res) => {console.log(res); })
        
        this.getData()

    },



 }
})
