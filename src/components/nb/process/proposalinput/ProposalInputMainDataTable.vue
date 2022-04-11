<template>
    <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm" selectionMode="single" @row-click="rowClick">
        <Column field="masterPolicyNo" header="Master Policy No"></Column>
        <Column field="proposalNo" header="Proposal No"></Column>
        <Column field="proposalStatus" header="Proposal Status"></Column>
        <Column field="applicationBranchCode" header="Application Branch Code"></Column>
        <Column field="lastModifiedUserID" header="Last Modified User ID"></Column>
        <Column field="insuredName" header="Insured Name"></Column>
        <Column field="policyholderName" header="Policyholder Name"></Column>
        <Column field="planCode" header="Plan Code"></Column>
        <Column field="policyCommenceDate" header="Policy Commence Date"></Column> 
        <Column field="nbProductionDate" header="NB Production Date"></Column>
        <Column field="premiumMode" header="Premium Mode"></Column>
        <Column field="sprpr" header="Single Prem/Regular Prem + Rider"></Column>
        <Column field="rtu" header="RTU"></Column>
        <Column field="stu" header="STU"></Column> 
        <Column field="stuInstallmentPremium" header="STU Installment Premium"></Column> 

    </DataTable>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    name: 'ProposalInputMainDataTable',
    props: {
        dataList: Object
    },
    setup() {
        const router = useRouter();
 
        const rowClick = (e) => { 
            router.push({ name: "proposalinputdet", params: {data:  JSON.stringify(e.data)}});
        }

        return {
            rowClick,
        }
    },
}
</script>