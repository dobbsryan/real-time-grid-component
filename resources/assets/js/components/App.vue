<template>
	<div id="app">
		<grid></grid>
	</div>
</template>

<script>
	import Grid from './Grid.vue'
	import store from '../vuex/store'

	export default {
		components: { Grid },
		store
	}
</script>