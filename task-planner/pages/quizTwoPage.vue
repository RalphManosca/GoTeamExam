<template>
	<div class="profile-page">
		<div class="profile-page__navbar">
			<div class="profile-page__navbar__leftContainer">
				<div class="logo-container">
					<img src="@/assets/images/goteam-logo.png" alt="logo">
				</div>
				<span>Career</span>
				<span>Find your Role</span>
			</div>
			<div class="profile-page__navbar__centerContainer">
				<div class="search-bar-component">
					<div class="search-bar-component__container">
						<input type="text" placeholder="Type for job or title or role">
						<div class="search-bar-component__container__button">
							<font-awesome-icon :icon="['fas', 'magnifying-glass']" />
							<span>Search</span>		
						</div>
					</div>
				</div>
			</div>
			<div class="profile-page__navbar__rightContainer">
				<div class="avatar-button-component">
					<div class="avatar-button-component__container">
						<div class="text-container">
							<div class="text-right">Reyven Biloy</div>
							<div class="text-cyan-400">reyvenb@gmail.com</div>
						</div>
						<div class="image-container">
							<img src="@/assets/images/default-avatar.png" alt="logo">
						</div>
						<font-awesome-icon :icon="['fass', 'chevron-down']" size="2xs"/>
					</div>
				</div>
			</div>
		</div>
		<div class="profile-page__container">
			<div class="profile-page__container__content">
				<div class="profile-navigation-component">
					<div class="profile-navigation-component__listTop">
						<div 
							v-for="(item, index) in profileNav.topNav"
							:key="index"
							class="profile-navigation-component__listTop__item cursor-pointer"
							@click="onClickProfileNav(item.label)"
						>
							<div class="profile-navigation-component__listTop__item__first">
								<font-awesome-icon :icon="item.icon" size="3xs" :class="{'text-sky-500': selectedProfileNav === item.label}"/>
								<div :class="['label', {'text-sky-500': selectedProfileNav === item.label}]">{{ item.label }}</div>
							</div>
							<font-awesome-icon v-if="selectedProfileNav === item.label" :icon="['fas', 'chevron-right']" size="3xs" class="text-sky-500"/>
						</div>
					</div>
					<div class="profile-navigation-component__listBottom">
						<div 
							v-for="(item, index) in profileNav.bottomNav"
							:key="index"
							class="profile-navigation-component__listBottom__item cursor-pointer"
							@click="onClickProfileNav(item.label)"
						>
							<div class="profile-navigation-component__listBottom__item__first">
								<font-awesome-icon :icon="item.icon" size="3xs" :class="{'text-sky-500': selectedProfileNav === item.label}"/>
								<div :class="['label', {'text-sky-500': selectedProfileNav === item.label}]">{{ item.label }}</div>
								<div v-if="item.label == 'Notifications'" class="notification-count">2</div>
							</div>
							<font-awesome-icon v-if="selectedProfileNav === item.label" :icon="['fas', 'chevron-right']" size="3xs" class="text-sky-500"/>
						</div>
					</div>
					<div class="profile-navigation-component__footer">
						<div class="mb-2">Copyright 2018 - 2023. All Rights Reserved</div>
						<div class="text-sky-500">Terms of Use • Privacy Policy</div>
					</div>
				</div>
				<div class="profile-page__container__content__moreDetails">
					<div class="profile-details-header-component">
						<div class="profile-details-header-component__containerFirst">
							<div class="profile-details-header-component__containerFirst__close">
								<input type="checkbox" name="checkbox">
								<div class="text-sm">Dont' remind me again</div>
								<font-awesome-icon :icon="['fas', 'xmark']" class="text-rose-400"/>
							</div>
							<div class="profile-details-header-component__containerFirst__text">
								<div class="font-semibold">Welcome, Reyven</div>
								<div class="text-sm"><span class="text-lime-500">You are almost done!</span> To further strenghten your profile, it is highly recommended for you to complete the 4 sections of your application</div>
							</div>
						</div>
						<div class="profile-details-header-component__containerSecond">
							<div class="profile-progress-component">
								<div class="profile-progress-component__list">
									<div 
										v-for="(item, index) in profileNav.topNav"
										:key="index"
										class="profile-progress-component__list__item"
									>
										<div class="icon-container">
											<font-awesome-icon :icon="item.icon" size="3xs"/>
										</div>
										<div class="text-sm">{{ item.label }}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="profile-details-and-suggestion-container">
						<div class="profile-details-component">
							<div class="profile-details-component__container">
								<div class="profile-details-component__container__basicDetails">
									<div class="avatar-container">
										<div class="avatar-image-container">
											<img src="@/assets/images/default-avatar.png" alt="logo">
										</div>
									</div>
									<div class="text-container">
										<div class="text-container__name">
											<div class="mb-1 font-semibold">Reyven S. Biloy</div>
											<div class="text-xs">UI/UX Designer</div>
										</div>
										<div class="text-container__education">
											<font-awesome-icon :icon="['fas', 'graduation-cap']"/>
											<span>Bachelor of Science in Computer Science</span>
										</div>
										<div class="text-container__other">
											<div class="text-container__other__items">
												<font-awesome-icon :icon="['fas', 'suitcase']" />
												<span>12 years</span> 
											</div>
											<div class="text-container__other__items">
												<font-awesome-icon :icon="['fas', 'calendar-check']" />
												<span>Immediately</span> 
											</div>
											<div class="text-container__other__items">
												<font-awesome-icon :icon="['fab', 'bitcoin']" />
												<span class="text-lime-500">Php 35,0000</span> 
											</div>
										</div>
										<font-awesome-icon :icon="['fas', 'pencil']" class="absolute top-4 right-4" />
									</div>
								</div>
								<div class="profile-details-component__container__generalDetails">
									<div class="font-semibold">General Details</div>
									<div class="profile-details-component__container__generalDetails__content">
										<div 
											v-for="(detail, index) in generalDetails" 
											:key="index" 
											class="grid grid-cols-6 gap-4"
										>
											<span class="col-span-3 text-sm">{{ detail.label }}</span>
											<span class="col-span-3 text-sm">{{ detail.value }}</span>
										</div>
									</div>
									<font-awesome-icon :icon="['fas', 'pencil']" class="absolute top-4 right-4" />
								</div>
								<div class="profile-details-component__container__professionalStatus">
									<div class="font-semibold">Professional Status</div>
									<div class="profile-details-component__container__professionalStatus__content">
										<div 
											v-for="(detail, index) in professionalDetails" 
											:key="index" 
											class="grid grid-cols-6 gap-4"
										>
											<span class="col-span-3 text-sm">{{ detail.label }}</span>
											<span :class="{'text-lime-500': detail.label == 'Current Montly Salary(Gross)'}" class="col-span-3 text-sm">{{ detail.value }}</span>
										</div>
									</div>
									<font-awesome-icon :icon="['fas', 'pencil']" class="absolute top-4 right-4" />
								</div>
								<div class="profile-details-component__container__preferences">
									<div class="font-semibold">Preferences</div>
									<div class="profile-details-component__container__preferences__content">
										<div 
											v-for="(detail, index) in preferences" 
											:key="index" 
											class="grid grid-cols-6 gap-4"
										>
											<span class="col-span-3 text-sm">{{ detail.label }}</span>
											<span class="col-span-3 text-sm">{{ detail.value }}</span>
										</div>
									</div>
									<font-awesome-icon :icon="['fas', 'pencil']" class="absolute top-4 right-4" />
								</div>
							</div>
						</div>
						<div class="others-component">
							<div class="others-component__container">
								<div class="video-intro-section">
									<div class="header">Video Introduction</div>
									<div class="image-container">
										<img src="@/assets/images/video-intro-placeholder.jpg" alt="placeholder">
									</div>
								</div>
								<div class="profile-completion-section">
									<div class="header">Profile Completion</div>
									<div class="text-lime-400 font-bold text-sm text-center">Well done, Reyven!</div>
									<div class="image-container">
										<img src="@/assets/images/award-ribbon.png" alt="placeholder">
									</div>
									<div class="subtitle">You have the strongest professional profile in our talent pool. Expect progress on your application anytime soon</div>
								</div>
								<div class="profile-completion-section">
									<div class="header">Profile Completion</div>
									<progress-bar></progress-bar>
									<div class="recommendation-accordion">
										<div @click="onClickAccordion()" class="button-activator">
											<font-awesome-icon :icon="['fas', 'chevron-down']" />
											<span>Hide Recommendations</span> 
										</div>
										<div v-if="!hideAccordion" class="recommendation-accordion__content">
											<div class="text-xs px-3">Fill up the following items to strenghten your profile. this can help us matching your profile and increase your chances of landing into your desired role.</div>
											<div class="recommendation-accordion__content__listing">
												<div
													v-for="(recom, index) in recommendation" 
													:key="index" 
													class="recommendation-accordion__content__listing__items"
													v-html="recom"
												>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>

