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
        @row-edit-save="onRowEditSave"
        >
            <template #header>
            <div class="flex justify-content-between">
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <Dropdown
                        style="width: 16rem;"
                        v-model="searchForm.tableNo"
                        :options="nationList"
                        optionLabel="desc"
                        optionValue="code"
                        placeholder="Select Table No"
                        @change="changed()"
                    />
                    <Button type="button" icon="pi pi-filter-slash" class="p-button-rounded p-button-text" @click="clearFilter()"/>
                </span>
                <NationalityAddModal
                    :data="inputForm"
                    @reload-table-data="changed"
                    :nationalityLs="nationalityLs"
                />
            </div>
            </template>
            <template #empty>
                No record found.
            </template>

            <Column field="desc" header="Nationality" :sortable="true" style="width:60%;">
                <template #editor="slotProps">
                    <Dropdown v-model="slotProps.data.code" :options="optionArr" optionLabel="desc" optionValue="code" style="width:100%;"/>
                </template>
            </Column>

            <Column :rowEditor="true" headerStyle="width:10rem" bodyStyle="text-align:center" header="Action">
            </Column>
            <Column >
                <template #body="slotProps">
                    <div class="table-header">
                        <div><Button type="button" icon="pi pi-trash" class="p-button-rounded p-button-warning" style="margin-right: .5em" @click="deleteData(slotProps.data)" /></div>
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { toRef, ref, onBeforeUpdate, onMounted } from 'vue';
import masterDataService from '@/service/admin/masterDataService';
import NationalityAddModal from '@/components/nb/maintenance/NationalityAddModal';
import { useStore } from 'vuex'       

export default {
    name: 'NationalityDataTable',
    components: {
        NationalityAddModal
    },
    props: {
        tableData: Object,
        nationalityLs: Object,
        inputForm: Object,
    },
    setup(props, { emit }) {
        const store = useStore()
        const dataList = toRef(props, 'tableData');
        const nationList = toRef(props, 'nationalityLs')
        const searchForm = toRef(props, 'inputForm');
        const editingRows = ref([]);
        const optionArr = ref({});
        const displayArr = ref({});

        onMounted(() => {
            masterDataService.getDetailByHeaderCode('NATION').then(res => {
                optionArr.value = res.data;
            });

        })
        onBeforeUpdate(() => {
            displayArr.value = dataList.value.list.map(concateDesc)
        })


        const concateDesc = (mastercode) => {
            const r = optionArr.value.filter(elem => { return elem.code === mastercode.nationalCode })

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
                nationalCode: newData.code
            }
                    
            store.dispatch('nationality/save', updateObj)

            dataList.value.list[index] = updateObj;
        }

        const deleteData = (record) => {
            const answer = confirm("Confirm delete this record ?");

            if(answer){
                store.dispatch('nationality/delete', record.seqId).then(() => {
                    emit('search') 
                    alert('Record deleted successfully')
                })
            }
        }

        const changed = () => {
            emit('search')
        }

        const clearFilter = () => {
            emit('clearFilter')
        }

        return {
            changed,
            deleteData,
            editingRows,
            clearFilter,
            concateDesc,
            displayArr,
            onRowEditSave,
            optionArr,
            dataList,
            searchForm,
            nationList,
        }
    }
}
</script>
