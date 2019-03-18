<template lang="pug">
  div.root
    div.container
      div.big {{e("wifi")}}
      div.small {{e("wifiStat")}}
</template>
<style lang="stylus" scoped>
  .big
    font-size l
  .small
    font-size s
</style>
<script lang="ts">
  import Vue from "vue";
  import say from "@/utils/i18n";

  export default Vue.extend({
    name: "Networking",
    data: () => {
      return {
        e: say
      };
    }
  });
</script>
