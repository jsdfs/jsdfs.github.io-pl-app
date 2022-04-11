<template>
    <div>
            <h5>Policyholder Details</h5>
            <br/>
            <div class="p-fluid formgrid grid">
                <div class="field col-12 md:col-6">
                    <label for="relationToInsured">Relation To Insured</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.relationToInsured" id="relationToInsured" :options="relationToInsuredLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="salutation">Salutation</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.salutation" id="salutation" :options="salutationLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>    
                <div class="field col-12 md:col-6">
                    <label for="name">Name</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.name" id="name" type="text" />
                </div> 
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>    
                <div class="field col-12 md:col-6">
                    <label for="gender">Gender</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.gender" id="gender" :options="genderLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>          
                <div class="field col-12 md:col-6">
                    <label for="religion">Religion</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.religion" id="religion" :options="religionLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="maritalStatus">Marital Status</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.maritalStatus" id="maritalStatus" :options="maritalStatusLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="nationality">Nationality</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.nationality" id="nationality" :options="nationalityLs" optionLabel="name" optionValue="value" placeholder="Select one..." disabled />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="dob">DOB</label>
                    <Calendar class="p-inputtext-sm" id="dob" v-model="inputForm.dob" :showIcon="true" />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="age">Age</label>
                    <InputText class="p-inputtext-sm" id="age" type="text" value="47" />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="placeOfBirth">Place Of Birth</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.placeOfBirth" id="placeOfBirth" type="text" value="BOGOR" />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>   
                <div class="field col-12 md:col-6">
                    <label for="race">Race</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.race" id="race" :options="raceLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
            </div>

            <hr/>

            <h5>Company Address</h5>
            <br/>
            <div class="p-fluid formgrid grid">
                <div class="field col-12 md:col-6">
                    <label for="comAddress1">Address</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.comAddress1" id="comAddress1" type="text" value="MENTENG" />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div> 
                <div class="field col-12 md:col-6">
                    <InputText class="p-inputtext-sm" v-model="inputForm.comAddress2" id="comAddress2" type="text" value="BLOK G16" />
                </div> 
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>  
                <div class="field col-12 md:col-6">
                    <InputText class="p-inputtext-sm" v-model="inputForm.comAddress3" id="comAddress3" type="text" value="" />
                </div> 
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>  
                <div class="field col-12 md:col-6">
                    <InputText class="p-inputtext-sm" v-model="inputForm.comAddress4" id="comAddress4" type="text" value="" />
                </div>  
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="comCity">City</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.comCity" id="comCity" type="text" value="BOGOR" />
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="comPostcode">Postcode</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.comPostcode" id="comPostcode" type="text" value="876381" />
                </div>               
                <div class="field col-12 md:col-6">
                    <label for="comState">State</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.comState" id="comState" :options="comStateLs" optionLabel="name" optionValue="value" placeholder="Select one..." disabled />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>        
                <div class="field col-12 md:col-6">
                    <label for="comCountry">Country</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.comCountry" id="comCountry" :options="comCountryLs" optionLabel="name" optionValue="value" placeholder="Select one..." disabled />
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="comFaxNo">Fax No</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.comFaxNo" id="comFaxNo" type="text" value="0" />
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="comTelephoneNo">Telephone No</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.comTelephoneNo" id="comTelephoneNo" type="text" value="0" />
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="comMobileNo">Mobile No</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.comMobileNo" id="comMobileNo" type="text" value="0" />
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="comEmail">Email</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.comEmail" id="comEmail" type="text" value="0" />
                </div> 
            </div>

            <hr/>

            <h5>Correspondence Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button icon="pi pi-search" class="p-button-rounded p-button-success" v-tooltip.top="'Search'" />&nbsp;&nbsp;<Button icon="pi pi-copy" class="p-button-rounded p-button-secondary" v-tooltip.top="'Duplicate Address As Company Address'" /></h5>
            <br/>
            <div class="p-fluid formgrid grid">
                <div class="field col-12 md:col-6">
                    <label for="comAddress1">Address</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.comAddress1" id="comAddress1" type="text" value="MENTENG" />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div> 
                <div class="field col-12 md:col-6">
                    <InputText class="p-inputtext-sm" v-model="inputForm.comAddress2" id="comAddress2" type="text" value="BLOK G16" />
                </div> 
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>  
                <div class="field col-12 md:col-6">
                    <InputText class="p-inputtext-sm" v-model="inputForm.comAddress3" id="comAddress3" type="text" value="" />
                </div> 
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>  
                <div class="field col-12 md:col-6">
                    <InputText class="p-inputtext-sm" v-model="inputForm.comAddress4" id="comAddress4" type="text" value="" />
                </div>  
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="comCity">City</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.comCity" id="comCity" type="text" value="BOGOR" />
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="comPostcode">Postcode</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.comPostcode" id="comPostcode" type="text" value="876381" />
                </div>               
                <div class="field col-12 md:col-6">
                    <label for="comState">State</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.comState" id="comState" :options="comStateLs" optionLabel="name" optionValue="value" placeholder="Select one..." disabled />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>        
                <div class="field col-12 md:col-6">
                    <label for="comCountry">Country</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.comCountry" id="comCountry" :options="comCountryLs" optionLabel="name" optionValue="value" placeholder="Select one..." disabled />
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="comFaxNo">Fax No</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.comFaxNo" id="comFaxNo" type="text" value="0" />
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="comTelephoneNo">Telephone No</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.comTelephoneNo" id="comTelephoneNo" type="text" value="0" />
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="comMobileNo">Mobile No</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.comMobileNo" id="comMobileNo" type="text" value="0" />
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="comEmail">Email</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.comEmail" id="comEmail" type="text" value="0" />
                </div> 
            </div>

            <hr/>

            <h5>Resident Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button icon="pi pi-search" class="p-button-rounded p-button-success" v-tooltip.top="'Search'" />&nbsp;&nbsp;<Button icon="pi pi-copy" class="p-button-rounded p-button-secondary" v-tooltip.top="'Duplicate Address As Company Address'" /></h5>
            <br/>
            <div class="p-fluid formgrid grid">
                <div class="field col-12 md:col-6">
                    <label for="resAddress1">Address</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.resAddress1" id="resAddress1" type="text" value="MENTENG" />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div> 
                <div class="field col-12 md:col-6">
                    <InputText class="p-inputtext-sm" v-model="inputForm.resAddress2" id="resAddress2" type="text" value="BLOK G16" />
                </div> 
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>  
                <div class="field col-12 md:col-6">
                    <InputText class="p-inputtext-sm" v-model="inputForm.resAddress3" id="resAddress3" type="text" value="" />
                </div> 
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>  
                <div class="field col-12 md:col-6">
                    <InputText class="p-inputtext-sm" v-model="inputForm.resAddress4" id="resAddress4" type="text" value="" />
                </div>  
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="resCity">City</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.resCity" id="resCity" type="text" value="BOGOR" />
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="resPostcode">Postcode</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.resPostcode" id="resPostcode" type="text" value="876381" />
                </div>               
                <div class="field col-12 md:col-6">
                    <label for="resState">State</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.resState" id="resState" :options="resStateLs" optionLabel="name" optionValue="value" placeholder="Select one..." disabled />
                </div>
                <div class="field col-12 md:col-6">
                    <!-- Empty Space -->
                </div>        
                <div class="field col-12 md:col-6">
                    <label for="resCountry">Country</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.resCountry" id="resCountry" :options="resCountryLs" optionLabel="name" optionValue="value" placeholder="Select one..." disabled />
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="resFaxNo">Fax No</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.resFaxNo" id="resFaxNo" type="text" value="0" />
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="resTelephoneNo">Telephone No</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.resTelephoneNo" id="resTelephoneNo" type="text" value="0" />
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="resMobileNo">Mobile No</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.resMobileNo" id="resMobileNo" type="text" value="0" />
                </div> 
                <div class="field col-12 md:col-6">
                    <label for="resEmail">Email</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.resEmail" id="resEmail" type="text" value="0" />
                </div> 
            </div>
        </div>


