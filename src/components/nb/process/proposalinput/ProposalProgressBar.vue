<template>
        <Avatar icon="pi pi-table" class="mb-2" size="large" style="background-color:#ffffff; color: #4169E1" shape="circle" @click="changePage(0)" v-tooltip.left="{value:'Proposal Input Details', class:'custom-tooltip-panel'}" />
        <Avatar icon="pi pi-ticket" class="mb-2" size="large" style="background-color:#ffffff; color: #2196F3" shape="circle" @click="changePage(1)" v-tooltip.left="{value:'Agent Details', class:'custom-tooltip-panel'}"/>
        <Avatar icon="pi pi-tag" class="mb-2" size="large" style="background-color:#ffffff; color: #f0ad11" shape="circle" @click="changePage(2)" v-tooltip.left="{value:'Insured Details', class:'custom-tooltip-panel'}"/>
        <Avatar icon="pi pi-bookmark" class="mb-2" size="large" style="background-color:#ffffff; color: #8B008B" shape="circle" @click="changePage(3)" v-tooltip.left="{value:'Policyholder Details', class:'custom-tooltip-panel'}"/>
        <Avatar icon="pi pi-box" class="mb-2" size="large" style="background-color:#ffffff; color: #E9967A" shape="circle" @click="changePage(4)" v-tooltip.left="{value:'Beneficiary', class:'custom-tooltip-panel'}"/>
        <Avatar icon="pi pi-tablet" class="mb-2" size="large" style="background-color:#ffffff; color: #00CED1" shape="circle" @click="changePage(5)" v-tooltip.left="{value:'Coverage Details', class:'custom-tooltip-panel'}"/>
        <Avatar icon="pi pi-globe" class="mb-2" size="large" style="background-color:#ffffff; color: #228B22" shape="circle" @click="changePage(6)" v-tooltip.left="{value:'For Unit-Linked/Uni. Life Use', class:'custom-tooltip-panel'}"/>
        <Avatar icon="pi pi-user" class="mb-2" size="large" style="background-color:#ffffff; color: #DC143C" shape="circle" @click="changePage(7)" v-tooltip.left="{value:'Benefit Component Coverage Details', class:'custom-tooltip-panel'}"/>
        <Avatar icon="pi pi-flag" class="mb-2" size="large" style="background-color:#ffffff; color: #4169E1" shape="circle" @click="changePage(8)" v-tooltip.left="{value:'Health Details', class:'custom-tooltip-panel'}"/>
        <Avatar icon="pi pi-id-card" class="mb-2" size="large" style="background-color:#ffffff; color: #E9967A" shape="circle" @click="changePage(9)" v-tooltip.left="{value:'Other Details', class:'custom-tooltip-panel'}"/>
        <Avatar icon="pi pi-book" class="mb-2" size="large" style="background-color:#ffffff; color: #00CED1" shape="circle" @click="changePage(10)" v-tooltip.left="{value:'Sum At Risk Information', class:'custom-tooltip-panel'}"/>
        <Avatar icon="pi pi-map" class="mb-2" size="large" style="background-color:#ffffff; color: #8B008B" shape="circle" @click="changePage(11)" v-tooltip.left="{value:'Remarks and Print History', class:'custom-tooltip-panel'}"/>
        <Avatar icon="pi pi-envelope" class="mb-2" size="large" style="background-color:#ffffff; color: #8B008B" shape="circle" @click="changePage(12)" v-tooltip.left="{value:'Document And Medical Requirement Details', class:'custom-tooltip-panel'}"/>
</template>

<script>
export default {
    setup(props, { emit }) {
        
        const changePage = (value) => {
            emit("changeTab", value);
        }

        return {
            changePage,
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