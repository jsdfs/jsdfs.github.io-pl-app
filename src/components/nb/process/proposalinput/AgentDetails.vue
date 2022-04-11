<template>
        <h5>Agent Details</h5>
        <br/>
        <div class="p-fluid formgrid grid">
            <div class="field col-12 md:col-6">
                <label for="agentCode">Agent Code</label>
                <InputText class="p-inputtext-sm" id="agentCode" type="text" value="1300005" />
            </div> 
            <div class="field col-12 md:col-6">
                <label for="agentName">Agent Name</label>
                <InputText class="p-inputtext-sm" id="agentName" type="text" value="SATYO PURWANTO" />
            </div> 
            <div class="field col-12 md:col-6">
                <label for="privilegeClubStatus">Privilege Club Status</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.privilegeClubStatus" id="privilegeClubStatus" :options="privilegeClubStatusLs" optionLabel="name" optionValue="value" placeholder="Select one..." disabled />
            </div>        
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>    
            <div class="field col-12 md:col-6">
                <label for="blackListIndicator">Black List Indicator</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.blackListIndicator" id="blackListIndicator" :options="blackListIndicatorLs" optionLabel="name" optionValue="value" placeholder="Select one..." disabled />
            </div> 
            <div class="field col-12 md:col-6">
                <label for="blackListReason">Black List Reason</label>
                <InputText class="p-inputtext-sm" v-model="inputForm.blackListReason" id="blackListReason" type="text" value="" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="warningCauseLetter">Warning/Show Cause Letter Tag</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.warningCauseLetter" id="warningCauseLetter" :options="warningCauseLetterLs" optionLabel="name" optionValue="value" placeholder="Select one..." disabled />
            </div>
            <div class="field col-12 md:col-6">
                <label for="warningCauseLetterDate">Warning/Show Cause Letter Tag Date</label>
                <Calendar class="p-inputtext-sm" id="warningCauseLetterDate" v-model="inputForm.warningCauseLetterDate" :showIcon="true" disabled />
            </div>
            <div class="field col-12 md:col-6">
                <label for="distributionChannel">Distribution Channel</label>
                <InputText class="p-inputtext-sm" id="distributionChannel" type="text" value="CCG" />
            </div>
            <div class="field col-12 md:col-6">
                <!-- Empty Space -->
            </div>
            <div class="field col-12 md:col-6">
                <label for="staffPolicy">Staff Policy (Y/N)</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.staffPolicy" id="staffPolicy" :options="staffPolicyLs" optionLabel="name" optionValue="value" placeholder="Select one..." disabled />
            </div>
            <div class="field col-12 md:col-6">
                <label for="familyBusiness">Family Business</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.familyBusiness" id="familyBusiness" :options="familyBusinessLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
            </div>
            <div class="field col-12 md:col-6">
                <label for="staffID">Staff ID</label>
                <InputText class="p-inputtext-sm" id="staffID" type="text" value="" />
            </div>
            <div class="field col-12 md:col-6">
                <label for="staffType">Staff Type</label>
                <Dropdown class="p-inputtext-sm" v-model="inputForm.staffType" id="staffType" :options="staffTypeLs" optionLabel="name" optionValue="value" placeholder="Select one..." disabled />
            </div>
        </div>


</template>

<script>
import { ref } from 'vue'


export default {
    name: 'KeyBenefitsIndicator',
    components: {
    },
    setup() {

        const inputForm = ref({
            agentCode: '1300005',
            agentName: 'SATYO PURWANTO',
            privilegeClubStatus: '',
            blackListIndicator: 'N',
            blackListReason: '',
            warningCauseLetter: '',
            warningCauseLetterDate: '',
            staffPolicy: 'N',
            familyBusiness: 'N',
            staffID: '',
            staffType: '',

        })


        const privilegeClubStatusLs = ref([

        ])

        const blackListIndicatorLs = ref([
            { name: 'Y - YES', value: 'Y' },
            { name: 'N - NO', value: 'N' },
        ])

        const warningCauseLetterLs = ref([

        ])

        const staffPolicyLs = ref([
            { name: 'Y - YES', value: 'Y' },
            { name: 'N - NO', value: 'N' },
        ])

        const familyBusinessLs = ref([
            { name: 'Y - YES', value: 'Y' },
            { name: 'N - NO', value: 'N' },
        ])

        const staffTypeLs = ref([

        ])   

        return {
            privilegeClubStatusLs,
            blackListIndicatorLs,
            warningCauseLetterLs,
            staffPolicyLs,
            familyBusinessLs,
            staffTypeLs,
            inputForm,

        }

    },
}
</script>