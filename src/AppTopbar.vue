<template>
	<div class="layout-topbar">
		<router-link to="/" class="layout-topbar-logo" v-on:click="set">
			<img alt="Logo" :src="topbarImage()" />
			<span></span>
		</router-link>

		<button class="p-link layout-topbar-menu-button layout-topbar-button"
			v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', 
			leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true}">
			<i class="pi pi-ellipsis-v"></i>
		</button>
		<ul class="layout-topbar-menu hidden lg:flex origin-top">
			<li>
				<div class="flex justify-content-end flex-wrap card-container green-container">
					<Dropdown class="w-100" id="listitem" v-model="dropDownValue" :options="dataList[0].items" optionLabel="label" optionValue="label"/>     

				</div>
			</li>
			<li>
				<button class="p-link layout-topbar-button" @click="openModal">
					<i class="pi pi-list" v-tooltip="'Edit Dashboard'"></i>
					<span>Dashboard</span>
				</button>
			</li>
			<li>
				<button class="p-link layout-topbar-button">
					<i class="pi pi-calendar"></i>
					<span>Events</span>
				</button>
			</li>
			<li>
				<button class="p-link layout-topbar-button">
					<i class="pi pi-cog"></i>
					<span>Settings</span>
				</button>
			</li>
			<li>
				<button class="p-link layout-topbar-button">
					<i class="pi pi-user"></i>
					<span>Profile</span>
				</button>
			</li>
		</ul>
	</div>

	<Dialog header="Edit Dashboard" v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true"  @update:visible="closeModal">
        <div class="grid">
            <div class="col-12">
                <div class="card p-fluid">
					<div class="formgrid grid">
						<div class="field col-12 md:col-5">
							<Listbox v-model="selectedCity" :options="selectCities" optionLabel="name" class="h-100" multiple="true"/>
						</div>
						<div class="field col-12 md:col-2 flex  justify-content-center align-items-center flex-column">
								<button class="p-link layout-topbar-button" @click="removeCity(deselectCity)">
									<i class="pi pi-chevron-left"></i>
								</button>
								<button class="p-link layout-topbar-button mt-5" @click="addCity(selectedCity)">
									<i class="pi pi-chevron-right"></i>
								</button>
						</div>
						<div class="field col-12 md:col-5">
							<Listbox v-model="deselectCity" :options="deselectCities" multiple="true" optionLabel="name" class="h-100" />
						</div>
					</div>
                </div>
            </div>
        </div>
        <template #footer>
            <Button icon="pi pi-plus" type="button" style="background-color:#000080" class="p-button-sm" @click="add" />
        </template>
    </Dialog>
</template>

<script>
// import { useStore } from "vuex";
import { toRef, ref, computed } from 'vue';


export default {
	emits: ['update:modelValue'],
	props: {
		menu: Object,
		selectedMenuItem: String,
		modelValue: String,
	},
	setup(props, { emit }) {
		// const store = useStore();
		const dataList = toRef(props, 'menu');
		const displayModal = ref(false);
		const selectedCity = ref();
		const deselectCity = ref();
		const deselectCities = ref([]);
		const selectCities = ref ([
				{name: 'New York', code: 'NY'},
				{name: 'Rome', code: 'RM'},
				{name: 'London', code: 'LDN'},
				{name: 'Istanbul', code: 'IST'},
				{name: 'Paris', code: 'PRS'}
			]);
		const dropDownValue = computed({
            get() {
                return props.modelValue
            },
            set(value) {
                emit('update:modelValue', value)
            }
        });
		// const path = 0;
		// const set = (() => {
		// 	store.dispatch('breadcrumb/set', path);
		// })

        const openModal = () => {
            displayModal.value = true;
        };

		const closeModal = () => {
            displayModal.value = false;
        };

		return {
			// set,
			// path,
			selectedCity,
			deselectCity,
			selectCities,
			deselectCities,
			dropDownValue,
			dataList,
			displayModal,
			closeModal,
			openModal
		};
	},
    methods: {
		addCity(value){


			for(let i = 0; i < value.length; i++){

				this.selectCities = this.selectCities.filter(function( obj ) {
					return obj.code !== value[i].code;
				});

				this.deselectCities.push({name: value[i].name, code: value[i].code})
            }
			
			
			this.selectedCity.length = 0;
		},
		removeCity(value){
			for(let i = 0; i < value.length; i++){

				this.deselectCities = this.deselectCities.filter(function( obj ) {
					return obj.code !== value[i].code;
				});

				this.selectCities.push({name: value[i].name, code: value[i].code})
            }
			
			
			this.deselectCity.length = 0;
		},
		onTopbarMenuToggle(event) {
            this.$emit('topbar-menu-toggle', event);
        },
		topbarImage() {
			return this.$appState.darkTheme ? 'images/logo.png' : 'images/logo.png';
		}
    },
	computed: {
		darkTheme() {
			return this.$appState.darkTheme;
		}
	}
}
</script>