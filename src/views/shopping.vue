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
                console.error('123發生錯誤:', error);
            });
        
    },
    data() {
        return {
            count: 0,
            shopList: [],
        }
    },
}
</script>

<template>
    <main>
        
        <!-- 標題 -->
        <h1 class=" text-3xl m-3 text-white">商品列表</h1>
        <!-- 商品排列切換 -->
        <div class="flex gap-3 justify-end mr-9">
            <img src="../assets/image/iconl_0.png" alt="">
            <img src="../assets/image/iconr_0.png" alt="">

        </div>
        <!-- 商品show -->
        <div class=" w-auto h-auto ">
            <!-- 商品小卡片 -->
            <div class="flex gap-5 flex-wrap justify-center">
                <div v-for="(item, index) in shopList" :key="item.id" class=" w-1/6 h-auto bg-white border-2 rounded-lg">
                    <img class="p-1" src="../assets/image/300x300_0.png" alt="圖片">
                    <div class="p-3 h-[180px]">
                        <div>{{ item.name}}</div>
                        <div>{{ item.description}}</div>
                        <div>價格: {{ item.price}}</div>
                    </div>
                    <div class="flex gap-5">
                        <div class="flex">
                            數量:
                        </div>
                        <div class="flex mb-5 p-1">
                            <button type="button"
                                class="rounded-l-xl bg-white w-[20px] h-[20px] border-2 border-black text-center pb-6">-</button>
                            <input type="number" class="w-[50px] border-2 border-black h-[28px] text-center " value="1">{{ quantity }}
                            <button type="button"
                                class="rounded-r-xl bg-white w-[20px] h-[20px] border-2 border-black pb-6">+</button>
                        </div>
                    </div>
                    <div class="bg-blue-950 flex justify-center rounded-b-lg p-2">
                        <img src="../assets/image/shoppingcar.svg" alt="">
                        <div class="text-white"> 加入購物車 </div>


                    </div>
                </div>


            </div>

        </div>


    </main>
</template>
