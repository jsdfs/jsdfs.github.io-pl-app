<template>
    <div class="card">
        <template v-if="dataList != null">
            <DataTable :value="dataList?.list" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm"
                editMode="row"
                v-model:editingRows="editingRows"
                @row-edit-save="onRowEditSave"
            >
                <Column headerStyle="width: 3rem" />
                <Column field="occupationCode" header="Occupation Code" :sortable="true" style="width:20%">
                    <template #editor="slotProps" >
                        <InputText v-model="slotProps.data.occupationCode" style="width:100%"/>
                    </template>
                </Column>
                <Column field="occupationDesc" header="Occupation Description" :sortable="true" style="width:30%">
                    <template #editor="slotProps" >
                        <InputText v-model="slotProps.data.occupationDesc" style="width:100%"/>
                    </template>
                </Column>

                <Column header="Occupation Class" style="width:25%" >
                    <template #body="slotProps">
                        {{ formatDesc(slotProps.data.occupationClass)}}
                    </template>
                    <template #editor="slotProps" >
                        <Dropdown v-model="slotProps.data.occupationClass" :options="classList"  optionLabel="desc" optionValue="code" class="editview"></Dropdown>
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
        </template>
    </div>

</template>

<script>
import { ref, toRef } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'OccupationDataTable',
    components: {
    },
    props: {
        tableData: Object,
        oClassDropDownLs: Object
    },
    setup (props, { emit }) {
        const store = useStore();
        const dataList = toRef(props, 'tableData');
        const classList = toRef(props, 'oClassDropDownLs');
        const expandedRows = ref([]);
        const editingRows = ref([]);


        const onRowEditSave = (event) => {
            let { newData, index } = event;

            store.dispatch('occupation/updateOccupation', newData);
            alert("Record saved successfully")
            dataList.value.list[index] = newData;
            emit('searchFunc');
        }

        const deleteData = (record) => {
            const answer = confirm("Confirm delete this record ?");

            if(answer){
                store.dispatch('occupation/deleteOccupation', record.seqId);
                alert('Record deleted successfully')
            }
            emit('searchFunc');
        }

        const formatDesc = (value) => {

            const r = classList.value.filter(elem => { return elem.code === value })

            return r[0].desc;
        }

        return {
            dataList,
            expandedRows,
            editingRows,    
            classList,
            formatDesc,       
            deleteData,
            onRowEditSave,
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
