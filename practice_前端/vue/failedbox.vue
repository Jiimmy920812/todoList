<!--提示正確的方塊-->
<template lang="">
    <div class="failedbox">
        <div class="icon"></div>
        <p>變更密碼失敗<br>請重新輸入</p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.failedbox {
    position: relative;
    width: 370px;
    height: 250px;
    background: #FFFFFF;
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 1px -1px 4px rgba(0, 0, 0, 0.25);
    box-shadow: -4px -4px 12px rgba(255, 255, 255, 0.5), 4px 4px 12px rgba(0, 0, 0, 0.11);
    border-radius: 15px;
    .icon{
        background-image: url("./icon/faile.svg");
        position: absolute;
        top: 45px;
        left: 125px;
        width: 120px;
        height: 120px;
    }

    p {
        position: absolute;
        left: 20%;
        right: 20%;
        top: 70%;
        bottom: 10%;

        font-weight: 700;
        font-size: 25px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.02em;

        color: #00254E;
    }
}
</style>