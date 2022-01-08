<template>
  <div class="home">
    <t-layout>
        <t-aside><Menu /></t-aside>
        <t-layout>
          <t-content>Content</t-content>
          <t-footer>Footer</t-footer>
        </t-layout>
      </t-layout>
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name: "Home",
  data() {
    return {

    };
  },
  components: {
    Menu
  },
};
</script>

<style scoped>

</style>