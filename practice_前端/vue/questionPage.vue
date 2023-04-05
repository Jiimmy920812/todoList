<template>
<div class="container">
    <div class="topic_header">
        <div class="avatar_text">
            <div class="icon avatar"></div>
            <div class="text_ground1">
                <p>部門:工程部</p>
                <p>帳號:juster5384</p>
            </div>
        </div> 
            <div class="text_ground2">
                <p>分機:3587</p>
            </div>
    </div>
    <div class="line"></div>
</div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .icon{
        width: 35px;
        height: 35px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }


    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .topic_header{
        width: 80vw;
        display: flex;
        position: relative;
        .avatar_text{
            display: flex;
        }
        .avatar{
            // background-image: url(../assets/icon/male.svg);
            background-image: url(./icon/female.svg);
            margin-right: 10px;
        }
        .text_ground2{ 
         position: absolute;
         right: 10px;
         bottom: 2px;
        }
    }
 .line{
    width: 80vw;
 }
</style>