<template>
	<b-row class="text-primary">
		<b-col>
			<h5>
				<fa v-if="icon" :icon="icon" class="mr-1" />
				<span>{{ skill }}</span>
			</h5>
		</b-col>
	</b-row>
</template>

<script>
export default {
	name: 'SkillsBadge',
	props: {
		icon: {
			type: [String, Array],
			default: ''
		},
		skill: {
			type: String,
			default: ''
		}
	}
}
</script>

<style>

</style>