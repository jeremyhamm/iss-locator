<template>
  <div class="row mt-3">
    <div class="col-12 d-inline-flex">
      <div @click="toggleHistory()" class="icon mr-3" :class="{'on' : history}"></div> Show Map
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Toggle',
    data () {
      return {
        history: false
      }
    },
    methods: {
      toggleHistory () {
        this.history = !this.history;
        this.$store.commit('setHistoryMode', this.history);
      }
    }
  }
</script>