<template>
    <div class="card">
        <DataTable :value="dataList?.list" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm"
                editMode="row"
                v-model:editingRows="editingRows"
                @row-edit-save="onRowEditSave">
            <Column headerStyle="width: 3rem" />

            <Column field="postCode" header="Post Code" :sortable="true" style="width:30%">
                <template #editor="slotProps" >
                    <InputText v-model="slotProps.data.postCode" style="width:100%"/>
                </template>
            </Column>

            <Column header="Servicing Unit" style="width:45%" >
                <template #body="slotProps">
                    {{ formatDesc(slotProps.data.servUnitCode)}}
                </template>
                <template #editor="slotProps" >
                    <Dropdown v-model="slotProps.data.servUnitCode" :options="serveUnitLs"  optionLabel="desc" optionValue="code" class="editview"></Dropdown>
                </template>
            </Column>
            <Column :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center" header="Action" style="width:15%" class="centerAlign"></Column>
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
    name: 'ServicingUnitAndPostcodeDataTable',
    props: {
        tableData: Object,
        serveUnit: Object,
    },
    setup(props, { emit }) {
        const store = useStore()
        const dataList = toRef(props, 'tableData');
        const serveUnitLs = toRef(props, 'serveUnit');
        const expandedRows = ref([]);
        const editingRows = ref([]);

        const formatDesc = (value) => {

            const r = serveUnitLs.value.filter(elem => { return elem.code === value })

            return r[0].desc;
        }

        const onRowEditSave = (event) => {
            let { newData, index } = event;

            store.dispatch('servicingunit/save', newData);
            alert("Record saved successfully")
            dataList.value.list[index] = newData;

            emit('searchFunc');
        }

        const deleteData = (record) => {
            const answer = confirm("Confirm delete this record ?");

            if(answer){
                store.dispatch('servicingunit/delete', record.seqId);
                alert('Record deleted successfully')
            }
            emit('searchFunc');
        }

        return {
            formatDesc,
            dataList,
            serveUnitLs,
            expandedRows,
            editingRows,
            onRowEditSave,
            deleteData,
        }
    }
}
</script>