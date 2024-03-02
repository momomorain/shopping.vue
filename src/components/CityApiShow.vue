<script >


export default {

    props: {
        buttonText: {
            type: String,
        },
    },
    data() {
        return {
            inputValue: '',
            items: []

        }
    },
    computed: {
        filterData() {
            console.log(this.items);
            return this.items.filter(list => list.city.includes(this.inputValue));
            //     return element.city.filter(item => item.includes(this.inputValue));
            // this.items.forEach(element => {
            // });
        }
        //我的搜尋框輸入後顯示 進行篩選

    },
    mounted() {
        // 使用 fetch 來獲取數據
        fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
            .then(response => response.json())
            .then(data => {
                // 將從 API 獲取的數據設置到 items 中
                this.items = data;
            })
            .catch(error => {
                console.error('發生錯誤:', error);
            });

        // fetch 拿取資料放進 data宣告變數內
    },

    methods: {

    },

};



</script>

<template >
    <main>
        <div v-if="!inputValue" class="big-box h-auto">
            <div class="grid-flow-col flex justify-center items-start ">
                <div class="grid-flow-col">
                    <input v-model="inputValue" type="text" class="mt-20 w-[400px] h-[75px] border-8 border-black">
                    <div>
                        <h1>{{ inputValue }}</h1>
                        <ul class="divide-y divide-gray-200">
                            <li v-for="(item, index) in filterData" :key="index" class="py-4">{{ item.city }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="big-box h-[97.5vh]">
            <div class="grid-flow-col flex justify-center items-start ">
                <div class="grid-flow-col">
                    <input v-model="inputValue" type="text" class="mt-20 w-[400px] h-[75px] border-8 border-black">
                    <div>
                        <h1>{{ inputValue }}</h1>
                        <ul class="divide-y divide-gray-200">
                            <li v-for="item in filterData" :key="item.id" class="py-4">{{ item.city }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.big-box {
    @apply bg-yellow-500 w-full ;
}
</style>
