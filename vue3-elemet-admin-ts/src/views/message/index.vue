<script lang="ts">
export default {
  name: 'member',
};
</script>

<script setup lang="ts">
import { reactive, onMounted, toRefs } from 'vue';
import { ElTable } from 'element-plus';
import pagination from '@/components/Pagination/index.vue'
import { listMessagePage } from '@/api/message'
import { MemberItem } from '@/types/api/ums/member';
import moment from 'moment'
const state = reactive({
  // 遮罩层
  loading: true,
  // 选中数组
  ids: [],
  // 非单个禁用
  single: true,
  // 非多个禁用
  multiple: true,
  total: 0,
  queryParams: {
    pageNumber: 1,
    pageSize: 10,
    rangeTime: '' as any
  },
  memberList: [] as MemberItem[],
});

const { loading, queryParams, memberList, total } = toRefs(state);

function handleQuery() {
  state.loading = true;

  listMessagePage({
    ...state.queryParams, startDate: state.queryParams.rangeTime[0], endDate: state.queryParams.rangeTime[1]
  }).then(({ data }) => {
    console.log(data);

    state.memberList = data.rows;
    state.total = data.count;
    state.loading = false;
  });
}

function resetQuery() {
  state.queryParams = {
    pageNumber: 1,
    pageSize: 10,
    rangeTime: ''
  };
  handleQuery();
}



onMounted(() => {
  handleQuery();
});
</script>

<template>
  <div class="app-container">
    <el-form ref="queryFormRef" :model="queryParams" :inline="true">

      <el-form-item label="日期">
        <el-date-picker v-model="queryParams.rangeTime" type="datetimerange" start-placeholder="开始时间"
          end-placeholder="结束时间" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleQuery">搜索</el-button>
        <el-button @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="loading" :data="memberList" border>
      <el-table-column label="名称" align="left" prop="name" width="100" />
      <el-table-column label="电话/微信号码" align="left" prop="contact" width="200" />
      <el-table-column label="时间" align="left" prop="created_at" width="200" :formatter="(column: any, item: any, value: string) => {
        return moment(value).format('YYYY-MM-DD hh:mm:ss')
      }" />
      <el-table-column show-tooltip-when-overflow label="留言内容" align="left" prop="content" />
    </el-table>

    <!-- 分页工具条 -->
    <pagination v-if="total > 0" :total="total" v-model:page="queryParams.pageNumber"
      v-model:limit="queryParams.pageSize" @pagination="handleQuery" />
  </div>
</template>

<style scoped>

</style>
