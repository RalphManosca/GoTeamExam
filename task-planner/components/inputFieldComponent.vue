<template>
	<div class="input-field-component">
		<div class="input-field-component__container">
			<font-awesome-icon :icon="['fas', 'plus']" class="text-slate-400"/>
			<input 
				type="text"
				v-model="keyword"
				placeholder="Whats your plan for today?"
				@keyup.enter="$emit('onHitEnter')"
			>
		</div>
		<div class="text-xs">Please <span class="text-rose-400">enter</span> to add task</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			keyword: ''
		}
	},
	mounted() {
		if(this.value) {
			this.keyword = this.value
		}
	},
	watch: {
		value: {
			deep: true,
			handler() {
				this.keyword = this.value
			}
		},
		keyword() {
            this.$emit('input', this.keyword)
        },
	},
	props: {
    	value: { type: String, default: '' },
  	},
	emits: [ 'onHitEnter', 'input' ]
}
</script>

<style lang="scss" scoped>
	.input-field-component {
		&__container {
			@apply bg-slate-200 p-2 ;
			width: 700px;
			input {
				@apply bg-slate-200 ;
				&:focus {
					outline: none;
				}
			}
		}
	}
</style>