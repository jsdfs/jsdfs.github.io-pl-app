<template>
    <div class="card">
        <Toast />
        <template v-if="dataList != null">
            <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" selectionMode="single"
            @row-click="rowClick"
            >
                <Column field="loadCodeDesc" headerStyle="text-align:left;" header="Loading/Extra Premium Code" :sortable="true" style="width:30%;">
                </Column>
                <Column field="effectiveDateFrom" header="Effective Date (From)" :sortable="true" style="width:15%;">
                    <template #body="slotProps">
                        {{ dateFormat(slotProps.data.effectiveDateFrom)}}
                    </template>
                </Column>
                <Column field="effectiveDateTo" header="Effective Date (To)"  :sortable="true" style="width:15%;">
                    <template #body="slotProps">
                        {{ dateFormat(slotProps.data.effectiveDateTo)}}
                    </template>
                </Column>
                <Column field="minLoadRate" header="Min Per Mile / %" bodyStyle="text-align:right" :sortable="true" style="width:20%;" class="rightAlign" >
                </Column>
                <Column field="maxLoadRate" header="Max Per Mile / %" bodyStyle="text-align:right" :sortable="true" style="width:20%;"  class="rightAlign">
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
    name: 'LoadingRangeDataTable',
    components: {
    },
    props: {
        tableDataWithDesc: Object,
    },
    setup (props) {
        const dataList = toRef(props, 'tableDataWithDesc');

        const router = useRouter();

        const store = useStore();

        const rowClick = (e) => { 
            store.dispatch('loadingrange/set', e.data);
            router.push("/loadingrangedet");
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
