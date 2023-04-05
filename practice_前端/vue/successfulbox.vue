<!--提示錯誤的方塊-->
<template lang="">
    <div class="successfulbox">
        <div class="icon"></div>
        <p>變更密碼成功</p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.successfulbox {
    position: relative;
    width: 370px;
    height: 250px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 1px -1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    .icon{
        background-image: url("./icon/check.svg");
        position: absolute;
        top: 45px;
        left: 125px;
        width: 120px;
        height: 120px;
    }

    p {
        position: absolute;
        left: 25%;
        right: 25%;
        top: 70%;
        bottom: 20%;

        font-weight: 700;
        font-size: 25px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.02em;

        color: #00254E;
    }
}
</style>