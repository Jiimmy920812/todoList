<template>
    <div class="notificationbox">
        <div class="title">
            <p>你的通知</p>
            <div class="line"></div>
        </div>

        <div class="messagebox">
            <div class="icon avatar"></div>
            <div class="text_ground1">
                <p>juster1584</p>
                <p>在你的問題留言</p>
            </div>
            <div>
                <p>標籤位置</p>
                <p>時間位置</p>
            </div>
            
        </div>
        <div class="messageline"></div>
    </div>
</template>

<style lang="scss" scoped>
.notificationbox {
    width: 400px;
    height: 375px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 1px -1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;

    .title {
        width: 370px;
        height: 30px;
        top: 15px;
        //字體顏色(之後抽離)
        font-family: 'Quicksand';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 31px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #00254E;

        .line {
            margin-left: 25px;
            max-width: 95%;
        }
    }

    .messagebox {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 75px;
        width: 370px;
        margin-top: 10px;
        .avatar{
            height: 60px;
            width: 60px;
            // background-image: url(../assets/icon/male.svg);
            background-image: url("./icon/female.svg");
            margin-right: 10px;
        }

        .text_ground1 {
            flex: auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-end
        }
        .messageline{
            z-index: 10;
            width: 10px;
            height: 10px;
            background-color: #AFAFAF;
        }
    }
}
</style>