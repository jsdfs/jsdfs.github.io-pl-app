<template>
    <div class="card">
        <Toast />
        <template v-if="dataList != null">
            <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm"
                v-model:expandedRows="expandedRows"
                editMode="row"
                v-model:editingRows="editingRows"
                @row-edit-save="onRowEditSave"
            >
                <Column field="distributionChannelDesc" header="Distribution Channel" :sortable="true" style="width:30%">
                    <template #editor="slotProps">
                        <Dropdown id="distributionChannel" v-model="slotProps.data.distributionChannel" :options="distributionChannelLs" optionLabel="desc" optionValue="code" placeholder="Select one..." class="editview" />
                    </template>
                </Column>
                <Column field="tatStatusDesc" header="TAT Stage" :sortable="true" style="width:30%">
                    <template #editor="slotProps">
                        <Dropdown id="tatStage" v-model="slotProps.data.tatStatus" :options="tatStageLs" optionLabel="desc" optionValue="code" placeholder="Select one..." class="editview" />
                    </template>
                </Column>
                <Column field="standardTatDays" header="Standard TAT (days)" bodyStyle="text-align: right" :sortable="true" style="width:15%" class="rightAlign" headerStyle="text-align: right" >
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data.standardTatDays" style="text-align:right; width:100%;" />
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
import { useToast } from 'primevue/usetoast';

export default {
    name: 'StandardTATDataTable',
    components: {
    },
    props: {
        tableDataWithDesc: Object,
        distributionChannelLs: Object,
        tatStageLs: Object,
    },
    setup (props, {emit}) {
        const store = useStore();
        const toast = useToast();
        const dataList = toRef(props, 'tableDataWithDesc');
        const distributionChannelList = toRef(props, 'distributionChannelLs');
        const tatStageList = toRef(props, 'tatStageLs');
        const editingRows = ref([]);


        const onRowCollapse = (event) => {
            toast.add({severity: 'success', summary: 'Data Collapsed', detail: event.code, life: 2000})
        }

        const onRowEditSave = (event) => {
            let { newData, index } = event;

            store.dispatch('standardtat/updateStandardTat', newData).then(() => {
                newData.distributionChannelDesc = findDistChannelDesc(newData.distributionChannel)
                newData.tatStatusDesc = findStageDesc(newData.tatStatus)
                dataList.value[index] = newData;     
            }) 
        }


        const deleteData = (record) => {
            const answer = confirm("Confirm delete this record ?");

            if(answer){
                store.dispatch('standardtat/deleteStandardTat', record.seqId).then(() => {
                    emit('search')
                    alert('Record deleted successfully')
                })
            }
        }

        const findDistChannelDesc = (value) => {

            let desc = ""
            

            for(let k = 0; k < distributionChannelList.value.length; k++){
                if(distributionChannelList.value[k].code == value){
                    desc = distributionChannelList.value[k].desc
                }
            }

            return desc       

        }

        const findStageDesc = (value) => {

            let desc = ""
            

            for(let k = 0; k < tatStageList.value.length; k++){
                if(tatStageList.value[k].code == value){
                    desc = tatStageList.value[k].desc
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
            distributionChannelList,
            tatStageList,        
            onRowCollapse,
            onRowEditSave,
            deleteData,
            findDistChannelDesc,
            findStageDesc,
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
