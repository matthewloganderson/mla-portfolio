<template>
	<b-row>
		<b-col>
			<page-header>
				Resume
			</page-header>
			<b-row>
				<b-col cols="12" lg="8">
					<h2 class="text-primary mt-5 text-center">
						<u>
						Work Experience
						</u>
					</h2>
					<b-row class="border-bottom border-primary" align-h="center">
						<b-col cols="12" md="8">
							<resume-card v-bind="history[0]">
								<template #logo>
									<b-img fluid :src="history[0].logo" />
								</template>
							</resume-card>
						</b-col>
					</b-row>
					<b-row class="border-bottom border-primary" align-h="center">
						<b-col cols="12" md="8">
							<resume-card v-bind="history[1]">
								<template #logo>
									<b-img fluid :src="history[1].logo" />
								</template>
								<b-row>
									<b-col>
										<b-row>
											<b-col class="text-center text-md-left">
												<b-link @click="qmCollapse = !qmCollapse">
													More Details
													<fa :icon="qmCollapse ? 'chevron-up' : 'chevron-down'" class="ml-1" />
												</b-link>
											</b-col>
										</b-row>
										<b-collapse v-model="qmCollapse">
											<b-card class="mt-3">
												<b-row>
													<b-col>
														<h4 class="mb-4 text-primary">
															Previous Positions
														</h4>
														<h5 class="mb-2">
															Senior Marketing Specialist
														</h5>
														<h6 class="small">
															February 2015 to July 2015
														</h6>
														<h5 class="mb-2 mt-4">
															Associate Marketing Specialist
														</h5>
														<h6 class="small">
															August 2013 to February 2015
														</h6>
													</b-col>
												</b-row>
												<b-row>
													<b-col>
														<h4 class="mb-4 mt-4 text-primary">
															Projects
														</h4>
														<h5 class="mb-2">
															Website Redesign
														</h5>
														<p>
															I led the team responsible for the redesign of QuickMedical's website. As the project's leader, I created mock ups, chaired the committee responsible for approving all comps, managed the developers who created the new code base, and led the company through its own internal tests of the new platform before deployment.
														</p>
														<h5 class="mb-2 mt-4">
															Email System
														</h5>
														<p>
															I designed and worked with a small team to deploy an E-mail Content Management/Templating System which dynamically builds modular e-mail messages personalized to the individual customer receiving said message. Beyond the potential business impact of being able to completely personalize any e-mail messaging sent to any customer, because of the system's modular nature (the structure of the modules which comprise any given message are stored separately from the HTML templates which comprise each module, and further, content is stored separately from the HTML templates which contain it) changes to any one template or piece of content is instantly propagated to all messages containing it -- greatly decreasing the time it takes to deploy changes to existing messaging and speeding the deployment of new content.
														</p>
													</b-col>
												</b-row>
											</b-card>
										</b-collapse>
									</b-col>
								</b-row>
							</resume-card>
						</b-col>
					</b-row>
					<b-row class="border-bottom border-primary" align-h="center">
						<b-col cols="12" md="8">
							<resume-card v-bind="history[2]">
								<template #logo>
									<b-img fluid :src="history[2].logo" />
								</template>
								<b-row>
									<b-col>
										<b-row>
											<b-col class="text-center text-md-left">
												<b-link @click="dukesbayCollapse = !dukesbayCollapse">
													More Details
													<fa :icon="dukesbayCollapse ? 'chevron-up' : 'chevron-down'" class="ml-1" />
												</b-link>
											</b-col>
										</b-row>
										<b-collapse v-model="dukesbayCollapse">
											<b-card class="mt-3">
												<b-row>
													<b-col>
														<h4 class="mb-4 mt-4 text-primary">
															Projects
														</h4>
														<h5 class="mb-2">
															Driving Miss Daisy
														</h5>
														<h6>
															November 2013
														</h6>
														<p>
															Stage Managed Dukesbay Production's "Driving Miss Daisy" by Alfred Uhry and Directed by Julie Halpin. It ran in the Merlino Arts Center from Nov. 8-23, 2013.
														</p>
														<h5 class="mb-2 mt-4">
															Java Tacoma: The Merry Wives Americano
														</h5>
														<h6>
															February 2014
														</h6>
														<p>
															Wrote "Java Tacoma: The Merry Wives Americano" presented by Dukesbay Productions.
														</p>
														<p>
															Reviews:
														</p>
														<p>
															"...this tossed together collection of random silliness actually works, and along with some delightful characters, creates a funny and worthwhile night of featherweight theatre."
														</p>
														<p>
															"Anderson’s script is clever and rife with insider references to Tacoma."
														</p>
														<p>
															"Some people get a lift from a good cookie – some people from a cup of tea. Many people have to have that cup of coffee. In “Java Tacoma, The Merry Wives Americano” the audience has it all – come, fill your cup at Dukesbay for all three and enjoy a fun-filled evening of theatre."
														</p>
													</b-col>
												</b-row>
											</b-card>
										</b-collapse>
									</b-col>
								</b-row>
							</resume-card>
						</b-col>
					</b-row>
					<b-row align-h="center">
						<b-col cols="12" md="8">
							<resume-card v-bind="history[3]">
								<template #logo>
									<b-img fluid :src="history[3].logo" />
								</template>
							</resume-card>
						</b-col>
					</b-row>
				</b-col>
				<b-col class="border-left border-primary">
					<b-row>
						<b-col>
							<h2 class="text-primary mt-5 text-center mb-4">
								<u>
								Skills
								</u>
							</h2>
							<b-row>
								<b-col>
									<b-row align-h="center">
										<b-col class="mb-3" cols="auto" v-for="(skill, index) in skills" :key="index">
											<skills-badge v-bind="skill" />
										</b-col>
									</b-row>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="border-top border-primary border-bottom pb-5 mb-4 mt-3">
						<b-col>
							<h2 class="text-primary text-center mt-5">
								<u>Education</u>
							</h2>
							<b-row align-v="center" align-h="center">
								<b-col class="mb-2 text-center text-md-right" cols="4">
									<b-img fluid src="https://www.pugetsound.edu/files/resources/20469_uofps_stacked_maroonrgb200.jpg" />
								</b-col>
								<b-col cols="12" md="8">
									<h6 class="mb-1 text-center text-md-left">
										University of Puget Sound
									</h6>
									<p class="mb-1 text-center text-md-left">
										English (Creative Writing), Theatre Arts
									</p>
									<p class="text-center text-md-left">
										August 2008 to May 2013
									</p>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
					<b-row class="mb-4">
						<b-col class="text-center">
							<h2 class="text-primary text-center mt-4">
								<u>Contact Me</u>
							</h2>
							<p class="text-center"> 
								I am always open to new opportunities. Do you have a role for which you think I'd be a good fit? 
							</p>
							<b-btn href="mailto:matthewlogananderson@gmail.com" variant="primary">
								Get in touch
							</b-btn>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-col>
	</b-row>
