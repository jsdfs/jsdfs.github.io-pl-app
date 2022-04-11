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
                    <label for="keyType">Key Type</label>
                    <InputText id="keyType" type="text"  v-model="inputForm.keyType" />
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
                    <label for="currencyType">Currency Type</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.currency" id="currencyType" :options="currencyTypeLs" optionLabel="value" optionValue="value" placeholder="Select one..." />
                </div>

                <div class="field col-12 md:col-6">
                    
                </div>
                <div class="field col-12 md:col-6">
                    <label for="sellingPrice">Selling Price</label>
                    <InputText class="p-inputtext-sm" id="sell" type="text" v-model="inputForm.sell" />
                </div>
                <div class="field col-12 md:col-6">
                    
                </div>            
                <div class="field col-12 md:col-6">
                    <label for="buyingPrice">Buying Price</label>
                    <InputText class="p-inputtext-sm" id="buy" type="text" v-model="inputForm.buy" />
                </div>
                <div class="field col-12 md:col-6">
                    
                </div>     
                </div>                                                 
            </div>
            </div>   
        </div>   
    </div>
 
</template>

<script>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {
    name: 'NBExchangeRateAdd',
    components: {

    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const store = useStore();

        const currencyLs = JSON.parse(route.params.currency)

        const close = () => {
            router.push("/nbexchangerate");
        }

        const saveExit = () =>{
            inputForm.value.sell = parseFloat(inputForm.value.sell).toFixed(5)
            inputForm.value.buy = parseFloat(inputForm.value.buy).toFixed(5)
            store.dispatch('exchangerate/add', inputForm.value);
            alert("Record added successfully")
            router.push("/nbexchangerate");
        }

        const inputForm = ref({
            keyType: "",
            effectiveDateFrom: "",
            effectiveDateTo: "",
            currency: "",
            sell: "",
            buy: "",
        })

        const currencyTypeLs = []

        for(let i = 0; i < Object.keys(currencyLs).length; i++){
            currencyTypeLs.push({value: currencyLs[i].desc})
        }

        return {
            inputForm,
            close,
            saveExit,
            currencyTypeLs,
            currencyLs
        }
    },
}
</script>