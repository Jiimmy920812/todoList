<template>
    <div class="add_accountPagebox">
        <div class="title">
            <p>新增帳號</p>
        </div>
        <div class="Inputboxs">
            <div>姓名：<div><input class="borderbox" type="text"/></div></div>
            <div>性別：<div><input class="borderbox" type="text"/></div></div>
            <div>部門：<div><input class="borderbox" type="text"/></div></div>
            <div>分機：<div><input class="borderbox" type="text"/></div></div>
            <div>身分證字號：<div><input class="borderbox" type="text"/></div></div>
        </div>
        <div class="buttonbox">
            <button class="btn_clean">
                <div class="icon icon_cancel"></div>清空
            </button>
            <button class="btn_send">
                <div class="icon icon_send"></div>送出
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.add_accountPagebox {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    height: 600px;
    background: #FFFFFF;
    // border: 1px solid black;

    .title {
        width: 75vw;
        height: 30px;
        top: 15px;
        background: #E4E4E4;
        //字體顏色(之後抽離)
        font-family: 'Quicksand';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 31px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #00254E;
    }

    .Inputboxs {
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 20px;
        width: 80vw;
        height: 800px;
        
        .borderbox {
            box-sizing: border-box;
            width: 70vw;
            height: 30px;
            background: #FFFFFF;
            border: 2px solid #005B88;
            border-radius: 10px;
        }
    }& div {padding-top: 5px;padding-bottom: 5px;}
    .buttonbox{
        display: flex;
        bottom: 60px;
    }
}
</style>