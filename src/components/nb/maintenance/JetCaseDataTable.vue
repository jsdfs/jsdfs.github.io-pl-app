<template>
    <div class="card">
        <DataTable :value="dataList?.list" dataKey="seqId" responsiveLayout="scroll" @row-click="rowClick" selectionMode="single" >
            <Column field="eligibleProductCode" header="Eligible Product Code" :sortable="true" style="width:40%"></Column>
            <Column field="effectiveDateFrom" header="Effective Date From" :sortable="true" style="width:30%">
                <template #body="slotProps">
                    {{ dateFormat(slotProps.data.effectiveDateFrom)}}
                </template>  
            </Column>
            <Column field="effectiveDateTo" header="Effective Date To" :sortable="true" style="width:30%">
                <template #body="slotProps">
                    {{ dateFormat(slotProps.data.effectiveDateTo)}}
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'

export default {
    name: 'JetCaseDataTable',
    props: {
        dataList: Object,
    },
    setup() {
        const router = useRouter();
        const store = useStore()

        const rowClick = (e) => { 
            store.dispatch('jetcase/set', e.data);
            router.push("/jetcasedet");
        }

        const dateFormat = (value) => {
            var ddt = String(new Date(value).getDate()).padStart(2, '0');
            var mmt = String(new Date(value).getMonth() + 1).padStart(2, '0'); 
            var yyyyt = new Date(value).getFullYear();
    
            var date = ddt + "/" + mmt + "/" + yyyyt;

            return date
        }

        return {
            rowClick,
            dateFormat,
        }
    }
}
</script>