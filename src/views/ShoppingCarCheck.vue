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
        <h1 class=" text-3xl m-3 text-white mb-5">購買確認及填寫資訊</h1>
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
            <div class="bg-white grid grid-cols-6 gap-x-5 p-6 border-y-2 border-y-black rounded-lg m-4">
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
                    1pic
                </div>
            </div>
        </div>
        <div class="w-9/12 h-[450px] m-auto bg-white flex flex-col rounded-lg">
            <div class="flex flex-col px-16 p-6">
                姓名
                <input type="text" class="border-2">
            </div>
            <div class="flex flex-col px-16 p-6">
                電話
                <input type="text" class="border-2">
            </div>
            <div class="flex flex-col px-16 p-6">
                地址
                <input type="text" class="border-2">
            </div>
            <div class="px-16 py-4">
                <div>
                    付款方式
                </div>
                <div>
                    <input type="radio" name="buy">
                    信用卡
                    <input type="radio" name="buy">
                    貨到付款
                </div>
            </div>
            <div class="px-16">
                <div>
                    運送方式
                </div>
                <div>
                    <input type="radio" name="gogoro">
                    宅配
                    <input type="radio" name="gogoro">
                    超商取貨
                </div>
            </div>
            <div class="bg-white flex justify-between  font-bold p-8 ">
                <div class="bg-orange-400 rounded-xl p-2">
                    <RouterLink to="/shoppingCar">回上頁繼續購買</RouterLink>
                </div>
                <div class="bg-slate-400 rounded-xl p-2">
                    <RouterLink to="/buysuccess">確認購買</RouterLink>
                </div>
            </div>
        </div>
    </main>
</template>
