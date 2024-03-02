<script >

import CityApiShow from '@/components/CityApiShow.vue';

export default {
    components: {
        CityApiShow,
    },
    computed: {
        //我的搜尋框輸入後顯示 進行篩選
    },
    mounted() {
        // fetch 拿取資料放進 data宣告變數內
    },

    data() {
        return {

        }
    },
    methods: {

    },


}
</script>

<template >
    <main>
        <CityApiShow></CityApiShow>
    </main>
</template>

<style scoped>

.big-box {
    @apply bg-yellow-500 w-full h-[96.5vh];
}


</style>
