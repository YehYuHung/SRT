<template>
  <div>
    <h1>{{ title }}</h1>

    <div class="row">
      <div class="float-right">
        <button class="btn btn-info" id="addBtn" @click="addData">
          新增資料
        </button>
        <button class="btn btn-info" id="editBtn" @click="editSelectedDatas">
          修改
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import merchandise from "@/mock/data/merchandise.json";
// 模擬 Constant 替代方案
const Constant = {
  storeId: "編號",
  merchandise: "商品",
  dataSource: "資料來源",
  Cost: "成本",
  quantity: "數量",
  totalCost: "總成本",
  sales: "銷售額",
  profit: "利潤",
};

const wordStyle = { color: "red", font: "18px" };

export default {
  name: "AsGridView",
  components: {},
  data() {
    return {
      title: "AsGridView",
      columnDefs: [],
      rowData: [],
      width: "100%",
      height: "400px",
      defaultColDef: {
        width: 200,
        filter: "agTextColumnFilter",
        resizable: true,
        sortable: true,
      },
      gridApi: null,
      gridColumnApi: null,
    };
  },
  created() {
    this.columnDefs = [
      { field: "storeId", headerName: Constant.storeId, hide: true },
      {
        field: "merchandise",
        headerName: Constant.merchandise,
        checkboxSelection: true,
        headerCheckboxSelection: true,
      },
      { field: "dataSource", headerName: Constant.dataSource },
      { field: "cost", headerName: Constant.Cost },
      { field: "quantity", headerName: Constant.quantity },
      { field: "totalCost", headerName: Constant.totalCost },
      { field: "sales", headerName: Constant.sales },
      {
        field: "profit",
        headerName: Constant.profit,
        cellStyle: (params) => (params.value < 0 ? wordStyle : null),
      },
    ];
    this.rowData = merchandise.merchandiseItem;
  },
  methods: {},
};
</script>

<style scoped>
.float-right {
  float: right;
}
.float-right > button {
  margin-right: 1vw;
  margin-bottom: 1vh;
}
</style>
