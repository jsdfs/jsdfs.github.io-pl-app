<template>
    <div class="card">
        <template v-if="dataList != null">
            <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm"
                v-model:expandedRows="expandedRows"
                editMode="row"
                v-model:editingRows="editingRows"
                @row-edit-save="onRowEditSave"
            >
                <Column field="requirementCodeDesc" header="Document And Medical Description" :sortable="true" style="width:30%">
                    <template #editor="slotProps">
                        <Dropdown id="requirementCodeDesc" v-model="slotProps.data.requirementCode" :options="requirementCodeLs" optionLabel="desc" optionValue="code" placeholder="Select one..." class="editview" />
                    </template>
                </Column>
                <Column field="firstReminder" header="1st Reminder" bodyStyle="text-align: right" :sortable="true" style="width:15%">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data.firstReminder" style="text-align:right; width:100%;" />
                    </template>
                </Column>
                <Column field="secondReminder" header="2nd Reminder" bodyStyle="text-align: right" :sortable="true" style="width:15%" class="rightAlign" headerStyle="text-align: right" >
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data.secondReminder" style="text-align:right; width:100%;" />
                    </template>
                </Column>
                <Column field="expiryPeriod" header="Expiry" bodyStyle="text-align: right" :sortable="true" style="width:15%" class="rightAlign" headerStyle="text-align: right" >
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data.expiryPeriod" style="text-align:right; width:100%;" />
                    </template>
                </Column>
                <Column :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center" header="Action" class="centerAlign" style="width:15%"></Column>
                <Column style="width:10%">
                    <template #body="slotProps">
                        <div class="table-header flex justify-content-end">
                            <Button type="button" icon="pi pi-trash" class="p-button-rounded p-button-text p-button-warning" style="margin-right: .5em;" @click="deleteData(slotProps.data)" />
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
    name: 'DocAndMedicalCodeDataTable',
    components: {
    },
    props: {
        tableDataWithDesc: Object,
        requirementCodeLs: Object,
    },
    setup (props, {emit}) {
        const store = useStore();
        const dataList = toRef(props, 'tableDataWithDesc');
        const requirementCodeList = toRef(props, 'requirementCodeLs');
        const editingRows = ref([]);


        const onRowEditSave = (event) => {
            let { newData, index } = event;

            store.dispatch('docandmedicalcode/updateDocAndMedicalCode', newData).then(() => {
                newData.requirementCodeDesc = findRequirementCodeDesc(newData.requirementCode)
                dataList.value[index] = newData;     
            }) 
        }


        const deleteData = (record) => {
            const answer = confirm("Confirm delete this record ?");

            if(answer){
                store.dispatch('docandmedicalcode/deleteDocAndMedicalCode', record.seqId).then(() => {
                    emit('search')
                    alert('Record deleted successfully')
                })
            }
        }

        const findRequirementCodeDesc = (value) => {

            let desc = ""
            

            for(let k = 0; k < requirementCodeList.value.length; k++){
                if(requirementCodeList.value[k].code == value){
                    desc = requirementCodeList.value[k].desc
                }
            }

            return desc       

        }


        const search = () => {

            emit('search')

        }


        return {
            dataList,
            editingRows,  
            requirementCodeList,       
            onRowEditSave,
            deleteData,
            findRequirementCodeDesc,
            search

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
