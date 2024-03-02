<script >

import CountAdd from '@/components/CountAdd.vue';

export default {
  components: {
    CountAdd,
  },
  mounted() {
    // fetch 拿取資料放進 data宣告變數內
  },
  computed: {
    //我的搜尋框輸入後顯示 進行篩選
  },

  data() {
    return {
      add: 0,
    }
  },
  methods: {
    changeAdd(e) {
      this.add = e;
    }
  },


}
</script>

<template>
  <main>
    {{ add }}
    <CountAdd :button-text="'按我'" :button-num="50" @submit="changeAdd"></CountAdd>
  </main>
</template>
