<template>

    <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm">
        <Column field="lifeNo" header="Life No"></Column>  
        <Column field="planCode" header="Plan Code"></Column>       
        <Column field="benefitComponent" header="Benefit Component"></Column>
        <Column field="benefitTerm" header="Benefit Term"></Column>
        <Column field="coverageTerm" header="Coverage Term"></Column>
        <Column field="premiumTerm" header="Premium Term"></Column>        
        <Column field="sumAssured" header="Sum Assured"></Column>
        <Column field="annualPremium" header="Annual Premium"></Column>
        <Column field="familyDiscountAmount" header="Family Discount Amount"></Column>
        <Column field="renewalDiscountNCDAmount" header="Renewal Discount / NCD Amount"></Column>        
        <Column field="annualLoading" header="Annual Loading"></Column>
        <Column field="annualizedLoading" header="Annualized Loading"></Column>
        <Column field="emLoadingPeriod" header="EM Loading Period"></Column>        
        <Column field="pmLoadingPeriod" header="PM Loading Period"></Column>
        <Column field="annualizedPremiumTotal" header="Annualized Premium Total"></Column>         
        <Column field="installmentPremiumBase" header="Installment Premium (Base)"></Column>
        <Column field="installmentPremiumLoading" header="Installment Premium (Loading)"></Column>
        <Column field="installmentPremiumTotal" header="Installment Premium (Total)"></Column>   
	
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

