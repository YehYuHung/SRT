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

    <!--
      * pagination 分頁
      * paginationAutoPageSize 固定頁面長度改用分頁
      * rowData 資料源
      * columnDefs 標頭資料源
      * defaultColDef 預設定義
      * gridOptions 獲得 As Grid 表格資訊
      * grid-ready grid準備完成後api倒入資料地方
    -->
    <ag-grid-vue
      class="ag-theme-alpine"
      :style="{ width, height }"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
      :pagination="true"
      :paginationAutoPageSize="true"
      @grid-ready="onGridReady"
    />
  </div>
</template>

<script>
import merchandise from "@/mock/data/merchandise.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";

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
  components: { AgGridVue },
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
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    },
    editSelectedDatas() {
      if (!this.gridApi) return;

      const selectedData = this.gridApi
        .getSelectedNodes()
        .map((node) => node.data);

      if (selectedData.length > 0) {
        this.$router.push({
          name: "passing",
          query: { Item: selectedData.map((e) => e.storeId) },
        });
      } else {
        alert("請選擇其中一件商品");
      }
    },
    addData() {
      this.$router.push({ name: "insert" });
    },
  },
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
