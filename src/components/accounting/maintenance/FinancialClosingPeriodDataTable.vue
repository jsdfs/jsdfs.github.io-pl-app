<template>

<div class="card">
        <DataTable :value="dataList?.list" dataKey="seqId" responsiveLayout="scroll" @row-click="rowClick" selectionMode="single" >
                <Column field="financialYear" header="Financial Year"></Column>
                <Column field="financialMonth" header="Financial Month"></Column>
                <Column field="calenderMonth" header="Calendar Month"></Column>
                <Column header="Start Date">
                        <template #body="slotProps">
                                {{format(slotProps.data.startDate)}}
                        </template>
                </Column>
                <Column header="End Date">
                        <template #body="slotProps">
                                {{format(slotProps.data.endDate)}}
                        </template>
                </Column>
                <Column field="status" header="Status"></Column>
                <Column field="accountingPeriod" header="Accounting Period"></Column>

        </DataTable>
</div>
</template>

<script>
import { useRouter } from 'vue-router';
import { toRef } from 'vue'
export default {
    name: 'FinancialClosingPeriodDataTable',
    props: {
        tableData: Object,
    },
    setup(props) {
        const router = useRouter();
        const dataList = toRef(props, 'tableData');    


        const rowClick = (e) => { 

            router.push({ name: "financialclosingdet", params: {data:  JSON.stringify(e.data)}});
        }

        const format = (value) => {
            var ddt = String(new Date(value).getDate()).padStart(2, '0');
            var mmt = String(new Date(value).getMonth() + 1).padStart(2, '0'); 
            var yyyyt = new Date(value).getFullYear();
    
            var date = ddt + "/" + mmt + "/" + yyyyt;

            return date
        }

        
        return {
            rowClick,
            format,
            dataList,
        }
    }
}
</script>