<template>
  <div class="success">
    <icon name="check-circle" style="color: #00a870" size="72px"/>
    <div class="btnCtn">
      <t-button theme="primary">返回首页</t-button>
      <t-button theme="default">填充按钮</t-button>
    </div>
  </div>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';


export default {
  name: 'Success',
  data() {
    return {
      
    }
  },
  components: {
    Icon
  }
}
</script>

<style scoped>

</style>