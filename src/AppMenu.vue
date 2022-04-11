<template>
	<div class="layout-menu-container">
		<AppSubmenu :items="model" class="layout-menu" :selectedMenuItem="selectedMenuItem"/>
		<!-- <a href="https://www.primefaces.org/primeblocks-vue" class="block mt-3">
			<img alt="primeblocks" :src="bannerImage()" class="w-full" />
		</a> -->
	</div>
</template>

<script>
import AppSubmenu from './AppSubmenu';

export default {
	props: {
		model: Array,
		selectedMenuItem: String
	},
    methods: {
		bannerImage() {
			return this.$appState.darkTheme ? 'images/banner-primeblocks-dark.png' : 'images/banner-primeblocks.png';
		}
    },
	computed: {
		darkTheme() {
			return this.$appState.darkTheme;
		}
	},
	components: {
		'AppSubmenu': AppSubmenu
	}
}
</script>