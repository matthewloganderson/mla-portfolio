<template>
	<b-row>
		<b-col class="p-4 bg-primary">
			<h1 class="text-white text-center mb-0 pb-0">
				<slot />
			</h1>
			<slot name="subheader" />
		</b-col>
	</b-row>
</template>

<script>
export default {
	name: 'PageHeader'
}
</script>

<style>

</style>