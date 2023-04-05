<script setup>
import { usePractice } from '@/stores/practice'
const practice = usePractice()
practice.getData()

</script>

<template>
<div class="container">
<h1>財金專欄</h1>
<form method="post" >
    <p><label for="user" >姓名</label></p>
    <p><input type="text" id="user" name="user" class="user" placeholder="你的名字" width="1500" v-model="practice.name"/></p>
    <p><label for="title">標題</label></p>
    <p><input type="text" id="title" name="title" placeholder="新增標題.." width="1500" v-model="practice.title"/></p>
    <p><label for="content">內容</label></p>
    <p><textarea type="text" name="comtent" id="content" placeholder="新增內容.." rows="8" v-model="practice.content"></textarea></p>
    <p><input type="button" class="submit" value="文章建立"  @click="practice.addArticle(practice.name,practice.title,practice.content)"></p>


</form>
    <div class="quesList" v-for="value in practice.quesArr" >
    <span class="title">{{value.name}}</span>
    <p>{{value.title}}</p>
    <p>{{value.content}}</p>
    <div class="toolcontainer">
        <div class="tool">
            <div class="delet" @click="practice.deleteArticle(value.id)">delet</div>
            <div class="edit" @click="practice.updateArticle(value.id,practice.name,practice.title,practice.content)">edit</div>
        </div>
    </div>
   
    </div>
</div>

</template>

<style scoped lang="scss"> 

.container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.title{
        background-color:rgb(112, 170, 245);
    }

.quesList{
    margin-top: 20px;
}

.quesList{
    margin-top: 20px;
}

.toolcontainer{
    .tool{
    display: flex;
    .delet{
    background-color: red;
    height: 20px;
    }
    .edit{
    height: 20px;
    background-color: blue;
    }
}
}



.toolcontainer::after {
  content: "";
  display: flex;
  height: 2px;
  background: #000;
  margin-top: 10px;
}


</style>
