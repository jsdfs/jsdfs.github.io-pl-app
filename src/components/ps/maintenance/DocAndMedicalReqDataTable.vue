<template>
    <div class="card">
        <Toast />
        <template v-if="dataList != null">
            <DataTable :value="dataList.list" dataKey="seqId" responsiveLayout="scroll" selectionMode="single"
                @row-click="rowClick"
            >
                <Column field="tableNo" header="Table No" :sortable="true" style="width:15%">
                </Column>
                <Column field="effectiveDateFrom" header="Effective Date From" :sortable="true" style="width:10%">
                    <template #body="slotProps">
                        {{ dateFormat(slotProps.data.effectiveDateFrom)}}
                    </template>
                </Column>
                <Column field="effectiveDateTo" header="Effective Date To" :sortable="true" style="width:10%">
                    <template #body="slotProps">
                        {{ dateFormat(slotProps.data.effectiveDateTo)}}
                    </template>
                </Column>
                <Column field="entryAgeFrom" header="Entry / Attained Age (From)" :sortable="true" style="width:10%" bodyStyle="text-align:right;">
                </Column>
                <Column field="entryAgeTo" header="Entry / Attained Age (To)" :sortable="true" style="width:10%" bodyStyle="text-align:right;">
                </Column>
                <Column field="sarFrom" header="Sum At Risk (From)" :sortable="true" style="width:10%" bodyStyle="text-align:right;">
                </Column>
                <Column field="sarTo" header="Sum At Risk (To)" :sortable="true" style="width:10%" bodyStyle="text-align:right;">
                </Column>
                <Column field="medical" header="Medical (M/N)" :sortable="true" style="width:10%">
                </Column>
                <Column field="medicalDocTableNo" header="Document And Medical Table" :sortable="true" style="width:15%">
                </Column>
            </DataTable>
        </template>
    </div>

</template>

<script>
import { toRef } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

export default {
    name: 'DocAndMedicalReqDataTable',
    components: {
    },
    props: {
        tableData: Object,
    },
    setup (props) {
        const dataList = toRef(props, 'tableData');

        const router = useRouter();

        const store = useStore();

        const rowClick = (e) => { 
            store.dispatch('docandmedicalreq/set', e.data);
            router.push("/docandmedicalreqdet");
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

<style>

.p-sortable-column-icon{

    display: none;
}

</style>