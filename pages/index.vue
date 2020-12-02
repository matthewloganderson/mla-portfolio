<template>
	<b-row>
		<b-col>
			<b-row>
				<b-col class="bg-bike shadow-bottom bg-primary p-5">
					<b-row align-v="center">
						<b-col class="text-white ml-4 pt-5 pb-5 px-5 px-md-3 mobile-box " md="4" sm="10" cols="10">
							<h5 class="text-white">
								Nice to meet you...
							</h5>
							<h1 class="good-font display-4">
								My name is Matt.
							</h1>
							<p class="good-font font-size-large">
								I am a man of many talents. I write. I design. I code. I illustrate. I analyze. I market. I ride my bike. Above all, I help businesses get their message out. 
							</p>
							<b-btn href="mailto:matthewlogananderson@gmail.com" target="self" size="lg" class="text-primary" variant="light">
								Contact Me
							</b-btn>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
			<b-row> 
				<app-intro-block 
					header="Services" 
					text="Let's see how we can work together."
					linkText="Click Me"
					route="/services"
				/>
				<app-intro-block 
					header="Portfolio" 
					text="View my work in writing, design, and web development."
					linkText="Click Me"
					route="/portfolio"
				/>				
				<app-intro-block 
					header="Resume" 
					text="See where I've been and where I'm going."
					linkText="Click Me"
					route="/resume"
				/>
				<app-intro-block 
					header="My Bike" 
					text="Learn more about my trusty steed: a Cannondale Cujo."
					linkText="Click Me"
					route="/cujo"
				/>			
			</b-row>
		</b-col>
	</b-row>
</template>

<script>
import AppIntroBlock from '@/components/AppIntroBlock'
export default {
	name: 'index',
	comnponents: {
		AppIntroBlock
	}
}
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Vidaloka&display=swap');
	.pad-card{
		padding: 75px 50px 75px 50px;
	}
	h1,h2,h3,h4,h5,h6,button {
		font-family: 'Vidaloka', serif !important;
	}
	p,span,div {
		font-family: 'Questrial', sans-serif !important;
	}
	.cujo {
		width: 200%;
	}
	.bg-bike {
		background-image: url("~assets/Cujo_1.png");
	}
	@media only screen and (min-width: 768px) {
		.bg-bike {
			background-size: 155% auto;
			background-position: -35% 72%; 
			background-repeat: no-repeat;
		}
	}	
	@media only screen and (max-width: 767px) {
		.bg-bike {
			background-image: url("~assets/Cujo_1.png");
			background-size: 300% auto;
			background-position: 25% 72%; 
			background-repeat: no-repeat;
		}
		.mobile-box {
			background-color: #007ffa;
			border: solid thin white
		}
	}	
</style>
