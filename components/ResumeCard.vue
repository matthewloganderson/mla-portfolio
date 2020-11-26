<template>
	<b-row class="pb-5 pt-5" align-v="center" align-h="center">
		<b-col cols="8" md="4" class="p-5 text-right">
			<slot name="logo" />
		</b-col>
		<b-col cols="12" md="8">
			<h4 class="text-primary text-center text-md-left" v-text="position"></h4>
			<h6 class="text-center text-md-left">
				{{fromDate}} to {{toDate}}
			</h6>
			<p class="text-center text-md-left" v-if="description" v-text="description">
			</p>
			<slot />
		</b-col>
	</b-row>
</template>

<script>
export default {
	name: 'ResumeCard',
	props: {
		company: {
			type: String,
			default: 'QuickMedical'
		},
		position: {
			type: String,
			default: 'Marketing Director'
		},
		fromDate: {
			type: String,
			default: 'February 2020'
		},
		toDate: {
			type: String,
			default: 'Present'
		},
		description: {
			type: String,
			default: ''
		},
		logo: {
			type: String,
			default: '~/assets/qmLogo.jpg'
		}
	},
}
</script>

<style>
	.w-30 {
		width: 30%
	}
</style>