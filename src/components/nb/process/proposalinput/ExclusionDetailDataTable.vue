<template>
    <h5>Exclusion Details</h5>
    <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm">
        <Column field="lifeNo" header="Life No"></Column>
        <Column field="exclusionCode" header="Exclusion Code"></Column>

    </DataTable>
</template>

<script>

export default {
    name: 'ExclusionDetailDataTable',
    props: {
        dataList: Object
    },
    setup() {


        return {
        }
    },
}
</script>