<template>
    <div class="card">
        <DataTable :value="dataList?.list" dataKey="seqId" responsiveLayout="scroll" @row-click="rowClick" selectionMode="single">
            <Column field="keyType" header="Key Type" :sortable="true" style="width:20%">
                <template #editor="slotProps">
                    <InputText v-model="slotProps.data.keyType" />
                </template>
            </Column>
            <Column field="currency" header="Currency Type" :sortable="true" style="width:10%">
                <template #editor="slotProps">
                    <InputText v-model="slotProps.data.currency" />
                </template>         
            </Column>
            <Column field="effectiveDateFrom" header="Effective Date From" :sortable="true" style="width:15%">
                <template #body="slotProps">
                    {{ dateFormat(slotProps.data.effectiveDateFrom)}}
                </template>
            </Column>
            <Column field="effectiveDateTo" header="Effective Date To" :sortable="true" style="width:15%">
                <template #body="slotProps">
                    {{ dateFormat(slotProps.data.effectiveDateTo)}}
                </template>    
            </Column>
            <Column field="sell" header="Selling Price" :sortable="true" class="rightAlign" bodyStyle="text-align:right" style="width:20%">
                <template #body="slotProps">
                    {{format(slotProps.data.sell)}}
                </template>        
            </Column>
            <Column field="buy" header="Buying Price" :sortable="true" class="rightAlign" bodyStyle="text-align:right" style="width:20%">
                <template #body="slotProps">
                    {{format(slotProps.data.buy)}}
                </template>        
            </Column>

        </DataTable>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { toRef } from 'vue';
import { useStore } from 'vuex'

export default {
    name: 'NBExchangeRateDataTable',
    props: {
        tableData: Object,
        currencyLs: Object,
    },
    setup(props) {
        const router = useRouter();
        const dataList = toRef(props, 'tableData');
        const currency = toRef(props, 'currencyLs');
        const store = useStore()

        const rowClick = (e) => { 
            store.dispatch('exchangerate/set', e.data);
            router.push("nbexchangeratedet");
        }

        const format = (value) => { 
            return parseFloat(value).toFixed(5)
        }

        const dateFormat = (value) => {
            var ddt = String(new Date(value).getDate()).padStart(2, '0');
            var mmt = String(new Date(value).getMonth() + 1).padStart(2, '0'); 
            var yyyyt = new Date(value).getFullYear();
    
            var toDate = ddt + "/" + mmt + "/" + yyyyt;

            return toDate
        }


        return {
            rowClick,
            dataList,
            format,
            currency,
            dateFormat
        }
    }
}
</script>