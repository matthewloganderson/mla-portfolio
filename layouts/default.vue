<template>
	<b-container fluid class="no-overflow p-0">
		<b-row no-gutters>
			<b-col>
				<app-wrapper>
					<nuxt />
				</app-wrapper>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import AppWrapper from '@/components/AppWrapper'
export default {
	components: {
		AppWrapper
	},
}
</script>

<style>
	.no-overflow {
		overflow-x: hidden;
	}
</style>
