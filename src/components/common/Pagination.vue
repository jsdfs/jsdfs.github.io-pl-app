<template>
    <template v-if="pagingObj != null">

        <Paginator v-model:first="first" :rows="pagingObj?.pager?.size" :totalRecords="pagingObj?.pager?.totalRecords" 
            :rowsPerPageOptions="[10, 20, 30, 40, 50]"
            template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            @page="onPageChange"
        >
        </Paginator>
    </template>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "Pagination",
    emits: [
        'changePage'
    ],
    props: {
        // pagingObj: {
        //     type: Object,
        //     default() {
        //         return {
        //             pager: {
        //                 page: 0,
        //                 size: 0,
        //                 totalRecords: 0
        //             }
        //         }
        //     }
        // },
        pagingObj: {
            type: Object
        }
    },
    setup(props, { emit }) {
        
        const first = ref(0);

        const onPageChange = (event) => {
            console.log('event: '+ JSON.stringify(event));

            emit("changePage", event);
        }

        return { first, onPageChange }
    }
}
</script>