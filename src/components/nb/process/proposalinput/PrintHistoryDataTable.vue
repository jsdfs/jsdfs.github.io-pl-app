<template>
    <h5>Print History</h5>
    <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm">
        <Column field="orrespondenceLetterType" header="Correspondence Letter Type"></Column>
        <Column field="printDate" header="Print Date"></Column>

    </DataTable>
</template>

<script>

export default {
    name: 'PrintHistoryDataTable',
    props: {
        dataList: Object
    },
    setup() {


        return {
        }
    },
}
</script>