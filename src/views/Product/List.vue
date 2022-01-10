<template>
  <div class="list">

  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      tableData: null,
    };
  },
  methods: {
    getTableData() {
      this.$axios
        .get("http://rap2api.taobao.org/app/mock/296473/userInfo")
        .then((res) => {
          this.tableData = res.data.data;
          console.log(res);
        })
        .catch((err) => {
          throw err;
        });
    },
  },
  mounted() {
    this.getTableData();
  },
};
</script>

<style scoped>
</style>