<template>
	<b-row>
		<b-col cols="12" lg="8" class="border border-primary p-3">
			<svg 
				version="1.1" 
				xmlns="http://www.w3.org/2000/svg" 
				xmlns:xlink="http://www.w3.org/1999/xlink" 
				x="0px" 
				y="0px"
				:viewBox="computedViewbox" style="enable-background:new 0 0 1920 1080;" xml:space="preserve"
			>
				<cujo-rotors 
					@mouseover="setHoverComponent('brakes')"
					@mouseleave="hoveredPart = ''" 
					:class="{'inactive-part': !hoveredPartClass.brakes}"
					@click="chooseActivePart ('brakes')" 
					v-show="parts.brakes" 
				/>
				<cujo-wheels 
					@mouseover="setHoverComponent('wheels')"
					@mouseleave="hoveredPart = ''" 
					:class="{'inactive-part': !hoveredPartClass.wheels}"
					@click="chooseActivePart ('wheels')" 
					v-show="parts.wheels"
				/>
				<cujo-forks 
					@mouseover="setHoverComponent('forks')"
					@mouseleave="hoveredPart = ''" 
					:class="{'inactive-part': !hoveredPartClass.forks}"
					v-show="parts.forks" 
					@click="chooseActivePart ('forks')" 
				/>
				<cujo-rear-cassette 
					@mouseover="setHoverComponent('rearCassette')"
					@mouseleave="hoveredPart = ''" 
					:class="{'inactive-part': !hoveredPartClass.rearCassette}"
					@click="chooseActivePart ('drivetrain')"
					v-show="parts.drivetrain || parts.rearCassette" 
				/>
				<cujo-derailler-bottom 
					@mouseover="setHoverComponent('derailleur')"
					@mouseleave="hoveredPart = ''"
					:class="{'inactive-part': !hoveredPartClass.derailleur}"
					@click="chooseActivePart ('drivetrain')"
					v-show="parts.drivetrain || parts.derailleur" 
				/>
				<cujo-chain-rear 
					@mouseover="setHoverComponent('chain')"
					@mouseleave="hoveredPart = ''"
					:class="{'inactive-part': !hoveredPartClass.chain}"
					@click="chooseActivePart ('drivetrain')" 
					v-show="parts.drivetrain || parts.chain" 
				/>
				<cujo-frame 
					@mouseover="setHoverComponent('frame')"
					@mouseleave="hoveredPart = ''" 
					:class="{'inactive-part': !hoveredPartClass.frame}"
					@click="chooseActivePart ('frame')"
					v-show="parts.frame" 
				/>
				<cujo-sprocket-crank-connection 
					@mouseover="setHoverComponent('crankset')"
					@mouseleave="hoveredPart = ''"
					:class="{'inactive-part': !hoveredPartClass.crankset}"
					@click="chooseActivePart ('drivetrain')"
					v-show="parts.crankset || parts.drivetrain" 
				/>
				<cujo-sprocket 
					@mouseover="setHoverComponent('crankset')"
					@mouseleave="hoveredPart = ''"
					:class="{'inactive-part': !hoveredPartClass.crankset}"
					@click="chooseActivePart ('drivetrain')"
					v-show="parts.drivetrain || parts.crankset" 
				/>
				<cujo-chain-front 
					@mouseover="setHoverComponent('chain')"
					@mouseleave="hoveredPart = ''"
					:class="{'inactive-part': !hoveredPartClass.chain}"
					@click="chooseActivePart ('drivetrain')"
					v-show="parts.drivetrain || parts.chain" 
				/>
				<cujo-cranks 
					:class="{'inactive-part': !hoveredPartClass.crankset}"
					@mouseover="setHoverComponent('crankset')"
					@mouseleave="hoveredPart = ''"
					@click="chooseActivePart ('drivetrain')"
					v-show="parts.drivetrain || parts.crankset" 
				/>
				<cujo-derailler 
					:class="{'inactive-part': !hoveredPartClass.derailleur}"
					@mouseover="setHoverComponent('derailleur')"
					@mouseleave="hoveredPart = ''"
					@click="chooseActivePart ('drivetrain')"
					v-show="parts.drivetrain || parts.derailleur" 
				/>
				<cujo-dropper-post 
					@mouseover="setHoverComponent('dropperPost')"
					@mouseleave="hoveredPart = ''" 
					:class="{'inactive-part': !hoveredPartClass.dropperPost}"
					@click="chooseActivePart ('dropperPost')"
					v-show="parts.dropperPost" 
				/>
				<cujo-saddle 
					@mouseover="setHoverComponent('saddle')"
					@mouseleave="hoveredPart = ''" 
					:class="{'inactive-part': !hoveredPartClass.saddle}"
					@click="chooseActivePart ('saddle')"
					v-show="parts.saddle" 
				/>
				<cujo-handlebars 
					@mouseover="setHoverComponent('handlebars')"
					@mouseleave="hoveredPart = ''" 
					:class="{'inactive-part': !hoveredPartClass.handlebars}"
					@click="chooseActivePart ('handlebars')"
					v-show="parts.handlebars" 
				/>
			</svg>
		</b-col>
		<b-col class="border-left border-primary text-primary p-4 pr-5">
			<b-row class="mb-3" v-if="selectedPart">
				<b-col>
					<h2>
						{{ capitalize (selectedPart) }}
					</h2>
				</b-col>
				<b-col cols="1" class="text-right">
					<b-btn @click="reset()" size="sm" variant="outline-primary">
						<fa icon="times" />
					</b-btn>
				</b-col>
			</b-row>
			<b-row v-if="!selectedPart">
				<b-col>
					<h1 class="mb-3">
						Cannondale Cujo 1 (2020)
					</h1>
					<b-list-group>
						<b-list-group-item v-for="(item, index) in cujo.components" :key="index">
							<b-link @click="chooseActivePart (item.name)">
								{{ capitalize(item.name) }}
							</b-link>
						</b-list-group-item>
					</b-list-group>
				</b-col>
			</b-row>
			<b-row v-else>
				<b-col>
					<cujo-component-info :item="shownInfo" />
				</b-col>
			</b-row>
		</b-col>
	</b-row>
