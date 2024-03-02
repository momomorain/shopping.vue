<script>

export default {
    data() {
        return {
            count: 0,
        }
    }
}
</script>

<template>
    <main>
        <!-- 標題 -->
        <h1 class=" text-3xl m-3 text-white mb-5">購物車確認</h1>
        <!-- 欄位 -->
        <div class="  w-9/12 h-auto m-auto ">
            <div class="bg-white flex grid-rows-3 gap-80">
                <!-- <div></div>
                <div>商品圖片</div>
                <div>商品名稱</div>
                <div>價錢</div> -->
                <div class="grid grid-cols-6 gap-5">
                    <div class="flex justify-center items-center">
                        <input type="checkbox">
                    </div>
                    <div>
                        <img src="../assets/image/300x300_1.png" alt="" class="w-[100px] h-[100px]">
                    </div>
                    <div class="flex justify-center items-center">
                        Bytecard
                    </div>
                    <div class="flex justify-center items-center">
                        
                    </div>
                    <div class="flex justify-center items-center">
                        $954
                    </div>
                    <div class="flex justify-center items-center">
                        <div class="flex mb-5 p-1">
                            <button type="button"
                                class="rounded-l-xl bg-white w-[20px] h-[20px] border-2 border-black text-center">-</button>
                            <input type="number" class="w-[50px] border-2 border-black h-[20px]">
                            <button type="button"
                                class="rounded-r-xl bg-white w-[20px] h-[20px] border-2 border-black ">+</button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

            </div>


            <!-- input -->
            <!-- 圖片 -->
            <!-- 商品名稱 -->
            <!-- 價錢 -->
            <!-- 按鈕 -->

        </div>



    </main>
</template>
