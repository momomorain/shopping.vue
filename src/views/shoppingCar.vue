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
            <div class="bg-white grid grid-cols-6 gap-x-5 p-6 border-y-2 border-y-black rounded-lg m-4">
                <div class="flex justify-center items-center">
                    <input type="checkbox">
                </div>
                <div class="flex justify-center items-center">
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
                    <div>

                    </div>
                </div>
            </div>
        </div>
        <div class="  w-9/12 h-auto m-auto ">
            <div class="bg-white grid grid-cols-6 gap-x-5 p-6 border-y-2 border-y-black rounded-lg m-4">
                <div class="flex justify-center items-center">
                    <input type="checkbox">
                </div>
                <div class="flex justify-center items-center">
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
                    <div>

                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white  justify-end grid pr-10 font-bold p-4">
            <div>
                商品數量:0
            </div>
            <div>
                商品總金額:$100
            </div>
        </div>
        <div class="bg-white flex justify-between  font-bold p-8 ">
            <div class="bg-orange-400 rounded-xl p-2">
                <RouterLink to="/shopping">回上頁繼續購買</RouterLink>
            </div>
            <div class="bg-slate-400 rounded-xl p-2">
                <RouterLink to="/shoppingCarCheck">確認購買</RouterLink>
            </div>
        </div>



    </main>
</template>
