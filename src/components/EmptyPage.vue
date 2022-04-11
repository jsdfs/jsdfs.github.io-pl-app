<template>
	<div class="grid">
		<div class="col-12">
			<div class="card">
				<h5>Empty Page</h5>
				<p>Use this page to start from scratch and place your custom content.</p>
	<div class="d-flex">
        <Dropdown id="listitem" placeholder="Search filter" />
        <Button icon="pi pi-search" @click="search"/>
        <Button icon="pi pi-times-circle" @click="clear"/>
    </div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>