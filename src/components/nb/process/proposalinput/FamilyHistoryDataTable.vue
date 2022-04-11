<template>
    <h5>Family History</h5>
    <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm">
        <Column field="relationship" header="Relationship"></Column>  
        <Column field="healthCondition" header="Health Condition"></Column>       
        <Column field="age" header="Age (year)"></Column>
        <Column field="remarks" header="Remarks"></Column>

    </DataTable>
 
</template>

<script>

export default {
    name: 'FamilyHistoryDataTable',
    props: {
        dataList: Object
    },
    setup() {


        return {
        }
    },
}
</script>