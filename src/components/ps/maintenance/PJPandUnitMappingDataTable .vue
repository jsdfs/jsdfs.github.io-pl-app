<template>
    <div class="card">
        <DataTable :value="dataList?.list" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm"
                editMode="row"
                v-model:editingRows="editingRows"
                @row-edit-save="onRowEditSave">
            <Column headerStyle="width: 3rem" />

            <Column header="PJP" style="width:37%" >
                <template #body="slotProps">
                    {{ formatPjpDesc(slotProps.data.pjp)}}
                </template>
                <template #editor="slotProps" >
                    <Dropdown v-model="slotProps.data.pjp" :options="pjpList"  optionLabel="desc" optionValue="code" class="editview"></Dropdown>
                </template>
            </Column>

            <Column header="Unit" style="width:37%" >
                <template #body="slotProps">
                    {{ formatUnitDesc(slotProps.data.unit)}}
                </template>
                <template #editor="slotProps" >
                    <Dropdown v-model="slotProps.data.unit" :options="unitList"  optionLabel="desc" optionValue="code" class="editview"></Dropdown>
                </template>
            </Column>
            <Column :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center" header="Action" style="width:16%" class="centerAlign"></Column>
            <Column style="width:10%">
                <template #body="slotProps">
                    <div class="table-header">
                        <Button type="button" icon="pi pi-trash" class="p-button-text p-button-warning" @click="deleteData(slotProps.data)" />
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { toRef, ref } from 'vue';
import { useStore } from 'vuex'

export default {
    name: 'PJPandUnitMappingDataTable ',
    props: {
        tableData: Object,
        unitLs: Object,
        pjpLs: Object,
    },
    setup(props, { emit }) {
        const store = useStore()
        const dataList = toRef(props, 'tableData');
        const pjpList = toRef(props, 'pjpLs');
        const unitList = toRef(props, 'unitLs');
        const expandedRows = ref([]);
        const editingRows = ref([]);

        const formatPjpDesc = (value) => {

            const r = pjpList.value.filter(elem => { return elem.code === value })

            return r[0].desc;
        }

        const formatUnitDesc = (value) => {

            const r = unitList.value.filter(elem => { return elem.code === value })

            return r[0].desc;
        }

        const onRowEditSave = (event) => {
            let { newData, index } = event;

            store.dispatch('pjpandunitmapping/save', newData);
            alert("Record saved successfully")
            dataList.value.list[index] = newData;

            emit('searchFunc');
        }

        const deleteData = (record) => {
            const answer = confirm("Confirm delete this record ?");

            if(answer){
                store.dispatch('pjpandunitmapping/delete', record.seqId);
                alert('Record deleted successfully')
            }
            emit('searchFunc');
        }

        return {
            formatPjpDesc,
            formatUnitDesc,
            dataList,
            pjpList,
            unitList,
            expandedRows,
            editingRows,
            onRowEditSave,
            deleteData,
        }
    }
}
</script>