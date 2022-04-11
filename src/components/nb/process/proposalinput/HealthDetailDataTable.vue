<template>

    <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm">
        <Column field="lifeNo" header="Life No"></Column>  
        <Column field="clientID" header="Client ID"></Column>       
        <Column field="name" header="Name"></Column>
        <Column field="height" header="Height (cm)"></Column>
        <Column field="weight" header="Weight (kg)"></Column>
        <Column field="bmi" header="BMI"></Column>        
        <Column field="smoker" header="Smoker"></Column>

    </DataTable>
 
</template>

<script>

export default {
    name: 'HealthDetailDataTable',
    props: {
        dataList: Object
    },
    setup() {


        return {
        }
    },
}
</script>