<template>
    <h5>Agent Declaration</h5>
    <DataTable :value="dataList" dataKey="seqId" responsiveLayout="scroll" class="p-datatable-sm">

        <div class="card w-full">
             <div class="p-fluid formgrid grid">
                <div class="field col-12 md:col-6">
                    <label for="agentDeclaration1">Apa hubungan antara calon tertanggung dengan Anda ?</label>
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.agentDeclaration1" id="agentDeclaration1" :options="agentDeclaration1Ls" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>
                <div class="field col-12 md:col-6">
                    <label for="lainnya">Lainnya</label>
                    <InputText class="p-inputtext-sm" id="lainnya" type="text" value="" />
                </div> 

                <div class="field col-12 md:col-6">
                    <label for="agentDeclaration1">Sudah berapa lama Anda mengenal calon Tertanggung ?</label>
                </div>
                <div class="field col-12 md:col-6">
                    <div class="field col-6 md:col-3">
                    bulan<InputText class="p-inputtext-sm" id="bulan" type="text" value="0" />
                    </div>
                    <div class="field col-6 md:col-3">
                    tahun<InputText class="p-inputtext-sm" id="tahun" type="text" value="0" />
                    </div>
                </div>

                <div class="field col-12 md:col-6">
                    <label for="agentDeclaration3">Apakah anda bertemu dan mengetahui bahwa calon tertanggung dalam keadaan sehat jasmani dan rohani pada saat menandatangani SPAJ?</label>
                </div>
                <div class="field col-12 md:col-6">
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.agentDeclaration3" id="agentDeclaration3" :options="agentDeclaration3Ls" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>  

                <div class="field col-12 md:col-6">
                    <label for="agentDeclaration4">Apakah anda sudah menjelaskan kepada calon tertanggung mengenai seluruh isi perjanjian asuransi jiwa atau polis dengan segala akibat yang akan ditimbulkan oleh perjanjian atau polis tersebut?</label>
                </div>
                <div class="field col-12 md:col-6">
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.agentDeclaration4" id="agentDeclaration4" :options="agentDeclaration4Ls" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>  

                <div class="field col-12 md:col-6">
                    <label for="agentDeclaration5">Apakah anda sudah menjelaskan kepada calon tertanggung dan pemegang polis jawaban yang TIDAK BENAR pada surat perjanjian asuransi jiwa akan mengakibatkan batalnya perjanjian asuransi jiwa tanpa pengembalian uang premi atau jumlah apapun?</label>
                </div>
                <div class="field col-12 md:col-6">
                    <Dropdown class="p-inputtext-sm" v-model="inputForm.agentDeclaration5" id="agentDeclaration5" :options="agentDeclaration5Ls" optionLabel="name" optionValue="value" placeholder="Select one..." />
                </div>                  
            </div>

        </div>

    </DataTable>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'AgentDeclarationDataTable',
    props: {
        dataList: Object
    },
    setup() {
        const inputForm = ref({
            agentDeclaration1: '',
            agentDeclaration3: '',
            agentDeclaration4: '',
            agentDeclaration5: ''
        })

        const agentDeclaration1Ls = ref([
            { name: '00 - DIRI SENDIRI', value: '00' },
            { name: '01 - ANAK', value: '01' },
            { name: '02 - SUAMI', value: '02' },
            { name: '03 - ISTRI', value: '03' },
            { name: '04 - KAKAK', value: '04' },
            { name: '05 - ADIK', value: '05' },
            { name: '06 - PAMAN', value: 'PAMAN' },            
        ])

        const agentDeclaration3Ls = ref([
            { name: 'Y - Yes', value: 'Y' },
            { name: 'N - No', value: 'N' },        
        ])

        const agentDeclaration4Ls = ref([
            { name: 'Y - Yes', value: 'Y' },
            { name: 'N - No', value: 'N' },        
        ])
 
        const agentDeclaration5Ls = ref([
            { name: 'Y - Yes', value: 'Y' },
            { name: 'N - No', value: 'N' },        
        ])


        return {
            agentDeclaration1Ls,
            agentDeclaration3Ls,
            agentDeclaration4Ls,
            agentDeclaration5Ls,
            inputForm
        }
    },
}
</script>

