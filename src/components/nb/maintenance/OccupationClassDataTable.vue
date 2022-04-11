<template>
    <div class="card">
    <DataTable 
    :value="displayArr" 
    dataKey="seqId" 
    responsiveLayout="scroll" 
    editMode="row" 
    filterDisplay="menu" 
    :globalFilterFields="['tableNo']"
    v-model:editingRows="editingRows"
    v-model:filters="filters1"
    class="p-datatable-sm"
    @row-edit-save="onRowEditSave"
    >
        <template #header>
            <div class="flex justify-content-between">
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <Dropdown
                        style="width: 16rem;"
                        v-model="searchForm.tableNo"
                        :options="occClassLs"
                        optionLabel="desc"
                        optionValue="code"
                        placeholder="Select Table No"
                        @change="changed()"
                    />
                    <Button type="button" icon="pi pi-filter-slash" class="p-button-rounded p-button-text" @click="clearFilter()"/>
                </span>
                <div>
                <OccupationClassAddModal
                    :data="inputForm"
                    :oClassDropDownLs="oClassDropDownLs"
                    @reload-table-data="changed"
                />
                </div>
            </div>
            
        </template>
        <template #empty>
            No record found.
        </template>

        <Column field="desc" header="Occupation Class" :sortable="true" style="width:60%;">
            <template #editor="slotProps">
                <Dropdown v-model="slotProps.data.code" :options="classList" optionLabel="desc" optionValue="code" style="width:100%;"/>
            </template>

        </Column>

        <Column :rowEditor="true" headerStyle="width:10rem" bodyStyle="text-align:center" header="Action">
        </Column>
        <Column >
            <template #body="slotProps">
                <div class="table-header">
                    <div><Button type="button" icon="pi pi-trash" class="p-button-rounded p-button-text p-button-warning" style="margin-right: .5em" @click="deleteData(slotProps.data)" /></div>
                </div>
            </template>
        </Column>
    </DataTable>

    </div>

</template>

<script>
import { onBeforeUpdate, ref, toRef } from 'vue';
import masterDataService from '@/service/admin/masterDataService';
import { useStore } from 'vuex';
import OccupationClassAddModal from '@/components/nb/maintenance/OccupationClassAddModal'

export default {
    name: 'OccupationClassDataTable',
    components: {
        OccupationClassAddModal
    },
    props: {
        tableData: Object,
        inputForm: Object,
        oClassDropDownLs: Object,
    },
    setup(props, { emit }) {
        const dataList = toRef(props, 'tableData');
        const optionArr = ref({});
        const displayArr = ref({});
        const occClassLs = ref({});
        const classList = toRef(props, 'oClassDropDownLs');
        const store = useStore();
        const editingRows = ref([]);
        const searchForm = toRef(props, 'inputForm');


        const deleteData = (record) => {
            const answer = confirm("Confirm delete this record ?");

            if(answer){
                store.dispatch('occupationclass/delete', record.seqId).then(() => {
                    emit('search') 
                    alert('Record deleted successfully')
                })
            }
        }

        onBeforeUpdate(() => {
            masterDataService.getDetailByHeaderCode('OCCUCLS').then(res => {
                optionArr.value = res.data;
            });
            
            displayArr.value = dataList.value.list.map(concateDesc)

            masterDataService.getDetailByHeaderCode('JETOCCCLSTBL').then(res => {
                occClassLs.value = res.data;
            });
        })

        const concateDesc = (mastercode) => {
            const r = optionArr.value.filter(elem => { return elem.code === mastercode.occupationClassCode })

            return {
                seqId: mastercode.seqId,
                code: r[0].code,
                desc: r[0].desc
            }
        }

        const onRowEditSave = (event) => {
            let { newData, index } = event;

            let updateObj = {
                seqId:  dataList.value.list[index].seqId,
                tableNo: dataList.value.list[index].tableNo,
                occupationClassCode: newData.code
            }
                    
            store.dispatch('occupationclass/save', updateObj)

            dataList.value.list[index] = updateObj;
        }

        const clearFilter = () => {
            emit('clearFilter')
        }

        const changed = () => {
            emit('search')
        }

        return {
            deleteData,
            dataList,
            onRowEditSave,
            clearFilter,
            changed,
            searchForm,
            optionArr,
            occClassLs,
            classList,
            displayArr,
            concateDesc,
            editingRows,
        }
    }
}
</script>

