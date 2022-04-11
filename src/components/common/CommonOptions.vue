<template>
    <label for="ddlValue">{{ label }}</label>
    <Dropdown id="ddlValue" class="p-inputtext-sm mt-2" v-model="dropDownValue" style="width:100%"
        :options="optionArr" :optionLabel="descNameD" :optionValue="codeNameD" placeholder="Select an option..."
    />
</template>


<script>
import { ref, computed, onMounted, toRef } from 'vue';
import { useStore } from 'vuex'

export default {
    emits: ['update:modelValue'],
    props: {
        modelValue: String,
        label: String,
        routePath: String,
        isTruncate: Boolean,
        codeName: String,
        descName: String,
        dataDispatch: String,
        storeGetters: String,
        searchObj: Object,
    },
    setup(props, { emit }) {
        const store = useStore();

        const dropDownValue = computed({
            get() {
                return props.modelValue
            },
            set(value) {
                emit('update:modelValue', value)
            }
        });
        const optionArr = ref([]);

        const isTruncateD = toRef(props, 'isTruncate');
        const codeNameD = toRef(props, 'codeName');
        const descNameD = toRef(props, 'descName');
        const dataDispatchD = toRef(props, 'dataDispatch');
        const storeGettersD = toRef(props, 'storeGetters');
        const searchObjD = toRef(props, 'searchObj');

        const dataList = computed(() => store.getters[storeGettersD.value])

        onMounted(() => {
            if(!isTruncateD.value)
            {
                store.dispatch(dataDispatchD.value, searchObjD.value).then(() => {
                    if(typeof dataList.value.list !== 'undefined'){
                        if(!isTruncateD.value)
                        {
                            optionArr.value = dataList.value.list
                        }else{
                            optionArr.value = dataList.value.list.map(concateCodeDesc);
                        }
                    }else{
                        if(!isTruncateD.value)
                        {
                            optionArr.value = dataList.value
                        }else{
                            optionArr.value = dataList.value.map(concateCodeDesc);
                        }
                    }
                })
            }else{
                store.dispatch(dataDispatchD.value, searchObjD.value).then(() => {
                    if(typeof dataList.value.list !== 'undefined'){
                        optionArr.value = dataList.value.list.map(concateCodeDesc);
                    }else{
                        optionArr.value = dataList.value.map(concateCodeDesc);
                    }    
                })         
            }

        });

        const concateCodeDesc = (mastercode) => {
            return {
                [codeNameD.value]: mastercode[codeNameD.value],
                [descNameD.value]: mastercode[codeNameD.value] + ' - ' + mastercode[descNameD.value]
            }
        }

        return {
            dropDownValue, optionArr, isTruncateD, codeNameD, descNameD, dataDispatchD, storeGettersD, dataList, searchObjD
        }
    }
}


</script>