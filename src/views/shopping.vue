<script>

export default {
    mounted() {
        fetch('./src/assets/json/MOCK_DATA.json')
            .then(response => response.json())
            .then(data => {
                // 將從 API 獲取的數據設置到 items 中
                this.shopList = data;
            })
            .catch(error => {
                console.error('發生錯誤:', error);
            });

    },
    data() {
        return {
            count: 0,
            shopList: [],
            itemSwitch: 'show1',
            pic: 0,
            productDB: [],
        }
    },
    methods: {
        addProductPic() {
            this.pic++
        },
        removeProductPic() {
            if (this.pic > 0) {
                this.pic--
            }
        },
        toCart(item) {
            let Pid = 0;
            if (this.productDB.length !== 0) {
                Pid = this.productDB[this.productDB.length - 1].Pid;
            }
            const addCart = {
                Pid: Pid+1,
                name: item.name,
                price: item.price,
                checked: false,
            }
            this.productDB.push(addCart)
            console.log(this.productDB);

            localStorage.setItem('cart', JSON.stringify(this.productDB));
        }

    }
}
</script>

<template>
    <main>

        <!-- 標題 -->
        <h1 class=" text-3xl m-3 text-white">商品列表</h1>
        <!-- 商品排列切換 -->
        <div v-if="itemSwitch === 'show1'">
            <div class="flex gap-3 justify-end mr-9">
                <img src="../assets/image/iconl_0.png" alt="" @click=" itemSwitch = 'show1'">
                <img src="../assets/image/iconr_0.png" alt="" @click=" itemSwitch = 'show2'">
            </div>
            <!-- 商品show -->
            <div class=" w-auto h-auto ">
                <!-- 商品小卡片 -->
                <div class="flex gap-5 flex-wrap justify-center p-8">
                    <div v-for="(item, index) in shopList" :key="item.id"
                        class=" w-1/6 h-auto bg-white border-2 rounded-2xl">
                        <img class="p-1" src="../assets/image/300x300_0.png" alt="圖片">
                        <div class="p-3 h-[180px]">
                            <div>{{ item.name }}</div>
                            <div>{{ item.description }}</div>
                            <div>價格: {{ item.price }}</div>
                        </div>
                        <div class="flex gap-5">
                            <div class="flex">
                                數量:
                            </div>
                            <div class="flex mb-5 p-1">
                                <button type="button" @click=" item.quantity > 1 ? item.quantity-- : 0"
                                    class="rounded-l-xl bg-white w-[20px] h-[20px] border-2 border-black text-center pb-6">-</button>
                                <input type="number" :value="item.quantity"
                                    class="w-[50px] border-2 border-black h-[28px] text-center ">
                                <button type="button" @click=" item.quantity++"
                                    class="rounded-r-xl bg-white w-[20px] h-[20px] border-2 border-black pb-6">+</button>
                            </div>
                        </div>
                        <div class="bg-blue-950 flex justify-center rounded-b-lg p-2">
                            <img src="../assets/image/shoppingcar.svg" alt="">
                            <button class="text-white" @click="toCart(item)"> 加入購物車 </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="flex gap-3 justify-end mr-9">
                <img src="../assets/image/iconl_1.png" alt="" @click=" itemSwitch = 'show1'">
                <img src="../assets/image/iconr_1.png" alt="" @click=" itemSwitch = 'show2'">
            </div>
            <div class=" w-auto h-auto pt-8 px-28">
                <div class="bg-white grid grid-cols-6 border-y-2 p-2 rounded-2xl mb-2">
                    <div class="flex justify-center">商品圖片</div>
                    <div class="flex justify-center">商品名稱</div>
                    <div class="flex justify-center">商品描述</div>
                    <div class="flex justify-center">價錢</div>
                    <div></div>
                    <div></div>
                </div>
                <div v-for="(item, index) in shopList" :key="item.id"
                    class="bg-white grid grid-cols-6 rounded-2xl mb-2">
                    <div class="flex justify-center items-center p-6">
                        <img src="../assets/image/300x300_1.png" alt="">
                    </div>
                    <div class="flex justify-center items-center">{{ item.name }}</div>
                    <div class="flex justify-center items-center">{{ item.description }}</div>
                    <div class="flex justify-center items-center">{{ item.price }}</div>
                    <div></div>
                    <div class="flex gap-5 items-center">
                        <div>
                            <div class="flex  p-1 justify-center items-center">
                                <button type="button"
                                    class="rounded-l-xl bg-white w-[20px] h-[20px] border-2 border-black text-center pb-6">-</button>
                                <input type="number" class="w-[50px] border-2 border-black h-[28px] text-center "
                                    value="1">{{ quantity }}
                                <button type="button"
                                    class="rounded-r-xl bg-white w-[20px] h-[20px] border-2 border-black pb-6">+</button>
                            </div>
                            <div class="flex  p-2 justify-center items-center bg-blue-950 rounded-3xl px-6">
                                <img src="../assets/image/shoppingcar.svg" alt="">
                                <div class="text-white b"> 加入購物車 </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </main>
</template>
