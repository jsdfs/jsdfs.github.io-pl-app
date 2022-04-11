<template>
    <h5>Details Sum At Risk</h5>
    <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm">
        <Column field="lifeNo" header="Life No"></Column>
        <Column field="clientID" header="Client ID"></Column>
        <Column field="clientName" header="Client Name"></Column>
        <Column field="benefitComponent" header="Benefit Component"></Column>
        <Column field="previousSumAtRisk" header="Previous Sum At Risk"></Column>
        <Column field="newSumAtRisk" header="New Sum At Risk"></Column>        
        <Column field="totalSumAtRisk" header="Total Sum At Risk"></Column>
        <Column field="totalSumAtRiskMedical" header="Total Sum At Risk (Medical)"></Column>

    </DataTable>
</template>

<script>

export default {
    name: 'DetailsSumAtRiskDataTable',
    props: {
        dataList: Object
    },
    setup() {


        return {
        }
    },
}
</script>