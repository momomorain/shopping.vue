<script>

export default {
    data() {
        return {
            count: 0,
            CartData: [],
        }
    },
    mounted() {
        if (localStorage.getItem('cart')) {
            this.CartData = JSON.parse(localStorage.getItem('cart'))
            console.log(this.CartData);
        }
    },
    methods: {
        removeLocalStorage(){
            localStorage.removeItem("cart");
        }
    }
}
</script>

<template>
    <main>
        <!-- 標題 -->
        <h1 class=" text-3xl m-3 text-white mb-5">完成購買</h1>
        <!-- 欄位 -->
        <div class="  w-9/12 h-auto m-auto ">
            <div class="bg-white grid grid-cols-6 gap-x-5 p-6 border-y-2 border-y-black rounded-lg m-4">
                <div class="flex justify-center items-center">
                    商品圖片
                </div>
                <div class="flex justify-center items-center">
                    商品名稱
                </div>
                <div class="flex justify-center items-center">

                </div>
                <div class="flex justify-center items-center">
                    金額
                </div>
                <div class="flex justify-center items-center">
                    數量
                </div>
            </div>
            <div v-for="(item) in CartData" :key="item.Pid" class="bg-white grid grid-cols-6 gap-x-5 p-6 border-y-2 border-y-black rounded-lg m-4">
                <div class="flex justify-center items-center">
                    <img src="../assets/image/300x300_1.png" alt="" class="w-[100px] h-[100px]">
                </div>
                <div class="flex justify-center items-center">
                    {{ item.name }}
                </div>
                <div class="flex justify-center items-center">
                </div>
                <div class="flex justify-center items-center">
                    ${{ item.price }}
                </div>
                <div class="flex justify-center items-center">
                    1pic
                </div>
            </div>
        </div>
        <div class="flex grid-cols-6  justify-around mb-8 bg-white p-10"> 
            <div>YI-SHING CHANG</div>
            <div>0979536456</div>
            <div>408213台中市南屯區嶺東路1號</div>
            <div>信用卡</div>
            <div>asd45620asd@</div>
            <div>超商取貨</div>
        </div>



        <div class="flex">
            <RouterLink to="/shopping" class="bg-orange-400 rounded-xl  p-4 text-center m-auto" @click="removeLocalStorage">回首頁</RouterLink>
        </div>









    </main>
</template>
