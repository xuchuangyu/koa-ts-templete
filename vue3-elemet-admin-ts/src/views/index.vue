<script lang="ts">
export default {
  name: 'member',
};
</script>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';


// import { listMemebersPage } from '@/api/ums/member';
import { MemberQueryParam, MemberItem } from '@/types/api/ums/member';

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
    pageNum: 1,
    pageSize: 10,
  } as MemberQueryParam,
  memberList: [] as MemberItem[],
});


function handleQuery() {
  state.loading = true;
  // listMemebersPage(state.queryParams).then(({ data }) => {
  //   state.memberList = data.list;
  //   state.total = data.total;
  //   state.loading = false;
  // });
}


onMounted(() => {
  handleQuery();
});
</script>

<template>
  <div></div>
</template>

<style scoped>

</style>
