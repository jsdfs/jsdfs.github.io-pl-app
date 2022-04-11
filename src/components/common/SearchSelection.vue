<template>
        <div>
            <div style="float:left" class="flex justify-content-start flex-wrap card-container green-container">
                <div class="flex align-items-center justify-content-center"><Button icon="pi pi-chevron-left" type="button" class="p-button-outlined mr-2 mb-2" @click="back" /></div> 
            </div>  
            <div style="float:right" class="flex justify-content-end flex-wrap card-container green-container">
                <Dropdown class="w-100" id="listitem" v-model="dropDownValue" :options="listitemList" optionLabel="label" optionValue="name" @change="onChange($event)" placeholder="Search filter" />     
            </div>  
        </div>
    <div class="p-fluid formgrid grid searchCol" style="margin-bottom:2%;">
    <div class="field col-12 md:col-12">
    </div>
        <SearchComponent 
            :displayItem="displayItem"
            :modelValue="modelValue"
            :inputForm="inputForm"
            @removeItem="removeItem($event)"
        />
    </div>

</template>

<script>
import { useRouter } from 'vue-router';
import { ref, toRef, computed, onMounted } from 'vue';
import SearchComponent from '@/components/common/SearchComponent';

export default {
    emits: ['update:modelValue'],
    props: {
        modelValue: String,
        listitemLs: Object,
        inputForm: Object,
        backRoutePath: String,
    },
    components: {
        SearchComponent
    },
    setup(props, { emit }) {

        const router = useRouter();

        const listitemList = toRef(props, 'listitemLs');

        const inputFormObj = toRef(props, 'inputForm');

        var listitemLsTemp = []

        const displayItem = ref([]);

        const selectedListitem = ref("")

        const dropDownValue = computed({
            get() {
                return props.modelValue
            },
            set(value) {
                emit('update:modelValue', value)
            }
        });

        const onChange = (selected) => {

            var itemGet = listitemList.value.filter((elem) => {
              return elem.name === selected.value;
            });

            console.log("push wat", itemGet[0])

            //displayItem.value.push(itemGet[0])

            displayItem.value.push(itemGet[0])

            //displayItem.value = { name:"chibais"}
            
            listitemList.value = listitemList.value.filter(function(el) { return el.name != selected.value; }); 

            emit('changeItem', listitemList.value.filter(function(el) { return el.name != selected.value; }))

            console.log("displayy first?", displayItem.value)

            return itemGet

        }

        const removeItem = (name) => {

            dropDownValue.value = ''
            
            inputFormObj.value[name] = ''
            
            var itemGet = displayItem.value.filter((elem) => {
              return elem.name === name;
            });

            listitemList.value.push(itemGet[0])

            listitemList.value.length = listitemLsTemp.length

            listitemList.value.sort((a, b) => listitemLsTemp.indexOf(a) - listitemLsTemp.indexOf(b));

            displayItem.value = displayItem.value.filter(function(el) { return el.name != name; });
            
            selectedListitem.value = ""

            emit('changeItem', listitemList.value.filter(value => Object.keys(value).length !== 0))


        }

        const back = () => {

            if(typeof props.backRoutePath != 'undefined')
            {
                router.push(props.backRoutePath);
            }
            else
            {
                router.push('/');
            }
            

        }

        onMounted(() => {
            listitemLsTemp = listitemList.value

            onChange(ref(listitemList.value[0].name))

        });
        


        return {
            dropDownValue,
            listitemList,
            listitemLsTemp,
            displayItem,
            selectedListitem,
            onChange,
            removeItem,
            inputFormObj,
            back,
        }
    }
}
</script>

<style>
hr
{
border:solid 1px darkgray;
color: #FFFF00;
height: 1px;

}

.p-button:focus{
    box-shadow: none;
    outline: none !important;
}

.p-button .p-button-danger:focus{
    box-shadow: none;
    outline: none !important;
}

.searchCol .field{
  margin-bottom: 0px;
}


</style>