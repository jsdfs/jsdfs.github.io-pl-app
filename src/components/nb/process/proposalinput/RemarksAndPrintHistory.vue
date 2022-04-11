<template>
            <h5>Remarks and Print History</h5>
            <br/>
            <div class="p-fluid formgrid grid">
                <div class="field col-12 md:col-6">
                    <label for="otherRemarks">Other Remarks</label>
                </div>
                <div class="field col-12 md:col-6">
                    <InputText class="p-inputtext-sm" id="otherRemarks" type="text" value="" />
                </div>
                <div class="field col-12 md:col-6">

                </div>
                <div class="field col-12 md:col-6">
                    <InputText class="p-inputtext-sm" id="otherRemarks" type="text" value="" />
                </div>
                <div class="field col-12 md:col-6">

                </div>
                <div class="field col-12 md:col-6">
                    <InputText class="p-inputtext-sm" id="otherRemarks" type="text" value="" />
                </div>
                <div class="field col-12 md:col-6">

                </div>
                <div class="field col-12 md:col-6">
                    <InputText class="p-inputtext-sm" id="otherRemarks" type="text" value="" />
                </div>    
                <div class="field col-12 md:col-6">

                </div>
                <div class="field col-12 md:col-6">
                    <InputText class="p-inputtext-sm" id="otherRemarks" type="text" value="" />
                </div>                                      
            </div>
                <div class="card">
                <PrintHistoryDataTable

                />
                </div>    

        <div class="flex flex-row justify-content-end">
            <Button icon="pi pi-chevron-right" style="background-color:#000080;" class="mt-2" @click="next" v-tooltip.top="'Next'" />
        </div> 

</template>

<script>
import PrintHistoryDataTable from '@/components/nb/process/proposalinput/PrintHistoryDataTable';

export default {
    name: 'RemarksAndPrintHistory',
    components: {
        PrintHistoryDataTable, 
    },
    setup(props, {emit}) {
        const next = () => {
            emit("next");
        }

        return{
            next
        }
        
    },
}
</script>