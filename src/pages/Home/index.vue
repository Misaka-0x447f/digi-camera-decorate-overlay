<template lang="pug">
  div.root
    div.container
      div.block
        div.subBlock
          div
            net
            div.s {{e("cam0")}}
        div.subBlock.right
          div
            timer
            div.s {{e("streaming")}}
      div.block
        div.subBlock.bottom
          div
            div.l {{e("info")}}
        div.subBlock.right.bottom
</template>
<style lang="stylus" scoped>
  .container
    height 100%
    display flex
    flex-direction column
  .block
    flex 1
    display flex
    text-align left
  .subBlock
    display flex
    flex 1
  .subBlock.right
    justify-content flex-end
  .subBlock.bottom
    align-items flex-end
  
  .right
    text-align: right;
  
  .s
    font-size s
  .l
    font-size l
</style>
<script lang="ts">
  import Vue from "vue";
  import say from "@/utils/i18n";
  import timer from "@/components/AutoTimer.vue";
  import net from "@/components/Networking.vue";
  
  export default Vue.extend({
    name: "home",
    components: {
      timer,
      net
    },
    data: () => {
      return {
        e: say
      };
    }
  });
</script>
