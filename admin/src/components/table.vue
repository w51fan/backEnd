<template>
  <div class="table">
    <div class="filter-container">
      <el-input
        @keyup.enter.native="handleFilter"
        style="width: 200px;"
        class="filter-item"
        :placeholder="$t('table.title')"
        v-model="listQuery.title"
      ></el-input>
      <el-select
        clearable
        style="width: 90px"
        class="filter-item"
        v-model="listQuery.importance"
        :placeholder="$t('table.importance')"
      >
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item"></el-option>
      </el-select>
      <el-select
        clearable
        class="filter-item"
        style="width: 130px"
        v-model="listQuery.type"
        :placeholder="$t('table.type')"
      >
        <el-option
          v-for="item in  calendarTypeOptions"
          :key="item.key"
          :label="item.display_name+'('+item.key+')'"
          :value="item.key"
        ></el-option>
      </el-select>
      <el-select
        @change="handleFilter"
        style="width: 140px"
        class="filter-item"
        v-model="listQuery.sort"
      >
        <el-option
          v-for="item in sortOptions"
          :key="item.key"
          :label="item.label"
          :value="item.key"
        ></el-option>
      </el-select>
      <el-button
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >{{$t('table.search')}}</el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        @click="handleCreate"
        type="primary"
        icon="el-icon-edit"
      >{{$t('table.add')}}</el-button>
      <el-button
        class="filter-item"
        type="primary"
        :loading="downloadLoading"
        icon="el-icon-download"
        @click="handleDownload"
      >{{$t('table.export')}}</el-button>
      <el-checkbox
        class="filter-item"
        style="margin-left:15px;"
        @change="tableKey=tableKey+1"
        v-model="showReviewer"
      >{{$t('table.reviewer')}}</el-checkbox>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column
        align="center"
        :label="$t('table.actions')"
        width="300"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            @click="handleUpdate(scope.row)"
          >{{$t('table.edit')}}</el-button>
          <el-button
            v-if="scope.row.status!='published'"
            size="mini"
            type="success"
            @click="handleModifyStatus(scope.row,'published')"
          >{{$t('table.publish')}}</el-button>
          <el-button
            v-if="scope.row.status!='draft'"
            size="mini"
            @click="handleModifyStatus(scope.row,'draft')"
          >{{$t('table.draft')}}</el-button>
          <el-button
            v-if="scope.row.status!='deleted'"
            size="mini"
            type="danger"
            @click="handleModifyStatus(scope.row,'deleted')"
          >{{$t('table.delete')}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="listQuery.page"
        :page-sizes="[10,20,30, 50]"
        :page-size="listQuery.limit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
   
     <div class="tab-container">
    <!-- <el-tag>mounted times ：{{createdTimes}}</el-tag>
    <el-alert style="width:200px;display:inline-block;vertical-align: middle;margin-left:30px;" title="Tab with keep-alive" type="success" :closable="false">
    </el-alert> -->
    <el-tabs style='margin-top:15px;' v-model="activeName" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :label="item.label" :key='item.key' :name="item.key">
        <keep-alive>
          <customTab v-if='activeName==item.key' :type='item.key' @create='showCreatedTimes'/>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
  </div>
</template>

<script>
import customTab from '@/components/tab.vue';
const calendarTypeOptions = [
  { key: "CN", display_name: "China" },
  { key: "US", display_name: "USA" },
  { key: "JP", display_name: "Japan" },
  { key: "EU", display_name: "Eurozone" }
];
export default {
  name: "customTable",
  components:{
    customTab
  },
  data() {
    return {
      list: null,
      total: null,
      downloadLoading: false,
      showReviewer: false,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+id"
      },
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      sortOptions: [
        { label: "ID Ascending", key: "+id" },
        { label: "ID Descending", key: "-id" }
      ],
      statusOptions: ["published", "draft", "deleted"],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      tabMapOptions: [
        { label: 'China', key: 'CN' },
        { label: 'USA', key: 'US' },
        { label: 'Japan', key: 'JP' },
        { label: 'Eurozone', key: 'EU' }
      ],
      activeName: 'CN',
      createdTimes: 0
    };
  },
  methods: {
    handleFilter() {
      this.listQuery.page = 1;
      this.getList();
    },
    handleSizeChange(val) {
      this.listQuery.limit = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    },
    handleCreate() {
      this.resetTemp();
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    handleDownload() {
      this.downloadLoading = true;
      // import("@/vendor/Export2Excel").then(excel => {
      //   const tHeader = ["timestamp", "title", "type", "importance", "status"];
      //   const filterVal = [
      //     "timestamp",
      //     "title",
      //     "type",
      //     "importance",
      //     "status"
      //   ];
      //   const data = this.formatJson(filterVal, this.list);
      //   excel.export_json_to_excel({
      //     header: tHeader,
      //     data,
      //     filename: "table-list"
      //   });
      //   this.downloadLoading = false;
      // });
    },
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    }
  }
};
</script>


<style scoped lang="less">
</style>
