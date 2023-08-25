<template>
	<div class="home-page">
		<div class="home-page__header">
			<div class="text-center text-4xl">Welcome to task planner</div>	
			<div class="text-center text-sm">Get things done with your day, a list that refreshes everyday</div>
			<input-field-component 
				@onHitEnter="onHitEnter" 
				v-model="newTaskTitle"
			/>
			{{ newTaskTitle }}
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				newTaskTitle: ''
			}
		},
		mounted() {
			this.$store.dispatch('TASKS/onGetAllTasks')
		},
		methods: {
			onHitEnter() {
				const payload = {
					title: this.newTaskTitle
				}

				this.$store.dispatch('TASKS/createNewTask', payload)

				this.$router.push({ path: '/taskList'})
			}
		},
		computed: {
			allTasks() {
				return this.$store.state.TASKS.allTasks
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home-page {
		@apply flex justify-center items-center ;
		height: 100vh;
		&__header {
			@apply flex flex-col gap-4 ;
		}
	}
</style>
