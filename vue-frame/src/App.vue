<template>
    <div id="app">
      	<router-view></router-view>
    </div>
</template>
<script>
export default {
	name:'app',
	data () {
		return {
			
		}
	},
	mounted () {
		let sum = (obj, ...rest) => {
			console.log(rest)  // [2,3,4,5]
		}
	},
	methods: {
	}
}
</script>

<style lang="scss">
@import '@/sass/common.scss';
</style>