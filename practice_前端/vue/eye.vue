<script>
// import { useStore } from '@/stores/dataBase'
//   const dataBase = useStore()
export default {
    data() {
        return {
            "isActive": true,
        }
    },
    methods: {
        change() {this.isActive=!this.isActive}
    }
}
</script>
<template>
    <main>
        <form>
            <div class="form-floating">
                <input :type="isActive ? 'password' : 'text'" class="form-control" id="floatingPassword"
                    placeholder="請輸入密碼">
                <i id="checkEye" :class="[isActive ? 'fa-eye' : 'fa-eye-slash' , 'fas']" @click="isActive=!isActive"></i>
                <!-- <i id="checkEye" :class="[isActive ? 'fa-eye' : 'fa-eye-slash' , 'fas']" @click="change"></i> -->
            </div>
        </form>

    </main>

</template>

<style lang="scss" scoped>
.fa-eye {
    width: 30px;
    height: 25px;
    background-image: url("../icon/fa-eye.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}

.fa-eye-slash {
    width: 30px;
    height: 25px;
    background-image: url("../icon/fa-eye-slash.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}

/*眼睛*/
#checkEye {
    position: absolute;
    width: 10vw;
}
</style>