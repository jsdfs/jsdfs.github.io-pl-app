<template>

<div class="card">
        <DataTable :value="dataList?.list" dataKey="seqId" responsiveLayout="scroll" @row-click="rowClick" selectionMode="single" >
                <Column field="accountCode" header="Account Code"></Column>
                <Column field="accountType" header="Account Type"></Column>
                <Column header="Fund Type by Transaction Level">
                        <template #body="slotProps">
                                {{format(slotProps.data.fundByTransLvl)}}
                        </template>
                </Column>       
                <Column header="Fund Type Class">
                        <template #body="slotProps">
                                {{ slotProps.data.subFundClass }}
                        </template>
                </Column>
                <Column header="T0 (Fund Type)">
                        <template #body="slotProps">
                                {{format(slotProps.data.t0)}}
                        </template>
                </Column>
                <Column header="T1 (Product Group)">
                        <template #body="slotProps">
                                {{format(slotProps.data.t1)}}
                        </template>
                </Column>
                <Column header="T2 (Product)">
                        <template #body="slotProps">
                                {{format(slotProps.data.t2)}}
                        </template>
                </Column>
                <Column header="T3 (Distribution Channel)">
                        <template #body="slotProps">
                                {{format(slotProps.data.t3)}}
                        </template>
                </Column>
                <Column header="T4 (Policy Year)">
                        <template #body="slotProps">
                                {{format(slotProps.data.t4)}}
                        </template>
                </Column> 
                <Column header="T5 (Cost Center)">
                        <template #body="slotProps">
                                {{format(slotProps.data.t5)}}
                        </template>

                </Column>
                <Column header="T6 (Supplier)">
                        <template #body="slotProps">
                                {{format(slotProps.data.t6)}}
                        </template>

                </Column>
                <Column header="T7 (Customer)">
                        <template #body="slotProps">
                                {{format(slotProps.data.t7)}}
                        </template>
                
                </Column>
                <Column header="T8 (Reinsurance)">
                        <template #body="slotProps">
                                {{format(slotProps.data.t8)}}
                        </template>

                </Column>
                <Column header="T9 (Cash Flow)">
                        <template #body="slotProps">
                                {{format(slotProps.data.t9)}}
                        </template>
                </Column> 
                <Column  header="Collection Bank">
                        <template #body="slotProps">
                                {{format(slotProps.data.collectionBank)}}
                        </template>

                </Column> 
                <Column  header="Disbursement Bank">
                        <template #body="slotProps">
                                {{format(slotProps.data.disbursementBank)}}
                        </template>

                </Column>
        </DataTable>
</div>
</template>

<script>
import { useRouter } from 'vue-router';
import { toRef } from 'vue'
export default {
    name: 'ChartOfAccountDataTable',
    props: {
        tableData: Object
    },
    setup(props) {
        const router = useRouter();
        const dataList = toRef(props, 'tableData');

        const rowClick = (e) => { 

            router.push({ name: "chartaccountdet", params: {data:  JSON.stringify(e.data)}});
        }
        

        const format = (value) => { 
   
            if(value == true){
                return 'NO'
            }else{
                return 'YES'
            }
        }

        return {
            rowClick,
            dataList,
            format
        }
    }
}
</script>