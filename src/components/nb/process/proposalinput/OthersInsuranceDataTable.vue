<template>
    <h5>Family HistoryOthers Insurance</h5>
    <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm">
        <Column field="policyTypeName" header="Policy Type / Name"></Column>  
        <Column field="policyNo" header="Policy No"></Column>       
        <Column field="insuranceCompanyName" header="Insurance Company Name"></Column>
        <Column field="currency" header="Currency"></Column>
        <Column field="sumAssured" header="Sum Assured"></Column>
    </DataTable>
 
</template>

<script>

export default {
    name: 'OthersInsuranceDataTable',
    props: {
        dataList: Object
    },
    setup() {


        return {
        }
    },
}
</script>