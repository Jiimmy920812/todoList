<template>
    <div class="changePasswordbox">
        <div class="title">
            <p>變更密碼</p>
            <div class="line"></div>
        </div>
        <div class="personalbox">
            <div class="icon avatar"></div>
            <div class="text_ground1">
                <p>工程部</p>
                <p>juster5384</p>
            </div>
        </div>
        <div class="Inputboxs">
            <label class="border">
                <div class="icon icon_person"></div>
                <input class="text_input" type="text" placeholder="身分證字號" />
            </label>
            <label class="border">
                <div class="icon icon_password"></div>
                <input class="text_input" type="password" placeholder="新密碼" />
            </label>
            <label class="border">
                <div class="icon icon_password"></div>
                <input class="text_input" type="password" placeholder="確認新密碼" />
            </label>
        </div>
        <div class="buttonbox">
            <button class="btn_cancel">
                <div class="icon icon_cancel"></div>取消
            </button>
            <button class="btn_send">
                <div class="icon icon_send"></div>送出
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.changePasswordbox {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 280px;
    height: 370px;
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
            margin-left: 70px;
            max-width: 60%;
        }
    }
    .personalbox{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        width: 250px;
        margin-top: 10px;
        .avatar{
            display: flex;
            flex-direction: column;
            height: 60px;
            width: 60px;
            // background-image: url(../assets/icon/male.svg);
            background-image: url("./icon/female.svg");
            margin-right: 10px;
        }
    }
    
    .Inputboxs {
        margin-top: 30px;

        .border {
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

        .text_input input[type="password"] {
            width: 180px;
            height: 35px;
            background-color: transparent;
            border: none;
            outline: none;
            font-size: 20px;
            color: var(--color2);

            &:active {
                border: none;
                outline: none;
            }
        }

        .icon {
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            margin-right: 10px;
        }

        .icon_person {
            width: 30px;
            height: 25px;
            background-image: url(../assets/icon/person.svg);
        }

        .icon_password {
            width: 30px;
            height: 20px;
            background-image: url(../assets/icon/password.svg);
        }
    }

    .buttonbox {
        display: flex;
        margin-top: 30px;
        margin-bottom: 30px;
    }

}
</style>