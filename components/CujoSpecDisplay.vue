<template>
	<b-row>
		<b-col>
			<b-list-group>
				<b-list-group-item v-for="(spec, index) in specs" :key="index">
					<strong>{{ spec.title }}</strong>: {{ spec.spec }}
				</b-list-group-item>
			</b-list-group>
		</b-col>
	</b-row>
</template>

<script>
export default {
	name: 'CujoSpecDisplay',
	props: {
		specs: {
			type: Array,
			default: () => {
				return []
			}
		}
	}
}
</script>

<style>

</style>