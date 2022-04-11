<template>
    <h5>Rider Details</h5>
    <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm">
        <Column field="planCode" header="Plan Code"></Column>
        <Column field="lifeNo" header="Life No"></Column>
        <Column field="coverageTerm" header="Coverage Term"></Column>
        <Column field="benefitTerm" header="Benefit Term"></Column>
        <Column field="premiumPaymentPeriod" header="Premium Payment Period"></Column>
        <Column field="sumAssured" header="Sum Assured"></Column>
        <Column field="riderStatus" header="Rider Status"></Column>
        <Column field="riderStatusDate" header="Rider Status Date"></Column>

    </DataTable>
</template>

<script>

export default {
    name: 'RiderDetailDataTable',
    props: {
        dataList: Object
    },
    setup() {


        return {
        }
    },
}
</script>