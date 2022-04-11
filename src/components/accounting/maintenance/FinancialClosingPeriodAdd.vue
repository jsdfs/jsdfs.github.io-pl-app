<template>
    <div class="grid">
        <div class="col-12 xl:col-12">
            <div class="card p-fluid ">
            <div>
                <div style="float:left" class="flex justify-content-start flex-wrap card-container green-container">
                    <div class="flex align-items-center justify-content-center"><Button icon="pi pi-chevron-left" type="button" class="p-button-rounded p-button-text mr-2 mb-2" @click="close" /></div> 
                </div>  
                <div style="float:right" class="flex justify-content-end flex-wrap card-container green-container">
                    <div class="flex align-items-center justify-content-center"><Button icon="pi pi-plus" style="background-color:#000080;" type="button" class="mr-2 mb-2" @click="saveExit" /> </div>     
                </div>  
            </div>
            <div class="card p-fluid ">
            <div class="formgrid grid">
                <div class="field col-12 md:col-6">
                    <label for="financialYear">Financial Year *</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.financialYear" id="financialYear" :options="financialYearLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="financialMonth">Financial Month *</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.financialMonth" id="financialMonth" :options="financialMonthLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="calenderMonth">Calendar Month *</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.calenderMonth" id="calenderMonth" :options="calenderMonthLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    
                </div>
                <div class="field col-12 md:col-6">
                    <label for="startDate">Start Date *</label>
                    <Calendar class="p-inputtext-sm" id="startDate" v-model="inputForm.startDate" :showIcon="true" :showOnFocus="false" />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="endDate">End Date *</label>
                    <Calendar class="p-inputtext-sm" id="endDate" v-model="inputForm.endDate" :showIcon="true" :showOnFocus="false" />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="status">Status</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.status" id="status" :options="statusLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="accountingPeriod">Accounting Period</label>
                    <InputText class="p-inputtext-sm" v-model="inputForm.accountingPeriod" id="accountingPeriod" type="text" />
                </div>
            </div>                                                 
            </div>
            </div>   
        </div>   
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import masterService from "../../../service/admin/masterDataService";
import { useStore } from 'vuex';

export default {
    setup() {
        const router = useRouter();
        const financialYearLs = ref();
        const financialMonthLs = ref();
        const calenderMonthLs = ref();
        const statusLs = ref();
        const store = useStore();

        const inputForm = ref({
            financialYear: '',  
            financialMonth: '',
            calenderMonth: '',
            startDate: '',
            endDate: '',
            status: '',
            accountingPeriod: ''
        })

        const saveExit = () => {
            store.dispatch('financialclosingperiod/add', inputForm.value);
            alert("Record saved successfully")
            router.push('/financialclosing')
        }

        const close = () => {
            router.push("/financialclosing");
        }

        onMounted(() => {
            masterService.getDetailCode("FINANCEYR")
            .then((res) => {
                financialYearLs.value = res.data
            })
            .catch(e => {
                console.error(e.response.status);
            }).then(() =>
            masterService.getDetailCode("FINMONTH")
            .then((res) => {
                financialMonthLs.value = res.data
            })
            .catch(e => {
                console.error(e.response.status);
            })
            ).then(() =>
            masterService.getDetailCode("MONTH")
            .then((res) => {
                calenderMonthLs.value = res.data
            })
            .catch(e => {
                console.error(e.response.status);
            })
            ).then(() =>
            masterService.getDetailCode("OPENCLOSESTATUS")
            .then((res) => {
                statusLs.value = res.data
            })
            .catch(e => {
                console.error(e.response.status);
            })
            )
        });
        return {
            inputForm, 
            close,
            financialYearLs,
            financialMonthLs,
            calenderMonthLs,
            statusLs,
            saveExit,
        }
    },
}

</script>

<style scoped>
.pagePanel {
    color: #4169E1;
}
</style>