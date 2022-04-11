<template>
    <div class="card">
        <Toast />
        <template v-if="dataList != null">
            <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" selectionMode="single"
                @row-click="rowClick"   
            >
                <Column field="underWriterGroupTableDesc" header="Underwriter Group Table" :sortable="true" style="width:10%" width="20px">
                </Column>
                <Column field="currency" header="Currency" :sortable="true" style="width:10%;">
                </Column>
                <Column field="divisionDesc" header="Division" :sortable="true" style="width:10%;">
                </Column>
                <Column field="uwLevelDesc" header="Level" :sortable="true" style="width:10%;">
                </Column>
                <Column field="effectiveDateFrom" header="Effective Date (From)" :sortable="true" style="width:10%;">
                    <template #body="slotProps">
                        {{ dateFormat(slotProps.data.effectiveDateFrom)}}
                    </template>
                </Column>
                <Column field="effectiveDateTo" header="Effective Date (To)" :sortable="true" style="width:10%;">
                    <template #body="slotProps">
                        {{ dateFormat(slotProps.data.effectiveDateTo)}}
                    </template>
                </Column>
                <Column field="sarFrom" header="Sum At Risk (From)" headerStyle="text-align:right;" bodyStyle="text-align:right; min-width:10em;" :sortable="true" style="width:10%;">
                </Column>
                <Column field="sarTo" header="Sum At Risk (To)" headerStyle="text-align:right" bodyStyle="text-align:right; min-width:10em;" :sortable="true" style="width:10%;">
                </Column>
                <Column field="annualPremiumFrom" header="Annual Premium (From)" headerStyle="text-align:right; min-width:10em;" bodyStyle="text-align:right" :sortable="true" style="width:10%;">
                </Column>
                <Column field="annualPremiumTo" header="Annual Premium (To)" headerStyle="text-align:right; min-width:10em;" bodyStyle="text-align:right" :sortable="true" style="width:10%;">
                </Column>
            </DataTable>
        </template>
    </div>

</template>

<script>
import { toRef } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'

export default {
    name: 'UwApprovalLimitDataTable',
    components: {
    },
    props: {
        tableDataWithDesc: Object,
        uwLevelLs: Object,
        uwGroupLs: Object,
    },
    setup (props) {

        const store = useStore();

        const dataList = toRef(props, 'tableDataWithDesc');

        const router = useRouter();

        const rowClick = (e) => { 
            store.dispatch('uwapprovallimit/set', e.data);
            router.push("/uwapprovallimitdet");
        }

        const dateFormat = (value) => {

            var ddt = String(new Date(value).getDate()).padStart(2, '0');

            var mmt = String(new Date(value).getMonth() + 1).padStart(2, '0');

            var yyyyt = new Date(value).getFullYear();
   

            var toDate = ddt + "/" + mmt + "/" + yyyyt;


            return toDate

        }


        return {
            dataList,
            rowClick, 
            dateFormat,
        }
    },
}
</script>

<style lang="scss" scoped>
.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}

.orders-subtable {
    padding: 1rem;
}




</style> 
