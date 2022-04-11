<template>
    <div class="field col-12 md:col-6" style="margin-top:2%" v-for="item in displayThings" :key="item.name">
            <div class="d-flex">
            <span class="p-float-label d-inline-block" style="width:90%; margin-right:1%">
            <Dropdown class="w-100" v-if="item.type == 'dropdown'" :id="item.name" v-model="inputFormObj[item.name]" :options="item.options" :optionLabel="item.optionLabel" :optionValue="item.optionValue" />
            <InputText class="w-100" v-if="item.type == 'input'" :id="item.name" type="text" v-model="inputFormObj[item.name]"/>
            <Calendar v-if="item.type == 'date'" class="p-inputtext-sm w-100" :id="item.name" v-model="inputFormObj[item.name]" :showIcon="true" :showOnFocus="false" dateFormat="dd/mm/yy" />
            <label :for="item.name">{{item.label}}</label>
            </span>
            <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text d-inline-block" @click="removeItem(item.name)" />
            </div>
    </div>
</template>


<script>
import { toRef } from 'vue';

export default {
    emits: ['update:modelValue'],
    props: {
        modelValue: String,
        displayItem: Object,
        inputForm: Object,
    },
    setup(props, { emit }) {

        const displayThings = toRef(props, 'displayItem');

        const removeItem = (name) => {
            emit('removeItem', name)

        }

        const inputFormObj = toRef(props, 'inputForm');

        return {
            removeItem, inputFormObj, displayThings
        }
    }
}


</script>