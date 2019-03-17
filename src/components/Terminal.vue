<template lang="pug">
  div.root
    div.container
      div.term
        span {{t}}
</template>
<style lang="stylus" scoped>
  .container {
    opacity 0.5
    color plain-text-1
  }
  
  .term {
    overflow hidden
    display flex
    align-items flex-end
    height 3em
    line-height 1em
  }
</style>
<script lang="ts">
  import Vue from "vue";
  import lo from "@/utils/lorem";
  import {timeout} from "@/utils/lang";

  export default Vue.extend({
    name: "Terminal",
    data: () => {
      return {
        t: ""
      };
    },
    async mounted() {
      while (1) {
        for (const i of lo) {
          this.t += i;
          await timeout(33);
        }
        this.t = "";
      }
    }
  });
</script>
