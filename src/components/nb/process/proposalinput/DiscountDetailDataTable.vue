<template>
    <h5>Discount Details</h5>
    <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm">
        <Column field="planCode" header="Plan Code"></Column>        
        <Column field="discountType" header="Discount Type"></Column>
        <Column field="rateDiscount" header="Rate Discount"></Column>
        <Column field="perMileDiscount" header="Per Mile Discount"></Column>
   
    </DataTable>
 
</template>

<script>

export default {
    name: 'DiscountDetailDataTable',
    props: {
        dataList: Object
    },
    setup() {
        
        return {
        }
    },
}
</script>