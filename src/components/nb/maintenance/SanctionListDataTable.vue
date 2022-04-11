<template>
    <div class="card">
        <DataTable :value="dataList?.list" dataKey="seqId" responsiveLayout="scroll" @row-click="rowClick" selectionMode="single">
            <Column field="newIcNo" header="New IC No" :sortable="true" style="width:10%"></Column>
            <Column field="name" header="Name" :sortable="true" style="width:20%"></Column>
            <Column field="dob" header="Date Of Birth" :sortable="true" style="width:10%">
                <template #body="slotProps">
                    {{ dateFormat(slotProps.data.dob)}}
                </template>
            </Column>
            <Column field="businessRegistrationNo" header="Business Reg No" :sortable="true" style="width:10%"></Column> 
            <Column field="passport" header="Passport" :sortable="true" style="width:10%"></Column>
            <Column field="nationality" header="Nationality" :sortable="true" style="width:5%"></Column> 
            <Column field="oldIcNo" header="Old IC No" :sortable="true" style="width:10%"></Column>  
            <Column field="type" header="Type" :sortable="true" style="width:10%"></Column>
            <Column field="typeDescription" header="Type Description" :sortable="true" style="width:15%"></Column>     
        </DataTable>
    </div>
</template>

<script>
import { toRef } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'

export default {
    name: 'SanctionListDataTable',
    props: {
        tableData: Object,
    },
    setup(props) {
        const dataList = toRef(props, 'tableData');
        const router = useRouter();
        const store = useStore()

        const rowClick = (e) => { 
            store.dispatch('sanctionlist/set', e.data);
            router.push("sanctionlistdet");
        }

        const dateFormat = (value) => {
            var ddt = String(new Date(value).getDate()).padStart(2, '0');
            var mmt = String(new Date(value).getMonth() + 1).padStart(2, '0'); 
            var yyyyt = new Date(value).getFullYear();
    
            var toDate = ddt + "/" + mmt + "/" + yyyyt;

            return toDate
        }

        return {
            dataList,
            rowClick,
            dateFormat
        }
    }
}
</script>