<template>
    <h5>Loading/Extra Premium Details</h5>
    <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm">
        <Column field="lifeNo" header="Life No"></Column>
        <Column field="planCode" header="Plan Code"></Column>
        <Column field="loadingType" header="Loading Type"></Column>
        <Column field="loading/ExtraPremiumCode" header="Loading/Extra Premium Code"></Column>
        <Column field="premiumPaymentPeriod" header="Premium Payment Period"></Column>
        <Column field="perMile" header="Per Mile/%"></Column>

    </DataTable>
</template>

<script>

export default {
    name: 'Loading/ExtraPremiumDetailsDataTable',
    props: {
        dataList: Object
    },
    setup() {


        return {
        }
    },
}
</script>