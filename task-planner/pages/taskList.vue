<template>
	<div class="all-task-list">
		<div class="all-task-list__container">
			<div class="header">
				<span class="text-xl">Task Planner</span>
				<div class="filter-bar">
					<div 
						v-for="(filter, index) in filterBar" 
						:key="index"
						class="filter-bar__item"
					>
						{{ filter.label }}
					</div>
				</div>
			</div>
			<TaskCardComponent  
				v-for="(task, index) in allTasks"
				:key="index"
				:taskTitle="task.title"
				:isChecked="task.is_done"
				:isImportant="task.is_important"
				@updateImportance="updateImportance(task.id)"
				@toggleTask="toggleCheck(task.id)"
				@deleteTask="onDeleteTask(task.id)"
			/>
			<InputFieldComponent 
				@onHitEnter="onHitEnter" 
				v-model="newTaskTitle"
			/>
		</div>
	</div>	
</template>

<script>
	export default {
		data() {
			return {
				newTaskTitle: '',
				filterBar: [
					{label: 'All', value: ''},
					{label: 'Important', value: ''},
					{label: 'Done', value: ''},
				]
			}
		},
		async mounted() {
			await this.$store.dispatch('TASKS/onGetAllTasks')
		},
		watch: {
			newTaskTitle: {
				deep: true,
				async handler() {
					if(this.newTaskTitle == '') {
						await this.$store.dispatch('TASKS/onGetAllTasks')
					}
				}
			}
		},
		computed: {
			allTasks() {
				return this.$store.state.TASKS.allTasks.data
			}
		},
		methods: {
			async toggleCheck(id) {
				const payload = {
					id,
					is_done: true,
				}

				await this.$store.dispatch('TASKS/onUpdateTask', payload)
			},
			onHitEnter() {
				const payload = {
					title: this.newTaskTitle
				}

				this.$store.dispatch('TASKS/createNewTask', payload)

				this.newTaskTitle = ''
			},
			async onDeleteTask(id) {
				const payload = {
					id
				}

				await this.$store.dispatch('TASKS/onDeleteTask', payload)
			},
			async updateImportance(id) {
				const payload = {
					id,
					is_important: true,
				}

				await this.$store.dispatch('TASKS/onUpdateTask', payload)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.all-task-list {
		&__container {
			@apply flex flex-col justify-center items-center gap-4 p-8 ;
			.header {
				@apply flex justify-between items-center ;
				width: 700px;
				.filter-bar {
					@apply flex gap-3 ;
					&__item {
						@apply text-xs ;
						&:hover {
							@apply bg-slate-400 rounded-md p-0.5 ;
						}
					}
				}
			}
		}
	}
</style>
