<template>
    <h5>Agent Agreement</h5>
    <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm">

        <div class="card w-full">
             <div class="p-fluid formgrid grid">
                <div class="field col-12 md:col-6">
                    <label for="approval1">Approval 1</label>
                     <InputText class="p-inputtext-sm" id="approval1" type="text" value="" />
                </div>
                <div class="field col-12 md:col-6">

                </div> 
                <div class="field col-12 md:col-6">
                    <label for="applicationDate1">Application Date 1</label>
                     <InputText class="p-inputtext-sm" id="applicationDate1" type="text" value="" />
                </div>
                <div class="field col-12 md:col-6">

                </div> 
                <div class="field col-12 md:col-6">
                    <label for="approval1Remark">Approval 1 Remark</label>
                     <InputText class="p-inputtext-sm" id="approval1Remark" type="text" value="" />
                </div>
                <div class="field col-12 md:col-6">

                </div> 
                <div class="field col-12 md:col-6">
                    <label for="approval2">Approval 2</label>
                     <InputText class="p-inputtext-sm" id="approval2" type="text" value="" />
                </div>
                <div class="field col-12 md:col-6">

                </div>
                <div class="field col-12 md:col-6">
                    <label for="applicationDate2">Application Date 2</label>
                     <InputText class="p-inputtext-sm" id="applicationDate2" type="text" value="" />
                </div>
                <div class="field col-12 md:col-6">

                </div>    
                <div class="field col-12 md:col-6">
                    <label for="approval2Remark">Approval 2 Remark</label>
                     <InputText class="p-inputtext-sm" id="approval2Remark" type="text" value="" />
                </div>
                <div class="field col-12 md:col-6">

                </div>                             
            </div>

        </div>

    </DataTable>
</template>

<script>

export default {
    name: 'AgentAgreementDataTable',
    props: {
        dataList: Object
    },
    setup() {

        return {

        }
    },
}
</script>

