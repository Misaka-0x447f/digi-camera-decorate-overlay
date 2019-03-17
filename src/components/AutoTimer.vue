<template lang="pug">
  span.container
    span.hh(:class="{zero: hh === 0}") {{pad(hh)}}:
    span.mm(:class="{zero: mm === 0 && hh === 0}") {{pad(mm)}}:
    span.ss(:class="{zero: ss === 0 && mm === 0 && ss === 0}") {{pad(ss)}}
</template>
<style lang="stylus" scoped>
  .container {
    font-size 1.6em
  }
  
  .zero {
    opacity 0.2
  }
</style>
<script lang="ts">
  import Vue from "vue";
  import {padStart} from "lodash";

  export default Vue.extend({
    name: "AutoTimer",
    data: () => {
      return {
        begin: new Date().getTime(),
        hh: 0,
        mm: 0,
        ss: 0
      };
    },
    mounted() {
      const updateHandler = () => {
        const now = Date.now();
        const diff = new Date(now - this.begin);
        this.hh = diff.getUTCHours();
        this.mm = diff.getUTCMinutes();
        this.ss = diff.getUTCSeconds();
      };
      setInterval(updateHandler, 1000);
      updateHandler();
    },
    methods: {
      pad(v: number) {
        return padStart(v.toString(), 2, "0");
      }
    }
  });
</script>
