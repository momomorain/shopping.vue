<script >
import CountAdd from '@/components/CountAdd.vue';
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
        <!-- <button @click="count++">按我++ {{ count }}</button> -->
        <CountAdd></CountAdd>
    </main>
</template>
