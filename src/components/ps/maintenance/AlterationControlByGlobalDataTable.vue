<template>
    <div class="card">
        <Toast />
        <template v-if="dataList != null">
            <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" selectionMode="single"
                @row-click="rowClick"
            >
                <Column field="taskTypeDesc" header="Task Type" :sortable="true">
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
    name: 'AlterationControlByGlobalDataTable',
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
            store.dispatch('alterationcontrol/set', e.data);
            router.push("/alterationcontroldet");
        }


        return {
            dataList,
            rowClick,

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