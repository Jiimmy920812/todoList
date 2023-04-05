<script setup>
import { useTodoList } from '@/stores/todoListData'
const utodo = useTodoList()
utodo.getData()

</script>

<template>
<div class="container">
    <h1>TODO LIST</h1>
    
  <header >
    <p>代辦事項</p>
    <input type="text" placeholder="新增" v-model="utodo.content">
    <p><input type="button" class="submit" value="新增"  @click="utodo.addArticle(utodo.content)"></p>
  </header> 
    
    
    <div class="quesList" v-for="value in utodo.quesArr" >
    
    <div class="list">  
      <p class="text">{{value.content}}</p>
      <button class="delet" @click="utodo.deleteArticle(value.id)">delet</button>
      <button class="edit" @click="utodo.updateArticle(value.id,utodo.content)">edit</button>
    </div>
    </div>
</div>

</template>

<style scoped lang="scss"> 

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}


header{
  width: 20vw;
  display: flex;
  gap: 10px;
  height: 30px;
  align-items: center;
  justify-content: space-around;
}



.quesList{
    margin-top: 20px;
}

.list{
  width: 20vw;
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  .text{
    flex: 5;
    background-color:  rgb(213, 213, 213,0.4);
    padding: 2px;
    padding-left: 10px;
  }
.delet{
  flex: 1;
}
.edit{
  flex: 1;
}


}







</style>
