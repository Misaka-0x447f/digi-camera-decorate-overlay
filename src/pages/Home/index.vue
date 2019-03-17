<template lang="pug">
  div.root
    div.container
      div.block
        div.subBlock
          term
        div.subBlock.right
          timer
          div {{e("streaming")}}
      div.block
        div.subBlock
        div.subBlock.right.bottom
</template>
<style lang="stylus" scoped>
  .block
    display flex
    text-align left
  .subBlock
    flex 1
  .subBlock.right
    justify-content flex-end
  .subBlock.right.bottom
    align-items flex-end
  
  .right
    text-align: right;
</style>
<script lang="ts">
  import Vue from "vue";
  import say from "@/utils/i18n";
  import timer from "@/components/AutoTimer.vue";
  import term from "@/components/Terminal.vue";
  
  export default Vue.extend({
    name: "home",
    components: {
      timer,
      term
    },
    data: () => {
      return {
        e: say
      };
    }
  });
</script>
