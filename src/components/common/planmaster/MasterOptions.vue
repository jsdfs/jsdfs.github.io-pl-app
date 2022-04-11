<template>
    <label>{{ label }}</label>
    <Dropdown class="p-inputtext-sm mt-2" v-model="dropDownValue" style="width:100%"
        :options="optionArr" optionLabel="desc" optionValue="code" placeholder="Select an option..."
    />
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import masterDataService from '@/service/admin/masterDataService';

export default {
    emits: ['update:modelValue'],
    props: {
        modelValue: String,
        label: String,
        masterCode: String
    },
    setup(props, { emit }) {
        const dropDownValue = computed({
            get() {
                return props.modelValue
            },
            set(value) {
                emit('update:modelValue', value)
            }
        });
        const optionArr = ref([]);

        onMounted(() => {
            masterDataService.getDetailByHeaderCode(props.masterCode).then(res => {
                optionArr.value = res.data.map(concateCodeDesc);
            });
        });

        return {
            dropDownValue, optionArr
        }
    }
}

const concateCodeDesc = (mastercode) => {
    return {
        code: mastercode.code,
        desc: mastercode.desc
    }
}
</script>