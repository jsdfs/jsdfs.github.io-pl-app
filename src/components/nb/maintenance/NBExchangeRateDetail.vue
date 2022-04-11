<template>
    <div class="card p-fluid">
        <div>
            <div style="float:left" class="flex justify-content-start flex-wrap card-container green-container">
                <div class="flex align-items-center justify-content-center"><Button icon="pi pi-chevron-left" type="button" class="p-button-outlined mr-2 mb-2" @click="close" /></div> 
            </div>  
            <div style="float:right" class="flex justify-content-end flex-wrap card-container green-container">
                <div class="flex align-items-center justify-content-center"><Button icon="pi pi-trash" type="button" class="p-button-warning mr-2 mb-2" @click="delRecord" /> </div>
                <div class="flex align-items-center justify-content-center"><Button icon="pi pi-check" type="button" style="background-color:#000080;" class="p-button-info mr-2 mb-2" @click="saveExit" /> </div>     
            </div>  
        </div>
        <div class="card p-fluid">
            <div class="p-fluid formgrid grid">
                <div class="field col-12 md:col-6">
                    <label for="keyType">Key Type</label>
                    <InputText class="p-inputtext-sm" id="keyType" type="text" v-model="inputForm.keyType" disabled/>
                </div>
                <div class="field col-12 md:col-6">
                    
                </div>
                <div class="field col-12 md:col-6">
                    <label for="effectiveDateFrom">Effective Date From</label>
                    <Calendar class="p-inputtext-sm" id="effectiveDateFrom" dateFormat="dd/mm/yy" v-model="inputForm.effectiveDateFrom" :showIcon="true" :showOnFocus="false" />
                </div>
                <div class="field col-12 md:col-6"> 
                    <label for="effectiveDateTo">Effective Date To</label>
                    <Calendar class="p-inputtext-sm" id="effectiveDateTo" dateFormat="dd/mm/yy" v-model="inputForm.effectiveDateTo" :showIcon="true" :showOnFocus="false" /> 
                </div>
                <div class="field col-12 md:col-6">
                    <label for="currency">Currency Type</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.currency" id="currency" :options="currencyLs" optionLabel="desc" optionValue="code" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    
                </div>
                <div class="field col-12 md:col-6">
                    <label for="sell">Selling Price</label>
                    <InputText class="p-inputtext-sm" id="sell" type="text" v-model="inputForm.sell" />
                </div>
                <div class="field col-12 md:col-6">
                    
                </div>            
                <div class="field col-12 md:col-6">
                    <label for="buy">Buying Price</label>
                    <InputText class="p-inputtext-sm" id="buy" type="text" v-model="inputForm.buy" />
                </div>
                <div class="field col-12 md:col-6">
                    
                </div>   
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';


export default {
    setup() {
        const router = useRouter();
        const data = computed(() => store.state.exchangerate.exchangeRateDetail);
        const currencyLs = computed(() => store.getters['master/getMastersObj'])
        const store = useStore();

        onMounted(() => {
            store.dispatch('breadcrumb/set', path);
        })
 
        const path = 14;

        const close = () => {
            router.push("/nbexchangerate");
        }

        const inputForm = ref({
            seqId: data.value.seqId,
            keyType: data.value.keyType,
            effectiveDateFrom: new Date(data.value.effectiveDateFrom),
            effectiveDateTo: new Date(data.value.effectiveDateTo),
            currency: data.value.currency,
            sell: parseFloat(data.value.sell).toFixed(5),
            buy: parseFloat(data.value.buy).toFixed(5),
        })

        const saveExit = () => {
            inputForm.value.sell = parseFloat(inputForm.value.sell).toFixed(5)
            inputForm.value.buy = parseFloat(inputForm.value.buy).toFixed(5)
            store.dispatch('exchangerate/save', inputForm.value)
            alert("Record saved successfully")
            router.push("/nbexchangerate");
        }

 
        const delRecord = () => {    
            const answer = confirm("Confirm delete this record ?");

            if(answer){
                store.dispatch('exchangerate/delete', inputForm.value.seqId);
                alert('Record deleted successfully')
                router.push("/nbexchangerate");
            }
        }

        const format = (value) => { 
            return value + ' - ' + "UW SAR EXCHANGE RATE"
        }

        return {
            inputForm, 
            saveExit,
            format,
            close,
            delRecord,
            currencyLs,
        }
    },
}

</script>

<style scoped>
.pagePanel {
    color: #4169E1;
}
</style>