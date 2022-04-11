<template>
    <div class="card">
        <SearchSelection
            :listitemLs="listitemLs"
            :inputForm="inputForm"
            @changeItem="listitemLs = $event"
        />  
        <div style="margin-bottom:1%;">
                <Button icon="pi pi-search" style="background-color:#000080;" class="mr-2 float-start" @click="search" v-tooltip.top="'Search'" />
                <Button icon="pi pi-filter-slash" class="p-button-danger mr-2 float-start" @click="clear" v-tooltip.top="'Clear'" />
                <Button icon="pi pi-plus" style="background-color:#000080;" class="float-end" @click="add" v-tooltip.top="'Add'" />
        </div>
        <ProposalInputMainDataTable
            :dataList="tableData"
        />
    </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue';
import planMaintDataService from '@/service/admin/planMaintDataService';
import ProposalInputMainDataTable from '@/components/nb/process/proposalinput/ProposalInputMainDataTable';
import SearchSelection from "@/components/common/SearchSelection";

export default {
    name: 'ProposalInputMainView',
    components: {
        ProposalInputMainDataTable, SearchSelection
    },
    setup() {

        onMounted(() => {
            planMaintDataService.getProposalInput().then(data => tableData.value = data);
        });

        const inputForm = reactive({
            proposalType: '',
            distributionChannel: '',
            proposalStatus: '',
            proposalRefNo: '',
            masterPolicyNo: '',
            hqReceivedDate: '',
            branchReceivedProposalDate: '',
            nbProductionDate: '',
            policyCommenceDate: '',
            applicationBranchCode: '',
            agentCode: '',
            insuredName: '',
            premiumMode: '',
            policyholderName: '',
            planCode: '',
            entryDateFrom: '',
            entryDateTo: '',
            lastModifiedUserID: ''
        })

        const ddlProposalType = ref([
            { name: 'EXEC - TM EXECUTIVE', value: 'EXEC' },
            { name: 'MAXI - DANA MAXIMA', value: 'MAXI' },
            { name: 'PROINV - PRO INVESTMENT FORM', value: 'PROINV' },
            { name: 'SMP - SIMPLIFY FORM', value: 'SMP' },
            { name: 'STD - STANDARD FORM', value: 'STD' },                                    
        ])

        const ddlDistributionChannel = ref([
            { name: '# - NOT ANALYZE', value: '#' },
            { name: 'AGY - AGENCY', value: 'AGY' },
            { name: 'BROKER - BROKER', value: 'BROKER' },
            { name: 'CCG - CAPTIVE COMMERCIAL', value: 'CCG' },
            { name: 'COINSURE - COIN INSSURANCE', value: 'COINSURE' },      
            { name: 'DIRECTCORP - DIRECT CORPORATE', value: 'DIRECTCORP' },                                
        ])

        const ddlProposalStatus = ref([
            { name: 'VALIDATE - VALIDATION', value: 'VALIDATE' },
            { name: 'PROP - PROPOSAL', value: 'PROP' },                            
        ])
        
        const ddlApplicationBranchCode = ref([
            { name: '1090 - JAKARTA HEAD OFFICE', value: '1090' },
            { name: '1091 - JAKARTA HEAD OFFICE CAPTIVE', value: '1091' },
            { name: '32.73.01 - KANTOR PEMASARAN BANDUNG', value: '32.73.01' },
            { name: '32.03.01 - KANTOR PEMASARAN CIANJUR', value: '32.03.01' },
            { name: '32.74.01 - KANTOR PEMASARAN CIREBON', value: '32.74.01' },      
            { name: '51.71.01 - KANTOR PEMASARAN DENPASAR', value: '51.71.01' },                                
        ])

        const ddlPremiumMode = ref([
            { name: 'A - TAHUNAN', value: 'A' },
            { name: 'H - SEMESTERAN', value: 'H' },
            { name: 'M - BULANAN', value: 'M' },
            { name: 'Q - KUARTAL', value: 'Q' },
            { name: 'S - SEKALIGUS', value: 'S' },
        ])
        
        const ddlPlanCode = ref([
            { name: '01.02.45 - TUGU DANA MAKSIMA', value: '01.02.45' },
            { name: '01.06.01 - TM POWER LINK REGULAR', value: '01.06.01' },
            { name: '01.06.32 - TM POWER LINK SINGLE', value: '01.06.32' },
            { name: '02.06.01 - MANDIRI ASURANSI PESANGON SEJAHTERA', value: '02.06.01' },
            { name: '02.06.03 - TM EXECUTIVE SEVERANCE', value: '02.06.03' },
        ])

        const listitemLs = ref([
            { name: "proposalType", label: "Proposal Type", type: "dropdown", options: ddlProposalType, optionLabel:"name", optionValue:"value" },
            { name: "distributionChannel", label: "Distribution Channel", type: "dropdown", options: ddlDistributionChannel, optionLabel:"name", optionValue:"value" },
            { name: "proposalNo", label: "Proposal No", type: "input" },
            { name: "proposalStatus", label: "Proposal Status", type: "dropdown", options: ddlProposalStatus, optionLabel:"name", optionValue:"value" },
            { name: "proposalRefNo", label: "Proposal Ref No", type: "input" },
            { name: "masterPolicyNo", label: "Master Policy No", type: "input" },
            { name: "hqReceivedDate", label: "HQ Received Date", type: "date" },
            { name: "branchReceivedProposalDate", label: "Branch Received Proposal Date", type: "date" },
            { name: "nbProductionDate", label: "NB Production Date", type: "date" },
            { name: "policyCommenceDate", label: "Policy Commence Date", type: "date" },
            { name: "applicationBranchCode", label: "Application Branch Code", type: "dropdown", options: ddlApplicationBranchCode, optionLabel:"name", optionValue:"value" },
            { name: "agentCode", label: "Agent Code", type: "input" },
            { name: "insuredName", label: "Insured Name", type: "input" },
            { name: "premiumMode", label: "Premium Mode", type: "dropdown", options: ddlPremiumMode, optionLabel:"name", optionValue:"value" },
            { name: "policyholderName", label: "Policyholder Name", type: "input" },
            { name: "planCode", label: "Plan Code", type: "dropdown", options: ddlPlanCode, optionLabel:"name", optionValue:"value" },
            { name: "entryDateFrom", label: "Entry Date From", type: "input" },
            { name: "entryDateTo", label: "Entry Date To", type: "input" },
            { name: "lastModifiedUserID", label: "Last Modified User ID", type: "input" },
        ]);

        const tableData = ref({});



        return {
            tableData,
            ddlProposalType,
            ddlDistributionChannel,
            ddlProposalStatus,
            ddlApplicationBranchCode,
            ddlPlanCode,
            ddlPremiumMode,
            inputForm,
            listitemLs
        }
    },
}
</script>

<style scoped>
.pagePanel {
    color: #4169E1;
}
</style>
