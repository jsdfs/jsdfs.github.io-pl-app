<template>
    <div class="flex flex-row justify-content-end">
        <Button v-if="index == 0" icon="pi pi-chevron-left" style="background-color:#000080;" class="mt-2 mr-2" @click="cancel" v-tooltip.top="'Back'" />
        <Button icon="pi pi-chevron-right" style="background-color:#000080;" class="mt-2" @click="next" v-tooltip.top="'Next'" />
    </div>
			
</template>

<script>
import { toRef } from 'vue'
export default {
    props: {
        tabIndex: NaN,
    },
    setup(props, { emit }) {

        const index = toRef(props, 'tabIndex');
        
        const next = () => {
            emit("next");
        }

        const cancel = () => {
            emit("cancel");
        }

        return {
            next,
            cancel,
            index,
        }
    },
}
</script>

<style>

.custom-tooltip-panel .p-tooltip-text {
    background-color: #483D8B;
    color: rgb(255, 255, 255);
}

.custom-tooltip-panel.p-tooltip-left .p-tooltip-arrow {
    border-right-color: #483D8B;
}
</style>