
<script setup>
   import { RouterLink} from 'vue-router'
   import { useStore } from '@/stores/dataBase'
   const dataBase = useStore()
   
</script>


<template>      
     <div class="container">
      <form name="data" @submit.prevent="dataBase.userLogin"> 
          <label class="border" >
            <div class="icon icon_person"></div>
            <input class="text_input" type="text" v-model="dataBase.username" placeholder="請輸入帳號"  />
          </label>
          <label class="border" >
            <div class="icon icon_password"></div>
            <input class="text_input" type="password"  v-model="dataBase.password" placeholder="請輸入密碼"  />
          </label>
          <div class="rember_forget">
            <div class="illustrate_ground">
              <input type="checkbox">
              <p>記住我</p>
            </div>
            <div class="illustrate_ground">
              <p>忘記密碼</p>
              <div class="illustrate_icon"></div>
            </div>
          </div>
          <button class="btn_login" @click="$router.push('home')" >登入</button>
          <div class="illustrate_ground">
              <p>忘記帳號</p>
              <div class="illustrate_icon"></div>
          </div>
      </form>
    </div>
</template>

<style lang="scss" scoped>

.container{
  display: flex;
  justify-content: center;
  align-items: center;
}

form{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.border{
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 230px;
  height: 35px;
  border-radius: 20px;
  border: 3px solid var(--color2);
  padding-left: 10px;
  font-size: 20px;
}

.text_input{
  width: 180px;
  height: 35px;
  background-color: transparent;
  border: none;
  outline:none;
  font-size: 20px;
  color: var(--color2);
  &:active{
    border: none;
    outline:none;
  }
}

::placeholder { 
  color:var(--color-light1);
  font-weight: lighter;
  }

  .icon{
    background-position: center;
    background-repeat:no-repeat;
    background-size: contain;
    margin-right: 10px;
  }


  .icon_person{
    width: 30px;
    height: 25px;
    background-image:url(../assets/icon/person.svg);
  }

  .icon_password{
    width: 30px;
    height: 20px;
    background-image:url(../assets/icon/password.svg);
  }


  .rember_forget{
    display: flex;
    width: 220px;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
  }


  .illustrate_ground{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .illustrate_icon{
    width: 20px;
    height: 20px;
    background-image:url(../assets/icon/explain.svg);
    background-position: center;
    background-repeat:no-repeat;
    background-size: contain;
    margin-left: 5px;
  }

  .btn_login{
    margin-top: 50px;
    margin-bottom: 5px;
  }
  
</style>
