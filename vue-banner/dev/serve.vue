<script>
import Vue from 'vue';
import VueBanner from '@/vue-banner.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueBanner
  }
});
</script>

<template>
  <div id="app">
    <VueBanner/>
  </div>
</template>
