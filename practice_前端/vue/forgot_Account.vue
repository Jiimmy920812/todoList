<template>
    <div class="forgotAccountbox">
        <div class="title">
            <p>忘記帳號</p>
        </div>
        <p>請撥打分機3685通知管理員。</p>
    </div>
</template>


<style lang="scss" scoped>
.forgotAccountbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 265px;
    height: 75px;
    background: #FFFFFF;
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 1px -1px 4px rgba(0, 0, 0, 0.25);
    box-shadow: -4px -4px 12px rgba(255, 255, 255, 0.5), 4px 4px 12px rgba(0, 0, 0, 0.11);
    border-radius: 15px;
    .title{
        width: 245px;
        height: 30px;
        background: #E4E4E4;
        //字體顏色(之後抽離)
        font-size: 16px;
        line-height: 31px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #00254E;
    }
    
}
</style>