</template>

<script>
import SkillsBadge from '@/components/SkillsBadge'
import ResumeCard from '@/components/ResumeCard'
import PageHeader from '@/components/PageHeader'
export default {
	name: 'index',
	head: {
		title: 'Resume'
	},
	components: {
		PageHeader,
		ResumeCard,
		SkillsBadge
	},
	data () {
		return {
			qmCollapse: false,
			dukesbayCollapse: false,
			skills: [
				{
					skill: 'Facebook',
					icon: ['fab', 'facebook']
				},
				{
					skill: 'Twitter',
					icon: ['fab', 'twitter']
				},
				{
					skill: 'Youtube',
					icon: ['fab', 'youtube']
				},
				{
					skill: 'Pinterest',
					icon: ['fab', 'pinterest']
				},
				{
					skill: 'Instagram',
					icon: ['fab', 'instagram']
				},
				{
					skill: 'SEO', 
					icon: ['fab', 'google']
				},
				{
					skill: 'VueJS',
					icon: ['fab', 'vuejs']
				},
				{
					skill: 'ReactJS',
					icon: ['fab', 'react']
				},
				{
					skill: 'Analytics',
					icon: 'chart-bar'
				},
				{
					skill: 'Writing',
					icon: 'pen'
				},
				{
					skill: 'Editing',
					icon: 'edit'
				},
				{
					skill: 'WordPress',
					icon: ['fab', 'wordpress']
				},
				{
					skill: 'HTML',
					icon: ['fab', 'html5']
				},
				{
					skill: 'CSS',
					icon: ['fab', 'css3']
				},
				{
					skill: 'Javascript',
					icon: ['fab', 'js']
				},
				{
					skill: 'InDesign',
				},
				{
					skill: 'Photoshop'
				},
				{
					skill: 'Illustrator'
				},
				{
					skill: 'Word',
					icon: 'file-word'
				},
				{
					skill: 'Excel',
					icon: 'file-excel'
				},
				{
					skill: 'PowerPoint',
					icon: 'file-powerpoint'
				}
			],
			history: [
				{
					company: 'Bellevue College',
					position: 'Advisory Board Member',
					fromDate: 'August 2020',
					logo: 'https://www.tomboloinstitute.education/uploads/1/3/3/6/133615334/tombolo-logo-package-tombolo-lockup-color.jpg',
				},
				{
					company: 'QuickMedical',
					position: 'Marketing Director',
					fromDate: 'July 2013',
					toDate: 'February 2020',
					logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROjvrTlqTHlRqjBKU8TWKPySYJ-iCw74ToOg&usqp=CAU',
					description: 'I enhanced overall client experiences and boosted brand loyalty by conceptualizing, developing, producing, and delivering hard-hitting marketing solutions that incorporated storytelling and key brand messaging.'
				},
				{
					company: 'Dukesbay Productions',
					position: 'Playwright & Stage Manager',
					fromDate: 'October 2012',
					toDate: 'March 2014',
					logo: 'https://dukesbay.org/wp-content/uploads/2013/10/logo.png',
				},
				{
					company: 'The Puget Sound Trail',
					logo: 'http://trail.pugetsound.edu/wp-content/uploads/2015/04/png-1.png',
					position: 'News Editor',
					fromDate: 'September 2008',
					toDate: 'May 2013'
				}
			]
		}
	},
	methods: {
		isEven (index) {
			if (index === 0 || index % 2 == 0) {
				return true
			} else {
				return false
			}
		}
	}
}
</script>

<style>

</style>