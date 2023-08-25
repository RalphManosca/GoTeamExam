<template>
	<div class="task-card-component">
		<div class="task-card-component__left">
			<input type="radio" @change="toggleTask()" :value="isChecked"/>
			<div :class="{'line-through': isChecked || checkedNote}">{{ taskTitle }}</div>
		</div>
		<div class="task-card-component__right">
			<div v-if="!toDeleteNote" class="favorite-note">
				<font-awesome-icon 
					:icon="[ `${isImportantNote || isImportant ? 'fas' : 'far'}`, 'star']" 
					:class="{'text-yellow-400': isImportantNote || isImportant }"
					@click="importantTask()"
				/>
			</div>
			<div class="delete-note">
				<font-awesome-icon v-if="!toDeleteNote" :icon="['fas', 'trash-can']" class="text-rose-400" @click="toDeleteNote = true"/>
				<div v-else class="delete-note__prompt">
					<span>Are you sure you want to delete this note?</span>
					<button @click="deleteTask()" class="text-green-500">Yes</button>
					<button @click="toDeleteNote = false" class="text-red-500">No</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			toDeleteNote: false,
			checkedNote: false,
			isImportantNote: false
		}
	},
	props: {
		taskTitle: { type: String, default: '' },
		isChecked: Boolean,
		isImportant: Boolean
	},
	emits: [ 'toggleTask', 'deleteTask', 'updateImportance' ],
	methods: {
		toggleTask() {
			this.$emit('toggleTask')
			this.checkedNote = !this.checkedNote
		},
		deleteTask() {
			this.$emit('deleteTask')
			this.toDeleteNote = false
		},
		importantTask() {
			this.$emit('updateImportance')
			this.isImportantNote = true
		}
	}
}
</script>

<style lang="scss" scoped>
	.task-card-component {
		@apply flex justify-between bg-white border rounded-md p-4 shadow ;
		width: 700px;
		&__left {
			@apply flex gap-4 ;
		}
		&__right {
			@apply flex items-center text-xs gap-4 ;
			.delete-note {
				&__prompt {
					@apply flex gap-2 ;
				}
			}
		}
	}
</style>