</template>

<script>
import _ from 'lodash'
import Cujo from '@/constants/Cujo'
export default {
	name: 'CujoWhole',
	data () {
		return {
			cujo: Cujo,
			shownInfo: {},
			selectedPart: '',
			hoveredPart: '',
			parts: {
				brakes: true,
				wheels: true,
				forks: true,
				rearCassette: true,
				chain: true,
				frame: true,
				crankset: true,
				derailleur: true,
				dropperPost: true,
				saddle: true,
				handlebars: true,
				drivetrain: true,
			}
		}
	},
	computed: {
		computedViewbox () {
			switch (this.selectedPart) {
				case 'wheels': 
					return `-50 320 ${1920/1.7} ${1080/1.7}`
				case 'brakes': 
					return `180 450 ${1920/3} ${1080/3}`
				case 'drivetrain': 
					return `325 460 ${1920/2.75} ${1080/2.75}`
				case 'frame': 
					return `250 100 ${1920/1.7} ${1080/1.7}`
				case 'forks': 
					return `900 225 ${1920/2.2} ${1080/2.2}`
				case 'handlebars': 
					return `900 50 ${1920/4} ${1080/4}`
				case 'dropperPost': 
					return `500 125 ${1920/4} ${1080/4}`	
				case 'saddle': 
					return `450 50 ${1920/4} ${1080/4}`
				default: 
					return '0 0 1920 1080'
			}
		},
		hoveredPartClass () {
			const parts = {
				brakes: true,
				wheels: true,
				forks: true,
				rearCassette: true,
				chain: true,
				frame: true,
				crankset: true,
				derailleur: true,
				dropperPost: true,
				saddle: true,
				handlebars: true,
			}
			const hovered = this.hoveredPart
				if (!this.hoveredPart) {
					return parts
				} else {
					const keys = Object.keys (parts)
					keys.forEach (key => parts[key] = false)
					parts[hovered] = true
					return parts
				}
			}
	},
	methods: {
		chooseActivePart (part) {
			const cujo = this.cujo
			const componentInfo = this.cujo.components.find (
				component => component.name === part
			)
			this.shownInfo = componentInfo
			this.selectedPart = part
			const keys = Object.keys (this.parts)
			keys.forEach (key => this.parts[key] = false)
			this.parts[part] = true;
		},
		capitalize(string) {
			return _.capitalize (string)
		},
		reset () {
			this.shownInfo = {}
			this.componentInfo = {}
			this.selectedPart = ''
			const keys = Object.keys (this.parts)
			keys.forEach (key => this.parts[key] = true)
		},
		setHoverComponent (component) {
			this.hoveredPart = component
		}
	}
}
</script>

<style>
	.inactive-part {
		opacity: 0.2;
	}
	.st0{display:none;}
	.st1{fill:#FFFFFF;stroke:#007bff;stroke-width:0.7;stroke-miterlimit:10;}
	.st2{fill:transparent;stroke:#007bff;stroke-width:0.7;stroke-miterlimit:10;}
	.st3{fill:transparent;stroke:#007bff;stroke-miterlimit:10;}
	.st4{fill:#FFFFFF;stroke:#007bff;stroke-miterlimit:10;}
	.st5{fill:transparent;stroke:#007bff;stroke-width:0.75;stroke-miterlimit:10;}
	.st6{fill:transparent;stroke:#007bff;stroke-width:0.5;stroke-miterlimit:10;}
	.st7{fill:transparent;stroke:#007bff;stroke-width:0.6;stroke-miterlimit:10;}
	
</style>