<script>
export default {
	data() {
		return {
			profileNav: {
				topNav: [
					{ label: 'Profile', icon: ['fas', 'user'] },
					{ label: 'Resume / CV', icon: ['fasl', 'file-invoice'] },
					{ label: 'Assessment', icon: ['fas', 'chart-column'] },
					{ label: 'Video Script', icon: ['fass', 'desktop'] }
				],
				bottomNav: [
					{ label: 'Application Tracking', icon: ['fas', 'suitcase'] },
					{ label: 'Bookmarked', icon: ['fas', 'bookmark'] },
					{ label: 'Notifications', icon: ['fas', 'bell'] },
					{ label: 'Activity Logs', icon: ['fas', 'wave-square'] },
					{ label: 'Settings', icon: ['fas', 'gear'] }
				]
			},
			generalDetails: [
				{ label: 'Date of Birth', value: '07 July 1986' },
				{ label: 'Gender', value: 'Male' },
				{ label: 'Civil Status', value: 'Married' },
				{ label: 'Nationality', value: 'Filipino' }
			],
			professionalDetails: [
				{ label: 'Recent Job Title', value: 'Web Designer and Developer' },
				{ label: 'Interview Availability', value: '-' },
				{ label: 'Current Montly Salary(Gross)', value: 'Php 30,0000.00' },
				{ label: 'Allowance(Non-Taxable)', value: '-' },
				{ label: 'Pre-employment Leaves', value: '07 July - Birthday' },
				{ label: 'Where can you work?', value: 'Office and Home' },
				{ label: 'Estimated time to office', value: '15 mins' },
				{ label: 'Connection Type', value: 'Globe Broadband' },
				{ label: 'Website / Portfolio', value: '-' }
			],
			preferences: [
				{ label: 'Day Shift', value: '-' },
				{ label: 'Mid Shift', value: '-' },
				{ label: 'Night Shift', value: '-' },
				{ label: 'English Only Policy (EOP)', value: '-' },
				{ label: 'Where did you hear us?', value: '-' },
				{ label: 'Marketing Permission', value: '-' },
				{ label: 'Referral', value: '-' }
			],
			recommendation: [
				'○ Share <span class="text-sky-500 cursor-pointer">Date of birth</span>',
				'○ Specify <span class="text-sky-500 cursor-pointer">Current Monthly Salary</span>',
				'○ Add one(1) <span class="text-sky-500 cursor-pointer">Character reference</span>',
				'○ Add <span class="text-sky-500 cursor-pointer">Current address</span>',
				'○ Add atleast five(5) items in <span class="text-sky-500 cursor-pointer">Other Skills</span>'
			],
			selectedProfileNav: 'Profile',
			hideAccordion: true
		}
	},
	methods: {
		onClickProfileNav(nav) {
			this.selectedProfileNav = nav
		},
		onClickAccordion() {
			this.hideAccordion = !this.hideAccordion
		}
	}
}
</script>

