<template>
	<view class="barbg">
		<image v-if="bgtype==0" src="@/static/image/navbg-circle.png" mode="widthFix"></image>
		<image v-else src="@/static/image/navbg.png" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		props:{
			bgtype:{
				default:1,
				isCenter:true,
			}
		},
		data() {
			return {
				navH: 0
			}
		},
		mounted() {
			const navH = getApp().globalData.navHeight
			this.navH = navH
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="less">
	// .barbg{position: fixed;top: 0;left: 0;right: 0;
	.barbg{position: absolute;top: 0;left: 0;right: 0;
		image{width: 750rpx;height: 660rpx;}
	}
</style>