</template>

<script>
import { toRef, ref, onUpdated } from 'vue'


export default {
    props: {
        policyholderSend: Object,
    },
    name: 'PolicyholderDetails',
    components: {

    },
    setup(props, {emit}) {


        const policyholderData = toRef(props, 'policyholderSend');



        onUpdated(() => {
            policyholderData.value.relationToInsured = inputForm.value.relationToInsured
            policyholderData.value.salutation = inputForm.value.salutation
            policyholderData.value.name = inputForm.value.name
            emit('updatepolicyholderSend', policyholderData.value)
        })


        const inputForm = ref({
            relationToInsured: policyholderData.value.relationToInsured,
            salutation: policyholderData.value.salutation,
            name: policyholderData.value.name,
            gender: 'M',
            religion: '1',
            maritalStatus: 'BM',
            nationalityLs: 'WNI',
            dob: '10/07/2000',
            age: '47',
            placeOfBirth: 'BOGOR',
            race: 'BGS',
            comState: '0011',
            comCountry: 'ID',
            resState: '0011',
            resCountry: 'ID',

        })

        const relationToInsuredLs = ref([
            { name: '45 - ORANG TUA', value: '45' },
            { name: '48 - PERUSAHAAN', value: '48' },
            { name: '99 - OTHERS', value: '99' },
        ])

        const salutationLs = ref([
            { name: '1 - BAPAK', value: '1' },
            { name: '2 - IBU', value: '2' },
            { name: '3 - BAPAK/IBU', value: '3' },
        ])

        const genderLs = ref([
            { name: 'F - WANITA', value: 'F' },
            { name: 'M - PRIA', value: 'M' },
            { name: 'N/A - NOT APPLICABLE', value: 'N/A' },
        ])

        const religionLs = ref([
            { name: '0 - NOT APPLICABLE', value: '0' },
            { name: '1 - ISLAM', value: '1' },
            { name: '2 - KRISTEN KATOLIK', value: '2' },
        ])

        const maritalStatusLs = ref([
            { name: 'BM - BELUM MENIKAH', value: 'BM' },
            { name: 'DU - DUDA', value: 'DU' },
            { name: 'JD - JANDA', value: 'JD' },
        ])

        const nationalityLs = ref([
            { name: 'WNA - NON INDONESIAN', value: 'Y' },
            { name: 'WNI - INDONESIAN', value: 'N' },
        ])

        const raceLs = ref([
            { name: 'BGS - BUGIS', value: 'BGS' },
            { name: 'BTK - BATAK', value: 'BTK' },
            { name: 'MLY - MELAYU', value: 'MLY' },
        ])

        const comStateLs = ref([
            { name: '0011 - DKI JAKARTA', value: '0011' },
        ])

        const comCountryLs = ref([
            { name: 'ID - INDONESIA', value: 'ID' },
        ])

        const resStateLs = ref([
            { name: '0011 - DKI JAKARTA', value: '0011' },
        ])

        const resCountryLs = ref([
            { name: 'ID - INDONESIA', value: 'ID' },
        ])


        return {
            relationToInsuredLs,
            salutationLs,
            genderLs,
            religionLs,
            maritalStatusLs,
            nationalityLs,
            raceLs,
            comStateLs,
            comCountryLs,
            resStateLs,
            resCountryLs,
            inputForm,
            policyholderData,

        }

    },
}
</script>