<style lang="scss" scoped>
	.profile-page {
		&__navbar {
			@apply flex px-8 py-3 mb-8 justify-between bg-white items-center shadow ;
			&__leftContainer {
				@apply flex gap-8 items-center ;
				span {
					@apply text-xs text-slate-500 ;
				}
				img {
					height: 31px;
					width: 100px;
				}
			}
			&__centerContainer {
				.search-bar-component {
					@apply border rounded-full ;
					&__container {
						@apply flex justify-between pl-4 pr-1 py-1 ;
						width: 350px;
						input {
							@apply text-xs ;
							&:focus {
								outline: none ;
							}
						}
						&__button {
							@apply p-2 rounded-full bg-indigo-700 text-white text-xs ;
						}
					}
				}
			}
			&__rightContainer {
				.avatar-button-component {
					&__container {
						@apply flex items-center gap-2 ;
						.text-container {
							@apply text-xs ;
						}
						.image-container {
							@apply border overflow-hidden rounded-full w-[32px] h-[32px] ;
							img {
								@apply h-full w-full object-cover ;
							}
						}
					}
				}
			}
		}
		&__container {
			&__content {
				@apply flex justify-center ;
				height: calc(100vh - 99px);
				.profile-navigation-component {
					@apply w-[260px] ;
					&__listTop {
						@apply flex flex-col gap-6 p-4 border-b ;
						&__item {
							@apply flex justify-between ;
							&__first {
								@apply flex items-center gap-2 ;
								.label {
									@apply text-xs ;
								}
							}
						}
					}
					&__listBottom {
						@apply flex flex-col gap-6 p-4 ;
						&__item {
							@apply flex justify-between ;
							&__first {
								@apply flex items-center gap-2 ;
								.label {
									@apply text-xs ;
								}
								.notification-count {
									@apply text-xs text-white px-0.5 bg-rose-400 rounded-sm ;
								}
							}
						}
					}
					&__footer {
						@apply text-xs ;
					}
				}
				&__moreDetails {
					@apply overflow-y-scroll ;
					scrollbar-width: none;
					&::-webkit-scrollbar {
						width: 0;
						background: transparent;
					}
					.profile-details-header-component {
						@apply bg-white shadow rounded-lg mb-4 ml-4 ;
						&__containerFirst {
							@apply relative px-4 py-2 border-b ;
							&__close {
								@apply flex gap-1 mb-1 place-content-end ;
							}
						}
						&__containerSecond {
							.profile-progress-component {
								&__list {
									@apply flex justify-around p-4 ;
									&__item {
										@apply flex gap-2 ;
										.icon-container {
											@apply rounded-full bg-gray-400 h-8 w-8 items-center justify-center flex ;
										}
									}
								}
							}
						}
					}
					.profile-details-and-suggestion-container {
						@apply flex gap-4 ;
						.others-component {
							@apply  w-[340px] ;
							&__container {
								.video-intro-section {
									@apply rounded-t-lg shadow bg-white mb-4 ;
									.header {
										@apply p-4 text-sm font-semibold ;
									}
								}
								.profile-completion-section {
									@apply rounded-lg shadow bg-white mb-4 ;
									.header {
										@apply p-4 text-sm ;
									}
									.image-container {
										@apply flex items-center justify-center ;
										img {
											@apply h-[120px] w-[120px];
										}
									}
									.subtitle {
										@apply p-4 text-xs ;
									}
									.recommendation-accordion {
										@apply p-4 text-xs ;
										&__content {
											@apply pt-4 ;
											&__listing {
												@apply pt-4 px-3 flex flex-col gap-1 ;
												&__items {

												}
											}
										}
									}
								}
							}
						}
						.profile-details-component {
							&__container {
								@apply border bg-white shadow rounded-lg ml-4 mb-8 w-[610px];
								&__basicDetails {
									@apply flex border-b ;
									.avatar-container {
										@apply flex items-center justify-center px-4 py-6 ;
										.avatar-image-container {
											@apply border overflow-hidden rounded-full w-[100px] h-[100px] ;
											img {
												@apply h-full w-full object-cover ;
											}
										}
									}
									.text-container {
										@apply relative flex flex-col gap-4 border-l px-4 py-6 w-full ;
										&__education {
											@apply text-xs ;
										}
										&__other {
											@apply flex gap-16 ;
											&__items {
												@apply flex items-center gap-1 ;
												span {
													@apply text-xs ;
												}
											}
										}
									}
								}
								&__generalDetails {
									@apply border-b p-4 relative flex flex-col gap-4 ;
									&__content {
										@apply flex flex-col gap-4 ;
									}
								}
								&__professionalStatus {
									@apply border-b p-4 relative flex flex-col gap-4 ;
									&__content {
										@apply flex flex-col gap-4 ;
									}
								}
								&__preferences {
									@apply p-4 relative flex flex-col gap-4 ;
									&__content {
										@apply flex flex-col gap-4 ;
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>

