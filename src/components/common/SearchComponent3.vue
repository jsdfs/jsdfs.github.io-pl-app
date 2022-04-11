<template>


    <!-- <div class="field col-12 md:col-6">
        {{displayThings}}
    </div> -->


    <div class="field col-12 md:col-6" style="margin-top:1%" v-for="item in displayThings" :key="item.name" >

            <span class="p-float-label d-inline-block" style="width:90%">
            <Dropdown class="w-100" v-if="item.type == 'dropdown'" :id="item.name" v-model="inputFormObj[item.name]" :options="item.options" :optionLabel="item.optionLabel" :optionValue="item.optionValue" />
            <InputText class="w-100" v-if="item.type == 'input'" :id="item.name" type="text" v-model="inputFormObj[item.name]"/>
            <Calendar v-if="item.type == 'date'" class="p-inputtext-sm w-100" :id="item.name" v-model="inputFormObj[item.name]" :showIcon="true" :showOnFocus="false" dateFormat="dd/mm/yy" />
            <label :for="item.name">{{item.label}}</label>
            </span>
            <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text d-inline-block" style="width:10%" @click="removeItem(item.name)" />
    </div>


</template>


<script>
import { ref, toRef, onMounted } from 'vue';

export default {
    emits: ['update:modelValue'],
    props: {
        modelValue: String,
        displayItem: Object,
        inputForm: Object,
        firstItem: Boolean,

    },
    setup(props, { emit }) {

        const displayThings = toRef(props, 'displayItem');

        var showThings = displayThings.value

        const isFirst = toRef(props, 'firstItem');

        const doneLoad = ref(false)

        const removeItem = (name) => {
            emit('removeItem', name)

        }

        onMounted (() => {

            // console.log("true or false!!", isFirst.value)

            // console.log("try show before change,", showThings)

            // if(isFirst.value){
            //     showThings.length = 1
            //     console.log("try show arrayt2,", showThings)
            // }
            // else{
            //     if(showThings.length > 1){
            //         showThings.shift()

            //          console.log("sghift ,", showThings)
            //     }
            //     else{

            //         console.log("try show arrayt3 ,", showThings)
            //     }
            // }

            // doneLoad.value = true
            

        })

        const inputFormObj = toRef(props, 'inputForm');

        return {
            removeItem, inputFormObj, displayThings, isFirst, showThings, doneLoad
        }
    }
}


</script>