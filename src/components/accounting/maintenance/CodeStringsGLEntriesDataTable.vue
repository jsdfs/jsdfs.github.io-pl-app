<template>

<div class="card">
        <DataTable :value="dataList?.list" dataKey="seqId" responsiveLayout="scroll" @row-click="rowClick" selectionMode="single" >
                <Column header="Process Code">
                        <template #body="slotProps">
                                {{formatProcessType(slotProps.data.processType)}}
                        </template>
                </Column>
                <Column field="tableName" header="Table Name Code">
                        <template #body="slotProps">
                                {{formatTableName(slotProps.data.tableName)}}
                        </template>
                </Column>
                <Column field="applicationCode" header="Application Code">
                        <template #body="slotProps">
                                {{formatApplicationCode(slotProps.data.applicationCode)}}
                        </template>
                </Column>
                <Column field="debit" header="Debit (DR)">
                        <template #body="slotProps">
                                {{formatAccountCode(slotProps.data.debit)}}
                        </template>
                </Column>
                <Column field="credit" header="Credit (CR)">
                        <template #body="slotProps">
                                {{formatAccountCode(slotProps.data.credit)}}
                        </template>
                </Column>

        </DataTable>
</div>
</template>

<script>
import { useRouter } from 'vue-router';
import { toRef } from 'vue'
export default {
    name: 'CodeStringsGLEntriesDataTable',
    props: {
        tableData: Object,
        processTypeLs: Object,
        tableNameLs: Object,
        applicationCodeLs: Object,
        accountCodeLs: Object
    },
    setup(props) {
        const router = useRouter();
        const dataList = toRef(props, 'tableData');
        const processTypeList = toRef(props, 'processTypeLs');
        const tableNameList = toRef(props, 'tableNameLs');        
        const applicationCodeList = toRef(props, 'applicationCodeLs');        
        const accountCodeList = toRef(props, 'accountCodeLs');        


        const rowClick = (e) => { 

            router.push({ name: "codestringdet", params: {data:  JSON.stringify(e.data)}});
        }

        const formatProcessType = (value) => {
            const r = processTypeList.value.filter(elem => { return elem.code === value })

            return r[0].desc;
        }

        const formatTableName = (value) => {
            const r = tableNameList.value.filter(elem => { return elem.code === value })

            return r[0].desc;
        }
        const formatApplicationCode = (value) => {
            const r = applicationCodeList.value.filter(elem => { return elem.code === value })

            return r[0].desc;
        }
        const formatAccountCode = (value) => {
            const r = accountCodeList.value.filter(elem => { return elem.code === value })

            return r[0].code + ` - ` + r[0].desc;
        }
        return {
            rowClick,
            processTypeList,
            tableNameList,
            applicationCodeList,
            accountCodeList,
            formatProcessType,
            formatTableName,
            formatApplicationCode,
            formatAccountCode,
            dataList,
        }
    }
}
</script>