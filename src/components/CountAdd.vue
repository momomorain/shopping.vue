<script >
export default {
    props: {
        buttonText: {
            type: String,
        },
        buttonNum: {
            type: Number,
        }
    },

    emits:['submit'],

    data() {
        return {
            count: 1,
        }
    },
    methods: {
        sumNumber(){
            this.$emit('submit', this.count *= this.buttonNum)
        }

    }
}
</script>

<template>
    <main>
        <button class="text-5xl bg-sky-500" @click="sumNumber()"> {{ count }} {{ buttonText }} {{ buttonNum }}</button>
    </main>
</template>
