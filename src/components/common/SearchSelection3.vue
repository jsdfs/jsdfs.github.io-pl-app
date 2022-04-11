<template>

            <div class="p-fluid formgrid grid" style="margin-bottom:3%;">
                <SearchComponent3

                    :displayItem="listitemLsFirst"
                    :modelValue="modelValue"
                    :inputForm="inputForm"
                    :firstItem="firstItem"
                    @removeItem="removeItem($event)"
                />

                <div class="field col-12 md:col-6" v-if="firstEmpty">
                </div>            


                <div class="field col-12 md:col-4">
                </div>

                <div class="field col-12 md:col-2">


                <div>
                <label for="listitem"> &nbsp; </label>
                <Dropdown class="w-100" id="listitem" v-model="dropDownValue" :options="listitemList" optionLabel="label" optionValue="name" @change="onChange($event)" placeholder="Search filter" />
                </div>

                </div>


                

                <SearchComponent3

                    :displayItem="listitemLsOthers"
                    :modelValue="modelValue"
                    :inputForm="inputForm"
                    :firstItem="otherItem"
                    @removeItem="removeItem($event)"
                />

        </div>



        <div style="margin-bottom:1%;">
                <Button icon="pi pi-search" style="background-color:#000080;" class="ml-2 mr-2" @click="search" v-tooltip.top="'Search'" />
                <Button icon="pi pi-filter-slash" class="p-button-danger mr-2" @click="clear" v-tooltip.top="'Clear'" />
        </div>


    <!-- <div class="field col-12 md:col-5">
        <Dropdown id="listitem" v-model="dropDownValue" :options="listitemList" optionLabel="label" optionValue="name" @change="onChange($event)" placeholder="Search filter" />
        <Button icon="pi pi-search" style="background-color:#000080;" class="ml-2 mr-2 d-inline-block" @click="search"/>
        <Button icon="pi pi-times-circle" class="p-button-danger mr-2 d-inline-block" @click="clear"/>
    </div> -->
</template>

<script>
import { ref, toRef, computed, onMounted, onUpdated } from 'vue';
import SearchComponent3 from '@/components/common/SearchComponent3';

export default {
    emits: ['update:modelValue'],
    props: {
        modelValue: String,
        listitemLs: Object,
        inputForm: Object,

    },
    components: {
        SearchComponent3
    },
    setup(props, { emit }) {

        const firstItem = ref(true);

        const otherItem = ref(false);

        const firstEmpty = ref(false);

        const listitemList = toRef(props, 'listitemLs');

        const inputFormObj = toRef(props, 'inputForm');

        var listitemLsTemp = []

        const listitemLsFirst = ref([]);

        const listitemLsOthers = ref([]);

        const displayItem = ref([]);

        const displayItem2 = {name: "hhohohoh", label:"testla", type:"pui"};

        const selectedListitem = ref("")

        const tableVisible = ref(false);
        
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

            
            listitemList.value = listitemList.value.filter(function(el) { return el.name != selected.value; }); 

            emit('changeItem', listitemList.value.filter(function(el) { return el.name != selected.value; }))

            console.log("displayy first?", displayItem.value)

            takefirst()

            takeOthers()


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

            takefirst()

            takeOthers()



        }

        const search = () => {

            emit('search')

        }

        const clear = () => {

            emit('clear')

        }

        const takefirst = () => {

            console.log("naruo", displayItem.value[0])

            listitemLsFirst.value.length = 0

            if(displayItem.value.length > 0){
                listitemLsFirst.value.push(displayItem.value[0])
                firstEmpty.value = false

                console.log("kyubi", listitemLsFirst.value)

            }else{
                listitemLsFirst.value.length = 0
                firstEmpty.value = true
            }

            // if(displayItem.value.length > 0){
            //     console.log("sasuke")
            //     listitemLsFirst.value = displayItem.value[0]
            // }

        
        
        }


        const takeOthers = () => {
            listitemLsOthers.value.length = 0

            console.log("asdsad")
            if(displayItem.value.length > 1){
                for(let i = 1; i < displayItem.value.length; i++){
                    listitemLsOthers.value.push(displayItem.value[i])
                }           
            }

            
        
        
        }


        const createItem = () => {


            //console.log("masakaaaaa", displayItem.value)

            //listitemLsFirst = displayItem.value

            //console.log("hontooo", displayItem.value)

            //listitemLsFirst.length = 1

            //console.log("harrr", displayItem.value)

            //listitemLsOthers = displayItem.value

            //console.log("nanii", listitemLsOthers)

            //listitemLsOthers.shift()

            //doneCreate.value = true

            //console.log("yameroroo", listitemLsOthers)



        }

        onMounted(() => {
            listitemLsTemp = listitemList.value

            onChange(ref(listitemList.value[0].name))

            console.log("displayItem.value", displayItem.value)



            console.log("listitemLsFirst", listitemLsFirst)

            console.log("listitemLsOthers", listitemLsOthers)

            tableVisible.value = true;



        });

        onUpdated(() => {



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
            search,
            clear,
            firstItem,
            listitemLsFirst,
            listitemLsOthers,
            createItem,
            takefirst,
            takeOthers,
            displayItem2,
            firstEmpty,
            tableVisible,
            otherItem
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

/* .p-component:focus{
    box-shadow: none;
    border: none;
    outline: none !important; 
} */


</style>