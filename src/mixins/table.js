// 混入表格的一些方法
export default {
  data() {
    return {
      tableData: [],
      pageSize: 10,
      currentPage: 1,
      totals: 0,
    }
  },
  methods: {
    handleSizeChange(size) {
      this.pageSize = size;
      this.queryList();
    },
    handleCurrentChange(num) {
      this.currentPage = num;
      this.queryList();
    },
  }
}