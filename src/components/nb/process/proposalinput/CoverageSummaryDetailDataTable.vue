<template>
    <h5>Coverage Summary Details</h5>
    <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm">
        <Column field="lifeNo" header="Life No"></Column>
        <Column field="planCode" header="Plan Code"></Column>
        <Column field="benefitTerm" header="Benefit Term"></Column>
        <Column field="coverageTerm" header="Coverage Term"></Column>
        <Column field="premiumTerm" header="Premium Term"></Column>
        <Column field="sumAssured" header="Sum Assured"></Column>
        <Column field="annualPremium" header="Annual Premium"></Column>
        <Column field="familyDiscountAmount" header="Family Discount Amount"></Column>
        <Column field="renewalDiscount/NCDAmount" header="Renewal Discount / NCD Amount"></Column>   
        <Column field="annualLoading" header="Annual Loading"></Column>
        <Column field="annualizedLoading" header="Annualized Loading"></Column>
        <Column field="annualizedPremiumTotal" header="Annualized Premium Total"></Column>
        <Column field="installmentPremiumBase" header="Installment Premium (Base)"></Column>
        <Column field="installmentPremiumLoading" header="Installment Premium (Loading)"></Column>
        <Column field="installmentPremiumTotal" header="Installment Premium (Total)"></Column>     
    </DataTable>
    <div class="col-12">
        <Button label="Calculate Premium" style="width:8rem; background-color:#000080;" class="p-button-info mr-2 mb-2"/>
    </div>   
</template>

<script>

export default {
    name: 'CoverageSummaryDetailDataTable',
    props: {

    },
    setup() {

        const dataList = [{
            lifeNo: "L1",
            planCode: "02.06.03",
            benefitTerm: "0", 
            coverageTerm: "0",  
            premiumTerm: "0",   
            sumAssured: "0.00",       
            annualPremium: "0.00",
            familyDiscountAmount: "0.00", 
            'renewalDiscount/NCDAmount': "0.00",  
            annualLoading: "0.00",       
            annualizedLoading: "0.00",
            annualizedPremiumTotal: "0.00", 
            installmentPremiumBase: "0.00", 
            installmentPremiumLoading: "0.00",       
            installmentPremiumTotal: "0.00",                        
            
 
        }]

        return {
            dataList
        }
    },
}
</script>