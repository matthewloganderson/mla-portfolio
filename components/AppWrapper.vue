<template>
	<b-row>
		<b-col>
		<app-header />
		<b-row no-gutters>
			<b-col>
				<slot />
			</b-col>
		</b-row>
		<app-footer />
		</b-col>
	</b-row>
</template>

<script>
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
export default {
	name: 'AppWrapper',
	components: {
		AppFooter, AppHeader
	},
}
</script>

<style>

</style>